import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { ModelParserService } from 'src/helpers/model-parser/model-parser.service';
import { Book } from '../books/entities/book.entity';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorsService {
  constructor(
    private prisma: PrismaService,
    private modelParser: ModelParserService<Book>,
  ) {}

  create(createAuthorDto: CreateAuthorDto) {
    return this.prisma.author.create({
      data: {
        ...createAuthorDto,
      },
    });
  }

  findAll() {
    return this.prisma.author.findMany({ include: { books: true } });
  }

  findOne(id: string) {
    return this.prisma.author.findUnique({ where: { id } });
  }

  update(id: string, updateAuthorDto: UpdateAuthorDto) {
    return this.prisma.author.update({ data: updateAuthorDto, where: { id } });
  }

  remove(id: string) {
    return this.prisma.author.delete({ where: { id } });
  }
}
