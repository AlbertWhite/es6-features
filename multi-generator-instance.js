

// function test(a){
// 	return new Promise(resolve => {
// 		setTimeout(() => {
//       resolve('resolved');
//       console.log(a);
//     }, 2000);
// 	})
// }

function test(a){
	  fetch(URL).then(function(res){
	    res.json().then(function(data){
    		console.log(data)
    })
  })
}

var test1 = test('test1')
var test2 = test('test2')
var test3 = test('test3')
