const withTM = require("next-transpile-modules")(["three"]);
const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");

module.exports = withTM(withFonts(withOptimizedImages()));
