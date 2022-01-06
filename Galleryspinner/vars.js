
const env = document.documentElement;
const sceneinner = document.querySelector(".sceneinner");
const scene = document.querySelector(".scene");

const app = document.querySelector(".app");

const avatar = document.querySelector(
  ".user-avatar UserMenu_sessionUserAvatar-2WeRf"
);
const Count = document.getElementById("count");
const cube = document.querySelector(".cuboid");
const faceWrap = document.querySelector(".faceWrap");
const shader = document.querySelector(".shader");
// Count.addEventListener("input", changed);
//create  360 deg to split into segments
const angle = Math.PI * 2;
let setBox = Count.value,
  tick = 20,
  active = false,
  down = false,
  up = false,
  move = false,
  out = false,
  gp = setBox,
  fromtop = 50;
//Mapping variables
const boxes=new Array(gp);
const COUNT = [];
const map = [];
const diff = [];
const BackgroundImages=[];