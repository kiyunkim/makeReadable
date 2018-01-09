var makeReadablejs = (function(options) {
  var self = this,
      proto = makeReadablejs.prototype,
      
      fontFamily;

  function init() {
    

  }
  proto.setup = function() {
    
  };
  return {
    setup: self.setup
  };
});

var makeReadable = new makeReadablejs();
makeReadable.setup();

// store cookie to remember user's inputs

/* for later - color picker
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