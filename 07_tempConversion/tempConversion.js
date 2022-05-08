const ftoc = function(fahrenheit) {
  celcius = (fahrenheit-32)/2;
  return celcius
};

const ctof = function(celcius) {
  fahrenheit = celcius*1.8+32;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
