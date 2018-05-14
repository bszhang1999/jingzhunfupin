let textarea=document.querySelector("#question_desc");
textarea.onkeydown=count;
textarea.onkeyup=count;
function count(){
		let val=this.value;
		let l=val.length;
		if(l>200){
			l=200;
			this.value=val.slice(0,200);
		}
		now.innerHTML=l;
}
count();