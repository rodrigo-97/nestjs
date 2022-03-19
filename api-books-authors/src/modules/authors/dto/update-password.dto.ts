import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString, Matches } from 'class-validator';

export class UpdatePasswordDto {
  @ApiProperty()
  @IsString({ message: 'Valor inválido' })
  @IsDefined({ message: 'Campo obrigatório' })
  currentPassword: string;

  @ApiProperty()
  @IsString({ message: 'Valor inválido' })
  @IsDefined({ message: 'Campo obrigatório' })
  @Matches(
    /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/,
    {
      message: `Senha inválida`,
    },
  )
  newPassword: string;

  @ApiProperty()
  @IsString({ message: 'Valor inválido' })
  @IsDefined({ message: 'Campo obrigatório' })
  @Matches(
    /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/,
    {
      message: `Senha inválida`,
    },
  )
  confirmPassword: string;
}
