export class Book {
  id?: string;
  title: string;
  subtitle: string;
  rating: number;
  releaseDate: Date;
  readonly createAt: Date;
  readonly updatedAt: Date;
}
