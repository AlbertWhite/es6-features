//generator function allows to return multiple times, return for every next() function
function* text(a) {
  yield "a";
  yield "b";
  yield "c";
}

var t = text('a');
t.next();
t.next();
t.next();