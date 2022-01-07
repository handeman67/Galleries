// window.addEventListener("resize", randPics);


function randPics(img) {
  return (img = Gen("img","image$(num)"));
}

function Gen(d, e) {
  if (!d)
    d = "span";
  let elm = document.createElement(d);
  elm.classList.add(e);
  return elm;
}
const floor = (e) => {
  return Math.floor(e);
};

const rand = (a) => {
  return floor(Math.random() *a);
};

const app = (a) => {
  if (!a) a = "app";
  return document.getElementById(`${a}`);
};
app().classList.add("app");

const rowCount = 5;
const colCount = 15;
const Gallery = Gen("div", "gallery");

const img = [];

const Width = () => {
  return innerWidth - rowCount;/*?*/
};
const Height = () => {
  return innerHeight - colCount;/*?*/
};

var n = Width() /rowCount;/*?*/
var na = Height() / colCount;/*?*/
Gallery.setAttribute(
  "style",
  "display:grid;grid-template-columns: repeat("+rowCount+"," +
    n +
    "px);grid-template-rows: repeat("+colCount+", " +
    na +
    "px);"
);

let num = 0;
let j = na;/*?*/
let i = n;/*?*/
let rw = 0;
for (i; i < Width(); i++) {
  for (j; j < Height(); j++) {
    const Pic =
      `https://picsum.photos/id/${rand(200)}/${floor(n) }/${floor(na)}`;
      if(Pic.complete===false){
        img.push(`https://picsum.photos/id/${rand(200)}/${floor(n) }/${floor(na)}`);
      console.log("Not completed",Pic)
      }else{
          img.push(Pic);
          console.log("completed",img)
      }
    
    const Imagewrap = Gen("div", "Imagewrap");
    const input = Gen("input", "checkbox");

    Imagewrap.setAttribute(
      "style",
      `align-items: stretch; display:block;grid-row:${rw} / span 1;grid-col:${j} / span 1;width:${n}/${na}`
    );
    if (i > Width()) {
      rw++;
    } else {
      rw = 0;
    }
    const Image = Gen("img", "image");
    Image.id = `image${num}`;
    Imagewrap.id = `images${num}`;
    Image.setAttribute("src", img[num]);
    if (Image === null) {
      console.log(Image.id);
    }
    const label = Gen("label", "label");
    label.setAttribute("for", "checkbox");
    input.setAttribute("Type", "radio");
    input.setAttribute("name", "radio");
    input.setAttribute("onclick", "console.log('clicked',this.id)", false);
    input.setAttribute("style", "display:none;width:100%; height:100%");
    input.id = "checkbox";

    Gallery.appendChild(Imagewrap);
    Imagewrap.appendChild(input);
    Imagewrap.appendChild(label);
    label.appendChild(Image);
    num++;
  }
  rw++;
}
// function Changed() {
//   Pics().setattribute("width", n);
//   Pics().setattribute("height", n);
// }
app().appendChild(Gallery);
