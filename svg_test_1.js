SVG.on(document, 'DOMContentLoaded', function() {
  var draw = SVG('drawing')
});

if (SVG.supported) {
  var draw = SVG('drawing').size(300,300);
  var rect = draw.rect(100, 100).attr({ fill: '#f06' });
} else {
  alert('SVG not supported')
};
