var a=document.querySelector("#a");
var b=document.querySelectorAll("td");
a.addEventListener('click',function(){
  for(c of b){
    c.textContent="";
  }
})
function clicke(){
  if(this.textContent==""){
    this.textContent="x"
  }
  else if(this.textContent=="x"){
    this.textContent="o"
  }
  else{
    this.textContent=""
  }

}
for(i=0;i<b.length;i++){
  b[i].addEventListener('click',clicke)
}
