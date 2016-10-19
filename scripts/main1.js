require('bootstrapcss');
require('../styles/app.css');
var img1 = $('<img>');
img1.attr('src',require("../images/apply_ico.png") );
$('body').append(img1);

console.log($('body').length)