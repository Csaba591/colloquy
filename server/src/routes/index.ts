import express from 'express';
import Artist from '../models/Artist';
import Playlist from '../models/Playlist';
import Song from '../models/Song';

export const router = express.Router();

router.get('/', (req, res) => {
    res.send('Cool');
});

// Artist routes
router.get('/artist', (req, res) => {
    Artist.find({}, (err, artists) => {
        if (err) return res.json({ error: err });
        res.json(artists);
    });
});

router.post('/artist', (req, res) => {
    const artist = new Artist({
        name: req.body.name
    });

    artist.save(err => {
        if (err) return res.json({ error: err });
        res.json(artist);
    });
});

router.delete('/artist/:id', (req, res) => {
    Artist.deleteOne({ _id: req.params.id }, {}, err => {
        if (err) return res.json({ error: err });
        res.json({ deleted: req.params.id });
    });
});

// Playlist routes
router.get('/playlist', (req, res) => {
    Playlist.find({}, (err, playlist) => {
        if (err) return res.json({ error: err });
        res.json(playlist);
    });
});

router.post('/playlist', (req, res) => {
    const playlist = new Playlist({
        name: req.body.name,
        songs: req.body.songs
    });

    playlist.save(err => {
        if (err) return res.json({ error: err });
        res.json(playlist);
    });
});

router.delete('/playlist/:id', (req, res) => {
    Playlist.deleteOne({ _id: req.params.id }, {}, err => {
        if (err) return res.json({ error: err });
        res.json({ deleted: req.params.id });
    });
});

// Song routes
router.get('/song', (req, res) => {
    Song.find({}, (err, songs) => {
        if (err) return res.json({ error: err });
        res.json(songs);
    });
});

router.post('/song', (req, res) => {
    const song = new Song({
        title: req.body.title,
        artists: req.body.artists
    });

    song.save(err => {
        if (err) return res.json({ error: err });
        res.json(song);
    });
});

router.delete('/song/:id', (req, res) => {
    Song.deleteOne({ _id: req.params.id }, {}, err => {
        if (err) return res.json({ error: err });
        res.json({ deleted: req.params.id });
    });
});
