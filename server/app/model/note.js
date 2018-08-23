module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const Notesschema = new Schema({
        title: { type: String },
        content: { type: String },
        author: { type: Schema.Types.ObjectId, ref: 'User' },
        create_date: { type: String },
        update_date: { type: String },
    })

    return mongoose.model('Note', Notesschema, 'notes');
}
