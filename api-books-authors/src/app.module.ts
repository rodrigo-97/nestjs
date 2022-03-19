import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './configs/config';
import { PrismaService } from './database/prisma/prisma.service';
import { ModelParserService } from './helpers/model-parser/model-parser.service';
import { AuthModule } from './modules/auth/handle-auth';
import { AuthorsModule } from './modules/authors/authors.module';
import { BooksModule } from './modules/books/books.module';

@Module({
  imports: [
    BooksModule,
    AuthorsModule,
    ConfigModule.forRoot({ load: [config] }),
    AuthModule,
  ],
  providers: [PrismaService, ModelParserService],
})
export class AppModule {}
