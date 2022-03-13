import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsInt, IsString } from 'class-validator';
import { CreateAuthorDto } from './create-author.dto';

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {
  id: string;

  @ApiProperty()
  @IsString({ message: 'Valor inválido' })
  @IsEmail({}, { message: 'E-mail inválido' })
  @IsDefined({ message: 'Campo obrigatório' })
  email: string;

  @ApiProperty()
  @IsString({ message: 'Valor inválido' })
  @IsDefined({ message: 'Campo obrigatório' })
  name: string;

  @ApiProperty()
  @IsInt({ message: 'Idade deve ser passada como valor inteiro' })
  @IsDefined({ message: 'Campo obrigatório' })
  age: number;

  readonly createAt: Date;
  readonly updatedAt: Date;
}
