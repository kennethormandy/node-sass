var sass = require('./sass');

var scssStr = '$pink: #D1586C; #navbar { background: $pink; }\n';
var expectedRender = '#navbar {\n  background: #d1586c; }\n';

sass.render(scssStr, function(err, css){
  if(css === expectedRender) {
    console.log('pass')
  }
});

