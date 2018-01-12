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
    var makeReadableBookmarklet = (function(options) {
      var self = this,
          proto = makeReadableBookmarklet.prototype,
          
          head = document.getElementsByTagName('head')[0],
          body = document.getElementsByTagName('body')[0],
          css_link = document.createElement('link'),
          js_script = document.createElement('script'),
          html_path = options.html_path,
          css_path = options.css_path,
          js_path = options.js_path;
      
      function loadCSS() {
        css_link.href = css_path;
        css_link.rel = 'stylesheet';
        head.append(css_link); // insert stylesheet
      }
      function loadHTML() {
        $.get(html_path, function (data) {
          $(body).prepend(data); // insert widget html
        });
      }
      function loadJS() {
        js_script.src = js_path;
        body.append(js_script); // insert js 
      }
      function init() {
        loadCSS();
        loadHTML();
        loadJS();
      }
      proto.setup = function() {
        init();
      };
      return {
        setup: self.setup
      };
    });
    
    var appendMakeReadable = new makeReadableBookmarklet({
      // file:///Users/kimk/Documents/GitHub/kiyunkim.github.io/ ...
      html_path: 'https://kiyunkim.github.io/makeReadable/init.html',
      css_path: 'https://kiyunkim.github.io/makeReadable/style.css',
      js_path: 'file:///Users/kimk/Documents/GitHub/kiyunkim.github.io/makeReadable/widget.js'
    });
    appendMakeReadable.setup();
    // --------------------- makeReadable.js END --------------------- 
  }

})();
