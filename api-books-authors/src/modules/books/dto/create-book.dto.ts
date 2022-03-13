import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsDateString,
  IsDefined,
  IsNumber,
  IsString,
  Max,
  MaxDate,
  Min,
} from 'class-validator';

export class CreateBookDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  @IsString({ message: 'Tipo inválido' })
  @IsDefined({ message: 'Campo obrigatório' })
  subtitle: string;

  @ApiProperty()
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'Nota precisa ser um valor entre 0 e 5 ' },
  )
  @Max(5, { message: 'Valor máximo aceito é 5' })
  @Min(0, { message: 'O valor mínimo aceito é 0' })
  rating: number;

  @ApiProperty()
  @IsDateString({ message: 'O campo precisa ser do tipo data' })
  releaseDate: Date;

  readonly createAt: Date;
  readonly updatedAt: Date;
}
