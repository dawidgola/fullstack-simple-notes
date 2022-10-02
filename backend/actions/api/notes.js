const Note = require('../../db/models/note')

module.exports =  {
    saveNote(req,res) {
        const newNote = new Note({
            title:'teeeeeeeest',
            body:'texxxtest'
        })

        newNote.save().then(() => {
            console.log('Notatka została stworzona')
        })

        res.send('Strona glowna dziala')
    }
}
