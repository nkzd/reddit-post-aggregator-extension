# Reddit post aggregator extension

Reddit post aggregator is simple chrome extension which parses the webpage content and displays relevant reddit posts.
It's used with [Reddit Post Aggregator server](https://github.com/nkzd/reddit-post-aggregator-server).

![Screenshot](https://i.imgur.com/HYGNrz4.png)

## Live Demo

Step 1: Download the extension here:

```
https://github.com/nkzd/reddit-post-aggregator-extension/releases/download/v1.0/Reddit.Post.Aggregator.Extension.zip
```
Step 2: Extract the zip.

Step 3: Enable developer mode inside chrome extensions, click "load unpacked" and browse to build folder.

## Building

Step 1: Clone the repository

```
git clone https://github.com/nkzd/reddit-post-aggregator-extension.git
```

Step 2: Edit the configuration in .env file.

Step 3: Build the react app.

```
npm install
npm run build
```

## Built With

- [Create React App](https://github.com/facebook/create-react-app) - Tooling
- [React content loader](https://github.com/danilowoz/react-content-loader) - Content loeader

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
