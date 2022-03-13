import { Injectable } from '@nestjs/common';

@Injectable()
export class ModelParserService<T> {
  private entities: Array<T>;
  private entityName: string;

  setEntities(entities: Array<T>) {
    this.entities = entities;
  }

  setEntityName(name: string) {
    this.entityName = name;
  }

  parse() {
    return this.entities.map((e: T) => {
      const create = {
        [this.entityName]: {
          create: e,
        },
      };
      return create;
    });
  }
}
