# Note-it
A React + Redux application to play around notes with tags.

## Folder Structure

```
Note-it/
  README.md
  node_modules/
  package.json
  webpack.config.js
  src/
    js/
      actions/
        notesAction.js //Redux actions goes in here
      components/
        Layout.js     // Main container
        ...           // Application specific components goes in here
      reducers/
        index.js      // export all reducers neede
        notesReducer.js
      Client.js       // Entry for webpack deb server
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
