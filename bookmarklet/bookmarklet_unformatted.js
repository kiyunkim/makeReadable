javascript: (function() {
  var mRjs = document.getElementsByClassName('makeReadable_js');
  if(mRjs.length < 1) {

    function callback() {
      (function($) {
        var jQuery = $;

        function callback() {
          console.log('makeReadable')
        }
        var s = document.createElement("script");
        s.src = "https://kiyunkim.github.io/makeReadable/script.js";
        if(s.addEventListener) {
          s.addEventListener("load", callback, false)
        } else if(s.readyState) {
          s.onreadystatechange = callback
        }
        s.setAttribute('class', 'makeReadable_js');
        document.body.appendChild(s);
      })(jQuery.noConflict(true))
    }
    var s = document.createElement("script");
    s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
    if(s.addEventListener) {
      s.addEventListener("load", callback, false)
    } else if(s.readyState) {
      s.onreadystatechange = callback
    }
    s.setAttribute('class', 'makeReadable_js');
    document.body.appendChild(s);
  }
})()