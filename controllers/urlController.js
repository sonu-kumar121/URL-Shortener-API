const Url = require('../models/urlModel');
const { generateAlias } = require('../utils/urlUtils');

exports.shortenUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const alias = generateAlias();
    const url = new Url({ originalUrl, shortenedUrl: alias, createdBy: req.user.id });
    await url.save();
    res.status(201).json({ shortenedUrl: alias });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAnalytics = async (req, res) => {
  try {
    const urls = await Url.find({ createdBy: req.user.id });
    res.status(200).json(urls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
