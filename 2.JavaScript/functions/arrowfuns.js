//developing arrow functions  
const myfun = ()=>{    
				document.write(`hi, i am arrow fun<br>`);
			}

//AF with params &  { } (explicit return)
const add = (x,y) => {  
								return x+y; 
						}

//AF with params & w/o  { } (implicit return)
const power = (x,y) => x**y;
					
//AF with 1param and explicit return
const natsum = n =>	{ return n*(n+1)/2;	}

//AF with 1param and implicit return
const area = r => Math.PI*r**2;