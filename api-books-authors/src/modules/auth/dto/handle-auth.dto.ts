import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class SignInDto {
  @ApiProperty()
  @IsEmail({}, { message: 'E-mail inválido' })
  @IsString({ message: 'Valor inválido' })
  email: string;

  @ApiProperty()
  password: string;
}
