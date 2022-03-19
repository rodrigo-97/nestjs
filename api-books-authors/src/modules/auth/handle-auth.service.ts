import {
  HttpException,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { SignInDto } from './dto/handle-auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signIn(signInDto: SignInDto) {
    try {
      const user = await this.prisma.author.findUnique({
        where: { email: signInDto.email },
      });

      if (!user) throw new NotFoundException('Usuário não encontrado');

      const isPasswordValid = await bcrypt.compare(
        signInDto.password,
        user.password,
      );

      if (!isPasswordValid) throw new UnauthorizedException('Senha incorreta');

      return 'token';
    } catch (error) {
      Logger.error('Erro ao buscar autor', 'SignIn');
      throw new HttpException('Erro ao autenticar autor', 400);
    }
  }
}
