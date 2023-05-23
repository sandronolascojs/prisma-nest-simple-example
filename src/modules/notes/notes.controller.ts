import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { NoteDto } from './dtos/body/note.dto';
import { NotesService } from './notes.service';
import { Note } from '@prisma/client';
import { NoteEntity } from './entities/note.entity';
import { idParamDto } from './dtos/params/idParam.dto';

@Controller('notes')
export class NotesController {
    constructor(
        private readonly notesService: NotesService
    ) {}
    
    @Get()
    async findAll(): Promise<Note[]> {
        const notes = await this.notesService.findAll();
        return notes;
    }

    @Post()
    @HttpCode(201)
    async create(@Body() { title, content }: NoteDto): Promise<Note> {
        const note = new NoteEntity({ title, content });
        const createdNote = await this.notesService.create(note);
        
        return createdNote;
    }

    @Get(':id')
    async getOne(@Param() { id }: idParamDto): Promise<Note> {
        const note = await this.notesService.findOne(id);
        return note;
    }
}

