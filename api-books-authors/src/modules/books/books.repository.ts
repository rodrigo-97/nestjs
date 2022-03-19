import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { IRepository, Pagination } from 'src/interfaces/IRepository';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksRepository implements IRepository<Book> {
  constructor(private prisma: PrismaService) {}
  findAll(pagination?: Pagination, include?: any): Promise<Book[]> {
    try {
      return this.prisma.book.findMany({ include });
    } catch (error) {
      Logger.error(error, 'List Books');
      throw new Error('Erro ao listar livros');
    }
  }

  findById(id: string): Promise<Book> {
    try {
      return this.prisma.book.findUnique({ where: { id } });
    } catch (error) {
      Logger.error(error, 'List Book');
      throw new Error('Erro ao listar livro');
    }
  }

  delete(id: string): Promise<Book> {
    try {
      return this.prisma.book.delete({ where: { id } });
    } catch (error) {
      Logger.error(error, 'List Books');
      throw new Error('Erro ao deletar livro');
    }
  }

  create(entity: Book): Promise<Book> {
    try {
      return this.prisma.book.create({ data: entity });
    } catch (error) {
      Logger.error(error, 'List Books');
      throw new Error('Erro ao criar livro');
    }
  }

  update(entity: Book, id: string): Promise<Book> {
    try {
      return this.prisma.book.update({ data: entity, where: { id } });
    } catch (error) {
      Logger.error(error, 'List Books');
      throw new Error('Erro ao alterar livro');
    }
  }
}
