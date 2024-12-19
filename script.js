for (var i = 0; i < 20; i++) {
  var newTab = window.open('https://oliver36-y.github.io/hom3/main/index.HTML', '_blank');
  newTab.blur(); // remove focus from the new tab
  window.focus(); // keep the current window focused
  setTimeout(function() {}, 1000); // wait for 1 second before opening the next tab
}


