javascript: (function() {
  var mRjs = document.getElementsByClassName('makeReadable_js');
  if(mRjs.length < 1) {
    var s = document.createElement("script");
    s.src = "https://kiyunkim.github.io/makeReadable/js/script.js";
    s.setAttribute('class', 'makeReadable_js');
    document.body.appendChild(s);
  }
})()