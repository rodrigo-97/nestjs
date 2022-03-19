import { Module } from '@nestjs/common';
import { AuthService } from './handle-auth.service';
import { AuthController } from './handle-auth.controller';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
})
export class AuthModule {}
