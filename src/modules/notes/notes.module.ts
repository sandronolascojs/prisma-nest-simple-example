import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { PrismaService } from '../../common/services/prisma.service';

@Module({
  controllers: [NotesController],
  providers: [NotesService, PrismaService],
  imports: [],
})
export class NotesModule {}
