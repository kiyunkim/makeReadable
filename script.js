var makeReadablejs = (function(options) {
  var self = this,
      proto = makeReadablejs.prototype,
      
      fontFamily;

  function changeFont() {

  }
  proto.setup = function() {
    $('body').addClass('test');
  };
  return {
    setup: self.setup
  };
});

var makeReadable = new makeReadablejs();
makeReadable.setup();