for (var i = 0; i < 20; i++) {
  var newTab = window.open('https://olivera36-y.github.io/hom3/main', '_blank');
  newTab.blur(); // remove focus from the new tab
  window.focus(); // keep the current window focused
  setTimeout(function() {}, 1000); // wait for 1 second before opening the next tab
}


