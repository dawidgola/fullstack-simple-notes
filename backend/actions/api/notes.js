const Note = require('../../db/models/note')

class NoteActions  {
    async getAllNotes(req,res) {

        try {
            const doc = await Note.find({})
            res.status(200).json(doc)
        } catch (error) {
            res.status(500).json({error:error.message})
        }

    }

    async getNote(req,res) {
            try {
                const id = req.params.id;
                const note = await Note.findOne({_id:id})
                res.status(200).json(note)
            } catch (error) {
                res.status(500).json({error:error.message})
            }
    }

   async saveNote(req,res) {

        const title = req.body.title;
        const body = req.body.body

        const newNote = new Note({
            title,
            body
        })
        await newNote.save()



        res.send(200).json(newNote)
    }

   async updateNote(req,res) {
        const id = req.params.id;
        const title = req.body.title;
        const body = req.body.body;
        const findNote = Note.findOne({_id:id})
        findNote.title = title
        findNote.body = body;

        await findNote.save()

        res.status(201).send(findNote)
    }

   async deleteNote(req,res) {
        const id = req.params.id;
        await Note.deleteOne({_id:id});
        res.send({success:true}).status(204)
    }
}

module.exports = new NoteActions()