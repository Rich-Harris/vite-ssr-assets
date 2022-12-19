# vite-ssr-assets

Bug reproduction.

```
git clone git@github.com:Rich-Harris/vite-ssr-assets
cd vite-ssr-assets
npm install
npm run build
```

## Expected

The `dist` folder should contain two subfolders, `server` and `client`. Both should contain an `assets` folder with an image with a hashed asset URL.

## Actual

The image is only emitted for the `client` build.
