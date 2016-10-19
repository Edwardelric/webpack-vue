require('../styles/app.css');

var img2 = $('<img>');
img2.attr('src',require("../images/error409.png") );
$('body').append(img2);

console.log($('body').length)