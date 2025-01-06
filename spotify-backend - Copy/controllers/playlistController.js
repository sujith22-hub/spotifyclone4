const Playlist = require('../models/playlist');
const Song = require('../models/song');

exports.createPlaylist = async (req, res) => {
  try {
    const { name, description, songs } = req.body;
    const playlist = new Playlist({ name, description, owner: req.user.id, songs });
    await playlist.save();
    res.status(201).json(playlist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find({ owner: req.user.id }).populate('songs');
    res.status(200).json(playlists);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
