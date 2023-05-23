import { IsNotEmpty, IsString, Length, MaxLength } from "class-validator";

export class NoteDto {
    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    title: string;

    @IsString()
    @Length(3, 500)
    content: string;
}