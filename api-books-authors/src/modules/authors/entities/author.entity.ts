export class Author {
  id?: string;
  email: string;
  name: string;
  age: number;
  password: string;
  readonly createAt: Date;
  readonly updatedAt: Date;
}
