//your JS code here. If required.
document.getElementById("my-form").addEventListener("submit",function(event){
	event.preventDefault();
let age=document.getElementById("age").value;
let name=document.getElementById("name").value;
const myPromise=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		if(age>18){
		resolve(name);
		}else{
			reject(name);
		}
	},4000);
});
myPromise.then((name)=>{
	alert("Welcome, "+name+". You can vote.");
}).catch((name)=>{
	alert("Oh sorry "+name+". You aren't old enough.")
});
});