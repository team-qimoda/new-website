const withTM = require("next-transpile-modules")(["three"]);
const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
const withVideos = require("next-videos");

module.exports = withVideos(withTM(withFonts(withOptimizedImages())));
