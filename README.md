# ✨ starter-p5 ✨

Boilerplate project for creative coding sketches with [p5.js](https://p5js.org/). In addition to being a development environment for `p5`, this project also includes a Node.js server that can listen for OSC messages over UDP on a given port.

### Available scripts

To run only the client's dev server (preferred if you don't need OSC):

```
$ npm run dev:client
```

To run both client and server in dev mode:

```
$ npm run dev
```

To compile the frontend as static files:

```
$ npm run build
```

And finally, run the server in production mode, which serves static files as well:

```
$ npm run start
```

### Environment variables
You can customize the ports used by various parts of the project using a handful of environment variables. Take a look at `.env.sample` for a list of the available configuration options.

### Questions?
This repo is mostly for my personal use, but if you use it and have any questions, please open an issue in this repository!

You can also contact me at [mehdi.vasigh@gmail.com](mailto:mehdi.vasigh@gmail.com).
