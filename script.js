let va=[];
let ca=[];
let ctix=document.querySelector(".ct");
let rti=document.querySelector(".it");
function add() {
	let v=document.getElementById('inp');
	if(v.value=="")
	{
		return alert("empty value didn't accept");
	}
	let vv=v.value;
	va.push(vv);
	v.value="";
	rit();
	// console.log(va);
}
function rit() {
	rti.innerHTML=""
	va.forEach((av,index)=>{rti.innerHTML+=`
		<input type="checkbox" id="ip${index}" class="a${index}" onchange="I2C(event)">
		<label for="ip${index}" class="a${index}">${av}</label>
		<br>
		`;})
	ctix.innerHTML=" ";
	ca.forEach((av,index)=>{ctix.innerHTML+=`
		<input type="checkbox" id="ip${index}" class="a${index}" onchange="C2I(event)" checked>
		<label for="ip${index}" class="a${index}">${av}</label>
		<br>
		`;})
}// this func used to dom rerendering
function I2C(e)
{
	// console.log(va);
	let iv=e.target.labels[0].innerHTML;
	let ix=va.indexOf(iv);
	va.splice(ix,1);
	ca.push(iv);
	rit();
	// console.log(va);
}
function C2I(e)
{
	console.log(e);
	let iv=e.target.labels[0].innerHTML;
	let ix=ca.indexOf(iv);
	ca.splice(ix,1);
	va.push(iv);
	rit();
	// console.log(va);
}