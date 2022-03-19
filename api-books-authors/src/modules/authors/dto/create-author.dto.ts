import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';
import { CreateBookDto } from 'src/modules/books/dto/create-book.dto';

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

  @ApiProperty()
  @IsString({ message: 'Valor inválido' })
  @IsDefined({ message: 'Campo obrigatório' })
  @Matches(
    /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/,
    {
      message: 'Senha inválida',
    },
  )
  password: string;

  @ApiProperty({
    isArray: true,
    type: CreateBookDto,
  })
  @IsOptional()
  books?: Array<CreateBookDto>;

  readonly createAt: Date;
  readonly updatedAt: Date;
}
