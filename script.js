"use strict";
(function(){
  // the minimum version of jQuery we want
  var v = "1.7.1";

  // check if jquery exists and version is at least to the min version we want
  if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
    var done = false,
        script = document.createElement("script");
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
    script.onload = script.onreadystatechange = function(){
      if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
        done = true;
        initMyBookmarklet();
      }
    };
    document.getElementsByTagName("body")[0].appendChild(script);
  } else {
    // if jquery w the correct version or above already exists .. 
    initMyBookmarklet();
  }

  function initMyBookmarklet() {
    // --------------------- makeReadable.js START --------------------- 
    var makeReadablejs = (function(options) {
      var self = this,
          proto = makeReadablejs.prototype,
          
          head = document.getElementsByTagName('head')[0],
          body = document.getElementsByTagName('body')[0],
          css_link = document.createElement('link'),
          html_path = options.html_path,
          css_path = options.css_path,
          mR_wrapper = options.mR_wrapper,
          submitButton = options.submitButton,
          textInput = options.textInput,
          textVal;
    
      function init() {
        css_link.href = css_path;
        css_link.rel = 'stylesheet';
        head.append(css_link); // insert stylesheet
        $.get(html_path, function (data) {
          $(body).prepend(data); // insert widget
        });


        $(mR_wrapper).on('click', 'button', function() {
          console.log('submit button clicked');
          submit();
        });
      }

      proto.setup = function() {
        init();
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
    // --------------------- makeReadable.js END --------------------- 
  }
})();


/* ---------------------- notes

1. store remember user's inputs into local or session storage

2. color picker
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color


  ---------------------- notes */