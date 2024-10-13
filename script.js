//your JS code here. If required.

const form1 = document.getElementById("form1");

form1.addEventListener('submit', fetchData);

function fetchData(e){
	e.preventDefault();
	const name = document.getElementById("name").value;
	const age = document.getElementById("age").value;

	const prom = new Promise((resolve,reject)=>{
		      if(age >=18){
				  setTimeout(()=>{
					resolve();  
				  },4000);
			  }
		else{
			setTimeout(()=>{
					reject(); 
				  },4000);
		   }
	     });
	prom.then(()=>{
		alert(`Welcome, ${name}. You can vote.`);
	})
	.catch((error)=>{
		alert(`Oh sorry ${name}. You aren't old enough.`);
	});
}
