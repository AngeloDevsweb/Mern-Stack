const notesCtrl = {};

const Note = require('../models/Note')

notesCtrl.getNotes = async (req, res) =>{
    const notes = await Note.find();
    res.json(notes)
}

notesCtrl.createNotes = async (req, res) =>{
    const {title, content, date, author} = req.body;
    const newNote = new Note({
        title:title,
        content: content,
        date: date,
        author: author
    })
    await newNote.save();
    res.json({message:'nota guardada'})
}

notesCtrl.getNote = async(req, res) =>{
    const note = await Note.findById(req.params.id);
    res.json(note)
}

notesCtrl.deleteNote = async(req, res) =>{
    await Note.findByIdAndDelete(req.params.id)
    res.json('nota a sido eliminada')
}

notesCtrl.updateNote = async(req, res) =>{
    const {title, content, author} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        title,
        content,
        author
    })
    res.json('nota ha sido actualizada')
}

module.exports = notesCtrl;