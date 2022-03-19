import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { Include, IRepository, Pagination } from 'src/interfaces/IRepository';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorRepository implements IRepository<Author> {
  constructor(private prisma: PrismaService) {}
  findAll(pagination?: Pagination, include?: Include): Promise<Author[]> {
    try {
      return this.prisma.author.findMany({ include });
    } catch (error) {
      Logger.error(error);
      throw new Error('Erro ao listar autor');
    }
  }

  findById(id: string): Promise<Author> {
    try {
      return this.prisma.author.findUnique({ where: { id } });
    } catch (error) {
      Logger.error(error);
      throw new Error('Erro ao listar autor');
    }
  }

  delete(id: string): Promise<Author> {
    try {
      return this.prisma.author.delete({ where: { id } });
    } catch (error) {
      Logger.error(error);
      throw new Error('Erro ao excluir autor');
    }
  }

  create(entity: Author, include?: Include): Promise<Author> {
    try {
      return this.prisma.author.create({
        data: entity,
      });
    } catch (error) {
      Logger.error(error);
      throw new Error('Erro ao criar autor');
    }
  }

  update(entity: Partial<Author>, id: string): Promise<Author> {
    try {
      return this.prisma.author.update({ data: entity, where: { id } });
    } catch (error) {
      Logger.error(error);
      throw new Error('Erro ao alterar autor');
    }
  }
}
