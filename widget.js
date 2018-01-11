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
    console.log('submit running');

    $('.mR_container').on('click','button',function(){ // will work on buttons that are added dynamically even after this function
      console.log('hi')
    });
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
  html_path: 'https://kiyunkim.github.io/makeReadable/init.html',
  css_path: 'https://kiyunkim.github.io/makeReadable/style.css',
    // file:///Users/kimk/Documents/GitHub/kiyunkim.github.io/makeReadable/style.css
  mR_wrapper: '#makeReadable_html',
  submitButton: 'button',
  textInput: 'input[type=text]'
});
makeReadable.setup();


/* ---------------------- notes

1. store remember user's inputs into local or session storage

2. color picker
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color


  ---------------------- notes */