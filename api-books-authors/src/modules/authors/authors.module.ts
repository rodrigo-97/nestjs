import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { PrismaService } from '../../database/prisma/prisma.service';
import { ModelParserService } from 'src/helpers/model-parser/model-parser.service';

@Module({
  controllers: [AuthorsController],
  providers: [AuthorsService, PrismaService, ModelParserService],
})
export class AuthorsModule {}
