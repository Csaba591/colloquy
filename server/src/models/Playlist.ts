import mongoose, { Schema } from 'mongoose';

const PlaylistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Playlist', PlaylistSchema);