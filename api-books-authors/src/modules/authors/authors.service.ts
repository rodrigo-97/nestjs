import { Injectable, Logger } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { AuthorRepository } from './authors.repository';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Injectable()
export class AuthorsService {
  constructor(
    private prisma: PrismaService,
    private repository: AuthorRepository,
  ) {}

  async create(createAuthorDto: CreateAuthorDto) {
    try {
      createAuthorDto.password = await bcrypt.hash(
        createAuthorDto.password,
        Number(process.env.PASSWORD_SALT),
      );
      return this.repository.create(createAuthorDto, {
        create: [{ book: { create: createAuthorDto.books } }],
      });
    } catch (error) {
      Logger.error(error, 'Create Author');
      throw new Error(error);
    }
  }

  findAll() {
    return this.repository.findAll(null, { books: true });
  }

  findOne(id: string) {
    return this.repository.findById(id);
  }

  update(id: string, updateAuthorDto: UpdateAuthorDto) {
    return this.repository.update(updateAuthorDto, id);
  }

  remove(id: string) {
    return this.repository.delete(id);
  }

  async updatePassword(id: string, updatePasswordDto: UpdatePasswordDto) {
    try {
      const user = await this.prisma.author.findUnique({
        where: { id },
        select: { password: true },
      });
      const isCurrentPasswordValid = await bcrypt.compare(
        updatePasswordDto.currentPassword,
        user.password,
      );

      if (!isCurrentPasswordValid)
        throw new Error('A senha atual informada é diferente da cadastrada');

      if (updatePasswordDto.confirmPassword !== updatePasswordDto.newPassword)
        throw new Error('A senha de confirmação não é igual a senha informada');

      const newPassword = await bcrypt.hash(
        updatePasswordDto.newPassword,
        process.env.PASSWORD_SALT,
      );

      this.repository.update({ password: newPassword }, id);
    } catch (error) {
      Logger.error('Erro ao alterar senha', 'Current password check');
    }
  }
}
