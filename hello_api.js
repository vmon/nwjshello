// hello.js
const addon = require('./build/Release/addon');

function say_hello_api (){
    return addon.native_hello();
}
