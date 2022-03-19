import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SignInDto } from './dto/handle-auth.dto';
import { AuthService } from './handle-auth.service';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  create(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }
}
