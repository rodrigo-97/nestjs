import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PersonsModule } from "./modules/persons/persons.module";
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost/nest"), PersonsModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
