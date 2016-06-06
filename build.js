var fs = require('fs');

var jsmin = require('jsmin').jsmin;
var cssmin = require('cssmin');

var css = fs.readFileSync("src/slide.css", encoding='utf8');
var js = fs.readFileSync("src/slide.js", encoding='utf8');
var html = fs.readFileSync("src/slide.html", encoding='utf8');

var inline = html
  .replace(/<script src="slide.js"><\/script>/, '<script>'+jsmin(js)+'</script>')
  .replace(/<link .*href="slide.css">/, '<style>'+cssmin(css)+'</style>');

console.log(inline);
