import { Prisma } from '@prisma/client';

export class Book {
  id?: string;
  title: string;
  subtitle: string;
  rating: number | Prisma.Decimal;
  releaseDate: Date;
  readonly createAt: Date;
  readonly updatedAt: Date;
}
