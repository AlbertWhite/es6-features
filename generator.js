//generator function allows to return multiple times, return for every next() function
function* text(a) {
  yield a;
  yield "b";
  yield "c";
}

var t = text('xxx');
console.log(t.next());
console.log(t.next());
console.log(t.next());
