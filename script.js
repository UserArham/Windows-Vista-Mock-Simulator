function shutdown(){
  snd.click.play();
  location = "shutdown.html";
}
snd.click.play();
const snd = {
  click: new Audio("assets/sounds/click.mp3"),
  startup: new Audio("assets/sounds/startup.mp3"),
  error: new Audio("assets/sounds/error.mp3")
};
// START BUTTON
const startBtn = document.getElementById("start-button");
const startMenu = document.getElementById("start-menu");
startBtn.onclick = () => startMenu.classList.toggle("hidden");

// CLOCK
setInterval(() => {
  let d = new Date();
  document.getElementById("clock").textContent =
    d.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
}, 1000);

// WINDOW MANAGER
let windowCount = 0;
function openApp(url, title) {
  startMenu.classList.add("hidden");

  windowCount++;

  let win = document.createElement("div");
  win.className = "window";
  win.style.top = `${60 + windowCount * 20}px`;
  win.style.left = `${60 + windowCount * 20}px`;

  win.innerHTML = `
    <div class="titlebar">
      <span>${title}</span>
      <div class="close-btn">×</div>
    </div>
    <iframe src="${url}" style="width:100%; height: calc(100% - 30px); border:0;"></iframe>
  `;

  document.body.appendChild(win);

  // Taskbar button
  let btn = document.createElement("div");
  btn.className = "taskbar-item";
  btn.textContent = title;
  document.getElementById("taskbar-windows").appendChild(btn);

  btn.onclick = () => win.style.display =
    win.style.display === "none" ? "block" : "none";

  // Close window
  win.querySelector(".close-btn").onclick = () => {
    win.remove();
    btn.remove();
  };

  // Dragging
  let isDown = false;
  let offsetX, offsetY;

  win.querySelector(".titlebar").onmousedown = e => {
    isDown = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
  };

  document.onmouseup = () => isDown = false;

  document.onmousemove = e => {
    if (isDown) {
      win.style.left = (e.clientX - offsetX) + "px";
      win.style.top = (e.clientY - offsetY) + "px";
    }
  };
}
function makeIconsDraggable() {
  document.querySelectorAll(".icon").forEach(icon => {
    let drag = false, ox=0, oy=0;

    icon.onmousedown = e => {
      drag = true;
      ox = e.offsetX;
      oy = e.offsetY;
    };

    document.onmouseup = () => drag = false;
    document.onmousemove = e => {
      if(!drag) return;
      icon.style.left = (e.clientX - ox) + "px";
      icon.style.top  = (e.clientY - oy) + "px";
    };
  });
}

window.onload = makeIconsDraggable;
function makeIconsDraggable() {
  document.querySelectorAll(".icon").forEach(icon => {
    let drag = false, ox=0, oy=0;

    icon.onmousedown = e => {
      drag = true;
      ox = e.offsetX;
      oy = e.offsetY;
    };

    document.onmouseup = () => drag = false;
    document.onmousemove = e => {
      if(!drag) return;
      icon.style.left = (e.clientX - ox) + "px";
      icon.style.top  = (e.clientY - oy) + "px";
    };
  });
}

window.onload = makeIconsDraggable;
function makeIconsDraggable() {
  document.querySelectorAll(".icon").forEach(icon => {
    let drag = false, ox=0, oy=0;

    icon.onmousedown = e => {
      drag = true;
      ox = e.offsetX;
      oy = e.offsetY;
    };

    document.onmouseup = () => drag = false;
    document.onmousemove = e => {
      if(!drag) return;
      icon.style.left = (e.clientX - ox) + "px";
      icon.style.top  = (e.clientY - oy) + "px";
    };
  });
}

