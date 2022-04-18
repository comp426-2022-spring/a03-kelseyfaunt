function coinFlip() {
    return Math.random() < 0.5 ? 'heads':'tails';
  }

  function coinFlips(flips) {
    if(flips < 1) {
      flips = 1;
    }
    var array = [];
    for (var i=0; i<flips; i++) {
      array.push( Math.random() < 0.5 ? 'heads':'tails');
    }
  
    return array;
  
  }

  function countFlips(array) {

    var final = { tails: 0, heads: 0 };
    for(var i = 0; i<array.length; i++) {
      if(array[i] == "heads") {
        final.heads++;
      } else if(array[i] == "tails") {
        final.tails++;
      } 
    }
    if(final.heads == 0) {
      return "{ tails: "+final.tails+" }";
    } else if(final.tails == 0) {
      return  "{ heads: "+final.heads+" }";
    }
    return final;
  
  }

  function flipACoin(call) {
    if(call !== 'heads' && call !== 'tails') {
      console.log("Error: no input. Usage: node guess-flip --call=[heads|tails]");
      return;
    }
    var final = { call: '', flip: '', result: '' };
    final.call = call;
    final.flip = coinFlip();
    if(final.flip == final.call) {
      final.result = 'win';
    } else {
      final.result = 'lose';
    }
    
    return final;
  }
  
  
  /** Export 
   * 
   * Export all of your named functions
  */
  export{flipACoin, countFlips, coinFlips, coinFlip}