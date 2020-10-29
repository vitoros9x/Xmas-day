var arrTab = document.querySelectorAll('.shopping__category li');

function appr(a) {
  var i;
  for (i = 0; i < arrTab.length; i++) {
    if (a == i) {
      arrTab[a].classList.add('active');
    } else {
      arrTab[a].classList.remove('active');
    }
  }
}