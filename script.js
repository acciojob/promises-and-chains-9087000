//your JS code here. If required.
const age = document.getElementById('age');
const name = document.getElementById('name');
const form = document.getElementById('myForm')

form.addEventListener('submit', (e)=>{
	e.preventDefault();
	function onRes(){
		let val = name.value;
		alert(`Welcome, ${val}. You can vote.`);
	}
	
	function onRej() {
		let val = name.value;
		alert(`Oh sorry ${val}. You aren't old enough.`);
	}
	
	let vote = parseInt(age.value);
	
	let promise = new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(vote>18){
				resolve("vote allowed");
			}
			else{
				reject("vote not allowed");
			}
		},4000)
	})
	
	promise.then(onRes).catch(onRej);
})