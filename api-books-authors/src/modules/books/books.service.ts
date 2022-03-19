import { Injectable } from '@nestjs/common';
import { BooksRepository } from './books.repository';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(private repository: BooksRepository) {}
  create(createBookDto: CreateBookDto) {
    return this.repository.create(createBookDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findById(id);
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    return this.repository.update(updateBookDto, id);
  }

  remove(id: string) {
    return this.repository.delete(id);
  }
}
