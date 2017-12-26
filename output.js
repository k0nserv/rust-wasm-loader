// Borrowed from https://github.com/ballercat/wasm-loader/blob/master/output.js
// Licensed under MIT https://github.com/ballercat/wasm-loader/blob/master/LICENSE
// Original author Arthur Buldauskas
// This file will not run on it's own

const {
  Module,
  instantiate,
  Memory,
  Table
} = WebAssembly;

const WebAssemblyModule = function(deps = {
  'global': {},
  'env': {
    'memory': new Memory({initial: 10, limit: 100}),
    'table': new Table({initial: 0, element: 'anyfunc'})
  }
}) {
  return instantiate(buffer, deps);
}

module.exports = WebAssemblyModule;
