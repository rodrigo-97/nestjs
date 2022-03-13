import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsInt, IsString } from 'class-validator';

export class CreateAuthorDto {
  id?: string;

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

  // @ApiProperty({
  //   isArray: true,
  //   type: CreateBookDto,
  // })
  // books?: Array<CreateBookDto>;

  readonly createAt: Date;
  readonly updatedAt: Date;
}
