let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let multiStyle = function(){
  let args = arguments;
  let style = arguments[0];
  let out = {};

  for (var p in args) {
      if (args.hasOwnProperty(p)) {
        if(args[p] !== style){
          out = Object.assign(out, style[args[p]]);
        }
      }
  }

  return out;
}

export {isNumber, multiStyle};
