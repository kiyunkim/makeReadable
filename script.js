var makeReadablejs = (function(options) {
  var self = this,
      proto = makeReadablejs.prototype,
      
      head = document.getElementsByTagName('head')[0],
      csslink = document.createElement('link'),
      fontFamily,
      styleSheet = options.styleSheet;

  

  function init() {

    csslink.href = "https://kiyunkim.github.io/makeReadable/style.css";
    csslink.rel = "stylesheet";
    head.appendChild(csslink);

  }
  proto.setup = function() {
    init();
  };
  return {
    setup: self.setup
  };
});

var makeReadable = new makeReadablejs({
  styleSheet: '<link href="https://kiyunkim.github.io/makeReadable/style.css" rel="stylesheet"/>'
});
makeReadable.setup();

// store cookie to remember user's inputs

/* for later - color picker
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color

input is fired on the <input> element every time the color changes. The change event is fired when the user dismisses the color picker. 
check with "value"

colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
}

*/