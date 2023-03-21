### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Production Version

```
npm run build
```

### Preview Build Production Version

```
npm run serve
```

### Deployment on GitHub Pages (Optional)

```
npm run deploy
```

This adds gh-pages branch to your project github repository, deploys built project there, hosts the site via GitHub Pages.

### Features:

- `Legacy Browsers` support via **@vite/plugin-legacy** with built-in **babel**
- `SCSS` support via **sass**
- `Linting` support via **eslint**
- `Formatter` support via **prettier**
- `Autoprefix` support via **postcss**
- `Image Optimization` support via **vite-plugin-image-optimizer**

### When you run `npm run build`:

- All image files (svg, png, jpg/jpeg, tiff, gif, webp, avif) gets compressed with lossless quality
  <br />via [vite-plugin-image-optimizer](https://github.com/FatehAK/vite-plugin-image-optimizer).

Place all external connected js files (e.g. jQuery and others) in `./public/tools` and provide them path in each \*.html page file (like this: `<script src="tools/jquery-3.6.3.min.js"></script>`).

Place all external connected css files (e.g. normalize.min.css and others) in `./src/assets/tools` and provide them path in index.scss file (like this: `@import url('../assets/tools/normalize.min.css');`).

Write the `PROJECT NAME` and each `PAGE TITLE` in the `<head>` section of html files. They will be used in Google Analytics code below.
