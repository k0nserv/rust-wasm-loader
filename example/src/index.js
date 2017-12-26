const loadWasm = require('./lib.rs')

loadWasm().then(({ module, instance}) => {
  console.dir(instance);
  console.log(instance.exports.doub(21));
});
