export type Pagination = {
  currentPage: number;
  pagesCount: number;
  nextPage: number;
  previousPage: number;
  perPage: number;
};

export type Include = any;

export type IRepository<T> = {
  findAll(pagination?: Pagination, include?: Include): Promise<Array<T>>;
  findById(id: string): Promise<T>;
  delete(id: string): Promise<T>;
  create(entity: T, include?: Include): Promise<T>;
  update(entity: T, id: string): Promise<T>;
};
