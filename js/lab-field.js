function setDisplay(obj,bool) {
  var el = document.getElementById(obj);
  if( bool == 1 ) {
    el.style.display = '';
  } else {
    el.style.display = 'none';
  }
}
function switchDisplay(obj) {
  var el = document.getElementById(obj);
  if ( el.style.display != "none" ) {
    setDisplay( obj, 0 );
    return( 0 );
  } else {
    setDisplay( obj, 1 );
    return( 1 );
  }
}
function toggleAll() {
  var bool = switchDisplay('q1-1');
  setDisplay('q1-2', bool);
  setDisplay('q1-3', bool);
  setDisplay('q1-4', bool);
  setDisplay('q2-1', bool);
  setDisplay('q2-2', bool);
  setDisplay('q2-3', bool);
  setDisplay('q3-1', bool);
  setDisplay('q3-2', bool);
  setDisplay('q3-3', bool);
  setDisplay('q4-1', bool);
  setDisplay('q4-2', bool);
  setDisplay('q4-3', bool);
}

window.onload = function () {
    toggleAll();
};