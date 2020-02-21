const music = require('../models/music_model');

exports.music_create = function (req, res) {
    let music = new music(
        {
            song: req.body.name,
            author: req.body.name,
            time: req.body.price
        }
    );

    music.save(function (err) {
        if (err) {
        //    return next(err);
        }
        res.send('Music Created successfully')
    })
};

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};