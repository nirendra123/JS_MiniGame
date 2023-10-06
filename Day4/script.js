const canvas=document.getElementById("canvas");
const context=canvas.getContext("2d");
let totalParticle=Math.random()*(200-50)+50;



class particle{

  constructor(){
 this.i=0;
 this.x=Math.random()*(400-0)+0;
 this.y=Math.random()*(400-0)+0;
 this.r=Math.random()*(15-5)+5;
}
draw(){
context.beginPath();
context.fillStyle="#fff220";
//diff color
//context.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
context.arc(this.x,this.y,this.r,0,Math.PI*2);
context.fill();

}
move(){
this.x+=Math.random()*(1- -1)+ -1;
this.y+=Math.random()*(1- -1)+ -1;
//this.r+=Math.random()*(1- -1)+ -1;
if(this.r<0)this.r=0;

}
}

let particleArr=[];
for(let i=0;i<totalParticle;i++){
  const obj=new particle();
  particleArr.push(obj);
}

function animate(){
  context.clearRect(0,0,400,400);
  for(let i=0;i<totalParticle;i++){
  particleArr[i].draw();
  particleArr[i].move();
  }
  
  window.requestAnimationFrame(animate);
}
animate();