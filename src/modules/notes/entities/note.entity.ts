import { randomUUID } from "crypto";
import { INote } from "../interfaces/note.interface";


export class NoteEntity implements INote {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;

    constructor({ title, content, id }: {title: string; content: string, id?: string}) {
        this.id = id ?? randomUUID()
        this.title = title;
        this.content = content;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}