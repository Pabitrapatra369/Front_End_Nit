//defining a function to find the interest amount

function calcAmount(){
	let p,r,t,ia,ta;
	//data collection
	p=pamt.value;
	r=roi.value;
	t=time.value;
	//calc
	ia=p*r*t/100;
	ta=+p + ia;
	
	//displaing outputs
	intAmt.innerHTML="Intrest amount  &#8377; &nbsp;"+ia;
	totAmt.innerHTML="Total amount &#8377; &nbsp;"+ta;
}