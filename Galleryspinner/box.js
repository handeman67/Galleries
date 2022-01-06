class box {
    constructor(e) {
      e = this;
      e.HTM = `<div class="cuboid" >     
       <div class="faceWrap">
        <div class="face">
          <div class="shader"></div>
        </div> </div></div>`;
      e.container = document.createElement("template");
      e.container.classList.add("template");
      e.container.id = "template";
      e.container.innerHTML = this.HTM;
      resultControl();
      return e;
    }
  }
  