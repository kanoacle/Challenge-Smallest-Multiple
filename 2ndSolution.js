module.exports = function( ceiling ) {
  function gcd(min, max) {
    var div = 0;
    while (min % 2 === 0 && max % 2 === 0) {
      div++;
      min /= 2;
      max /= 2;
    }
    while (min !== max) {
      if (min % 2 === 0) {
        min /= 2;
      } else if (max % 2 === 0) {
        max /= 2;
      } else if (min > max) {
        min = (min - max) / 2;
      } else {
        max = (max - min) / 2;
      }
    }
    return min * Math.pow(2, div);
  }

  function lcm(min, max) {
    var gNum = gcd(min, max);
    return min * max / gNum;
  }

  var lNum = 1;

  for (var i = 2; i < ceiling; i++) {
    lNum = lcm(lNum, i);
  }
};