module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const Blogsschema = new Schema({
        content: { type: String },
        author: { type: String },
        create_time: { type: String },
        update_tiem: { type: String },
    })

    return mongoose.model('Blog', Blogsschema, 'blogs');
}
