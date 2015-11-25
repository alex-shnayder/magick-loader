# magick-loader

A [webpack](http://webpack.github.io/) loader for processing images with GraphicsMagick.

## Installation

1. Install [GraphicsMagick](http://www.graphicsmagick.org/)
2. `npm install --save-dev magick-loader`
3. If the loader doesn't work, try installing [ImageMagick](http://www.imagemagick.org/)

## Usage

```javascript
require('file!img!magick?-resize 1920x1080!./image.jpg');
```

The query string (`-resize 1920x1080` in the example) will be passed to GraphicsMagick as command line parameters ([gm](https://github.com/aheckmann/gm)'s `.out()` method is used for this).
