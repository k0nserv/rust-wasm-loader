# Rust WebAssembly loader

### Usage

This is a simple Webpack loader that shells out to cargo to build a Rust project targeting WebAssembly. It is based on the work done by
[mrdziuban](https://github.com/mrdziuban) in [rust-emscripten-loader](https://github.com/mrdziuban/rust-emscripten-loader) and [ianjskies](https://github.com/ianjsikes) in [rust-wasm-loader](https://github.com/ianjsikes/rust-wasm-loader) with inspiration from [wasm-loader](https://github.com/ballercat/wasm-loader) by [ballercat](https://github.com/ballercat). Both rust-emcscripten-loader and rust-wasm-loader uses Emscripten and `emsdk` to produce asm.js. This project uses the nightly rust support the web assembly targets(`wasm32-unknown-unknown`) to compile Web Assembly directly.


This package is currently not published as an npm package, but you can still install it directly with.
```bash
$ npm install git+https://git@github.com:k0nserv/rust-wasm-loader.git
```

Configure the loader in your Webpack config:

```js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.rs$/,
        use: {
          loader: 'rust-wasm-loader',
          options: {
            // Path to your 'build' or 'dist' directory relative to project root
            path: 'build/',
          }
        }
      },
      // ...
    ]
  }
}
```


### Configuration

The following options can be added to the Webpack loader query:

| Name | Description | Required | Default |
| ---- | ----------- | -------- | ------- |
| `release` | Whether or not to pass the `--release` flag to cargo | false | false |
| `path` | Path to your webpack output folder relative to project root | true | '' |

### Example

Check out the [example](example) directory for a simple Hello World example.
