import { Module } from '@nestjs/common';
import { NotesModule } from './modules/notes/notes.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [NotesModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  })],
  controllers: [],
  providers: [],
})

export class AppModule {}