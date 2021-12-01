//collecting enviroment objects
const env = document.documentElement;
const sceneinner = document.querySelector(".sceneinner");
const scene = document.querySelector(".scene");
const app = document.querySelector(".app");
const cube = document.querySelectorAll(".cuboid");

class box {
  constructor(e) {
    e = this;
    e.HTM = `<div class="cuboid" data-bool=${false}>
    <div class="faceWrap"><div class="face">
    <div class="shader"></div></div></div></div>`;
    e.container = document.createElement("template");
    e.container.classList.add("template");
    e.container.id = "template";
    e.container.innerHTML = this.HTM;

    return e;
  }
}
let temp = new box().container;
env.append(temp);
const content = document.querySelector("template").content;

// setting variable
let tick = 10,
  setBox = new Array(tick),
  active = false,
  down = false,
  up = false,
  move = false,
  out = false,
  sceneZ = 250,
  X = 0,
  Y = 0,
  Map = [],
  fromtop = 50;

const COUNT = [];
const diff = [];
const angle = todeg(Math.PI * 2);

/////////small helper lib
function rand(a) {
  return Math.floor(Math.random() * a);
}
function todeg(el) {
  return (el * 180) / Math.PI;
}
function mover(e) {
  let map1 = !Map[0] ? 0 : Map[0];
  let map2 = !Map[1] ? 0 : Map[1];
  mapcln();
  return map1 <= map2 ? (e = 1) : (e = -1);
}
// function touched(event) {
//   event.preventDefault();
//   handleevent1(event);
//   if ("touchstart") {
//    Map.push(event.touches[0].clientX);
//   }
//   if ("touchend") {
//     console.log("endded", event);
//     Map.push(event.touches[0].clientX);

//   }
//   if ("touchmove") {
//     console.log("touchmove", event.touches[0].clientX);
//     moveevent(event);
//     mapcln();
//   }
//   if ("touchcancel") {
//    console.log("touchcancel");
//   }
//   event.target.touches = (event) => {
//     event.target.touchend = () => {
//       console.log("touch ended");
//     };
//     return event;
//   };
//   event.target.ontouchmove = (event) => {
//     event.preventDefault();
//     for (let i = 0; i < TouchList.length; i++) {
//       console.log("testing", event.touches[0].clientX);
//     }
//     console.log(TouchList);
//   };
// }

function mapcln() {
  if (Map.length >= 3) {
    Map.splice(0, 1);
  }
}
/////////small lib end..
//events
const handleevent1 = (event) => {
  env.addEventListener("touchmove", tmoveevent, false);
  env.addEventListener("mousemove", mmoveevent, false);
  env.addEventListener("mouseup", upevent, false);
  env.addEventListener("touchend", upevent, false);
  env.style.setProperty("--sceneZ", `${sceneZ}px`);
  env.style.setProperty("--activeY", `${500}px`);
};
const mouse = (event) => {
  env.addEventListener("mousedown", handleevent1);
  env.addEventListener("touchstart", handleevent1);
};

//triggers
const tmoveevent = (event) => {
  X = event.touches[0].clientX;
  moveevent();
};
const mmoveevent = (event) => {
  X = event.clientX;
  moveevent();
};

const moveevent = (event) => {
  Map.push(X);
  move = true;
  mouse();
  let m = mover();
  m === -1 ? tick++ : tick--;
  if (tick > 1000 || tick < -1000) {
    tick = 0;
  }
  if (move) {
    Moving();
  }
  setTimeout(() => {
    return env.removeEventListener("mousedown", mmoveevent);
  }, 1000);
  return move;
};
function Moving() {
  let start = Map[0] || 0;
  let ending = Map[1] || 0;
  diff.push(tick * 10);
  diff.forEach((item) => {
    env.style.setProperty("--Y", `${item}deg`);
    diff.splice(0, 1);
  });
  move = false;
}
const upevent = (event) => {
  // update(event);
  Remove();
  this.up = true;
  this.down = false;
  this.move = false;
  return this;
};

class Bxtooling {
  constructor(ct, elm, space) {
    this.ct = setBox.length || ct;

    this.count = COUNT.length;
    this.active = false;
    this.an = Math.floor(angle / setBox.length);
  }
  gen() {
    this.elm = content.cloneNode(true) || elm;
    this.sect = document.createElement("section");
    this.sect.id = `box${this.count}`;
    this.sect.classList.add("sceneinner", "box");
    this.sect.appendChild(this.elm);
    this.sect.setAttribute(
      "style",
      `transform:rotate3d(0,0,1,${this.an * this.count}deg)`
    );
    let cb = this.sect.firstChild;
    cb.setAttribute(
      "style",
      ` transform-origin:50% 50%;
  backface-visibility: visible;
  background-size:25% 25%;
  width:100%;
  height:8em;
transform:rotate3d(0,0,1,45deg)translate3d(${20 * tick}px,0px,${
        5 / tick
      }vw) translate(0%, 0%) rotateX(-90deg) rotateY(90deg)rotateZ(0deg);background:#f00 url('https://picsum.photos/seed/${rand(
        1000
      )}/${innerWidth}/${innerHeight}'); `
    );
    return this.sect;
  }
  update() {
    this.gen();
    console.log(this.an);
    COUNT.push(this.sect);
    this.elm.addEventListener("click", opencube, false);
    return this.sect;
  }
}

function test() {
  for (let b of setBox) {
    let g = new Bxtooling();
    scene.append(g.update());
  }
}

function Remove(env) {
  env = document.documentElement;
  env.removeEventListener("mousemove", mmoveevent);
  env.removeEventListener("mousedown", handleevent1);
  env.removeEventListener("touchstart", tmoveevent);
  env.removeEventListener("click", handleevent1);
  env.removeEventListener("mouseup", Remove);
  return env;
}
window.addEventListener("load", mouse);
window.addEventListener("load", test);
window.addEventListener("mousedown", opencube);
window.addEventListener("mousemove", opencube);
window.addEventListener("mouseup", opencube);
window.addEventListener("click", opencube);
function opencube(event) {
  return console.log("click cube", event.type);
}
