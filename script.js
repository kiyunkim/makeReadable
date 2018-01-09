(function(){
  // from: https://www.smashingmagazine.com/2010/05/make-your-own-bookmarklets-with-jquery/#comments-make-your-own-bookmarklets-with-jquery
  // the minimum version of jQuery we want
  var v = "1.7.1";

  // check prior inclusion and version
  if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
    var done = false;
    var script = document.createElement("script");
    script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
    script.onload = script.onreadystatechange = function(){
      if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
        done = true;
        initMyBookmarklet();
      }
    };
    document.getElementsByTagName("body")[0].appendChild(script);
  } else {
    initMyBookmarklet();
  }

  function initMyBookmarklet() {
    (window.myBookmarklet = function() {
      // my code START
      var makeReadablejs = (function(options) {
        var self = this,
            proto = makeReadablejs.prototype,
            
            head = document.getElementsByTagName('head')[0],
            body = document.getElementsByTagName('body')[0],
            css_link = document.createElement('link'),
            html_path = options.html_path,
            css_path = options.css_path,
            fontFamily;
      
        
      
        function init() {
          css_link.href = css_path;
          css_link.rel = 'stylesheet';
          head.append(css_link);
          
          
          $.get(html_path, function (data) {
            $(body).append(data);
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
        css_path: 'https://kiyunkim.github.io/makeReadable/style.css'
      });
      makeReadable.setup();
      // my code END
    })();
  }

})();













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