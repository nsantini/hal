# hal

A TODO app with [React](https://facebook.github.io/react/), [Flux](https://facebook.github.io/flux/), and [HAL](http://tools.ietf.org/html/draft-kelly-json-hal)

## Running

You must have npm installed on your computer.
From the root project directory run these commands from the command line:

    npm install

This will install all dependencies.

To build and run the project, this command:

    gulp

## Dependencies

The implementation uses:
- [HALSON](https://github.com/seznam/halson) to deal with HAL
- [Express](https://www.npmjs.com/package/express) to implement a Web Server and REST API
- [Underscore](http://underscorejs.org/) to aid with functional programming

## To be improved

The REST API responds to all Post requests with the full list of updated TODOs.
This was done for simplicity but it wont be a well performing implementation for a real application.
