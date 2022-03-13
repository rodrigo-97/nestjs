import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}
  create(createBookDto: CreateBookDto) {
    return this.prisma.book.create({ data: createBookDto });
  }

  findAll() {
    return this.prisma.book.findMany();
  }

  findOne(id: string) {
    return this.prisma.book.findUnique({ where: { id } });
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    return this.prisma.book.update({ data: updateBookDto, where: { id } });
  }

  remove(id: string) {
    return this.prisma.book.delete({ where: { id } });
  }
}
