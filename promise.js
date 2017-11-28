/*

$.getJson(url, params, (result)=>{//use result})
it results in a callback hell.

//then() in promise in fact is to call a callback functions
//callback function can be chained

functions who return a promise
fetch(url).then(result=>result.json())

$http.get() returns a promise in angular1.5, $http.get(url).then()

*/


var isMomHappy = true;

//create promise
var willGetNewPhone = new Promise((resolve, reject)=>{
	if(isMomHappy){
		resolve('phone');
	}else{
		reject(new Error('Mom is not happy'));
	}
});

//create a new promise
//Promise.resolve() is a short writing for new Promise((resolve, reject)=>{})
var showOff = (phone) =>{return Promise.resolve('I have a new phone')}

var askMom = () => {
	willGetNewPhone
		//use promise
		.then(showOff)//chain promise here. use .then() to use promise (return the value)
		.then((result)=>{console.log(result);}) //promise is async, .then() will be excuted later
		.catch((error)=>{console.log(error);})
}


askMom();