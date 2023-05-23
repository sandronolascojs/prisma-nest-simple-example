import { Injectable } from '@nestjs/common';
import { Note } from '@prisma/client';
import { PrismaService } from '../../common/services/prisma.service';

@Injectable()
export class NotesService {
    constructor(private prisma: PrismaService) { }

    async create(data: Note): Promise<Note> {
        const note = await this.prisma.note.create({
            data,
        });

        return note;
    }

    async findAll(): Promise<Note[]> {
        const notes = await this.prisma.note.findMany();
        return notes;
    }

    async findOne(id: string): Promise<Note> {
        const note = await this.prisma.note.findUnique({
            where: { id },
        });

        return note;
    }
}
