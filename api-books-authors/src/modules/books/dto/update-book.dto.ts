import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  subtitle: string;

  @ApiProperty()
  rating: number;

  @ApiProperty()
  releaseDate: Date;

  readonly createAt: Date;
  readonly updatedAt: Date;
}
