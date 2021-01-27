import mongoose, { Schema } from 'mongoose';

const SongSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artists: [{
        type: Schema.Types.ObjectId,
        ref: 'Artist'
    }]
});

export default mongoose.model('Song', SongSchema);