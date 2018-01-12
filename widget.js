var makeReadablejs = (function(options) {
  var self = this,
      proto = makeReadablejs.prototype,
      
      mR_wrapper = options.mR_wrapper,
      submitButton = options.submitButton,
      textInput = options.textInput,
      textVal;

  function init() {
  }

  function readVal() {
    $(textInput).each(function(i) {
      textVal = $(this).val();
      // console.log(i+': '+textInput);
      console.log(i+': '+textVal);
    });
   
  }

  function submit() {
    $('button').click(function() { // works only on buttons that have already been loaded
      console.log('submit button clicked');
      readVal();
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