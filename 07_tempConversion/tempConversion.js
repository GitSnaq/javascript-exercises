const ftoc = function(fahrenheit) {
  celcius = Math.round((((fahrenheit-32)*5)/9)*10)/10
  return celcius
};


const ctof = function(celcius) {
  fahrenheit = Math.round((celcius*1.8+32)*10)/10
  return fahrenheit
};
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
