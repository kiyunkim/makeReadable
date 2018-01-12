var makeReadablejs = (function(options) {
  var self = this,
      proto = makeReadablejs.prototype,
      
      mR_wrapper = options.mR_wrapper,
      submitButton = options.submitButton,
      textInput = options.textInput,
      dataProperty,
      textVal;

  function init() {
  }

  function readVal() {
    $(textInput).each(function(i) {
      textVal = $(this).val();
      dataProperty = $(this).attr('data-property');
      if (textVal != "") {
        console.log(i+': '+dataProperty+'   '+textVal);
      }
    });
   
  }

  function assignCSS(selector, value) {
    $(selector).css()
  }

  function submit() {
    $(submitButton).click(function() { 
      readVal(); // read updated values if they aren't empty
      // pair property w index
      // pair property and values
      // apply css
    });
  }

  proto.setup = function() {
    init();
    submit();
  };
  return {
    setup: self.setup
  };
});

var makeReadable = new makeReadablejs({
  mR_wrapper: '#makeReadable_html',
  submitButton: 'button',
  textInput: 'input[value]'
});
makeReadable.setup();


/* ---------------------- notes

1. store remember user's inputs into local or session storage

2. color picker
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color

---------------------- notes */