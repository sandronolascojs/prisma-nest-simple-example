import { NoteEntity } from "./note.entity";

describe('NoteEntity', () => {
    it('should be defined', () => {
        expect(NoteEntity).toBeDefined()
    })

    it('should have an id', () => {
        const note = new NoteEntity({ title: 'test', content: 'test' })
        expect(note.id).toBeDefined()
    })

    it('should have a title', () => {
        const note = new NoteEntity({ title: 'test', content: 'test' })
        expect(note.title).toBeDefined()
    })

    it('should have a content', () => {
        const note = new NoteEntity({ title: 'test', content: 'test' })
        expect(note.content).toBeDefined()
    })

    it('should have a uuid id', () => {
        const note = new NoteEntity({ title: 'test', content: 'test' })
        expect(note.id).toMatch(/^[a-f\d]{8}-([a-f\d]{4}-){3}[a-f\d]{12}$/i)
    })
})