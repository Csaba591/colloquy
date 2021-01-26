import express from 'express';
import { mongo } from 'mongoose';
import Artist from '../models/Artist';
import Playlist from '../models/Playlist';

export const router = express.Router();

router.get('/', (req, res) => {
    res.send('Cool');
});

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

router.get('/playlist', (req, res) => {
    Playlist.find({}, (err, playlist) => {
        if (err) return res.json({ error: err });
        res.json(playlist);
    });
});

router.post('/playlist', (req, res) => {
    const playlist = new Playlist({
        name: req.body.name
    });

    playlist.save(err => {
        if (err) return res.json({ error: err });
        res.json(playlist);
    });
});