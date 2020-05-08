// (function () {
//   var root = this;

//   var generateName = (function () {
//     var postfix = 0;
//     return function (descString) {
//       postfix++;
//       return '@@' + descString + '_' + postfix
//     }
//   })()

//   var SymbolPolyfill = function Symbol(description) {

//     if (this instanceof SymbolPolyfill) throw new TypeError('Symbol is not a constructor');

//     var descString = description === undefined ? undefined : String(description)

//     var symbol = Object.create({
//       toString: function () {
//         return this.__Name__;
//       },
//       valueOf: function () {
//         return this;
//       }
//     })

//     Object.defineProperties(symbol, {
//       '__Description__': {
//         value: descString,
//         writable: false,
//         enumerable: false,
//         configurable: false
//       },
//       '__Name__': {
//         value: generateName(descString),
//         writable: false,
//         enumerable: false,
//         configurable: false
//       }
//     });

//     return symbol;
//   }

//   var forMap = {};

//   Object.defineProperties(SymbolPolyfill, {
//     'for': {
//       value: function (description) {
//         var descString = description === undefined ? undefined : String(description)
//         return forMap[descString] ? forMap[descString] : forMap[descString] = SymbolPolyfill(descString);
//       },
//       writable: true,
//       enumerable: false,
//       configurable: true
//     },
//     'keyFor': {
//       value: function (symbol) {
//         for (var key in forMap) {
//           if (forMap[key] === symbol) return key;
//         }
//       },
//       writable: true,
//       enumerable: false,
//       configurable: true
//     }
//   });

//   root.SymbolPolyfill = SymbolPolyfill;

// })()


(function(){
  var root = this
  function SymbolPolyfill (description){
    if(this instanceof SymbolPolyfill){
      throw new Error('cannt new')
    }
    var __des__ = description === undefined ? undefined : String(description)
    var symbol = Object.create(null)
    Object.defineProperties(symbol, {
      '__des__': {
        value: __des__,
        writable: false,
        configurable: false,
        enumerable: false,
      }
    })
    return symbol
  }

  root.SymbolPolyfill = SymbolPolyfill
})()

var a = new SymbolPolyfill('aaa')
console.log('a',a)