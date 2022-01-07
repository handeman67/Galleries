let num = 0;
let imgarray=[]//?

function randPics(a,b,w,h) {
 let e=this
 for(let i=0;i <= a;i++){
  e.img = Gen("img",`img${num}`);
  e.img.setAttribute("src",`https://picsum.photos/${b}/picsum/${Width}/${Height}?random=${i}`)
  imgarray.push(e.img)
  num++}
  return  e.img 
};



function floor(e) {
Math.floor(e);
};
class Gen {
  constructor(d, f) {
    if (!d) {
      d="span";
    }
    this.d = document.createElement(`${d}`);
    this.d.id = f;
return this.d
  }
}
const rand = (a)=>{floor(Math.random() * a);}

