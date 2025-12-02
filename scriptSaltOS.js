// START MENU TOGGLE
const startBtn = document.getElementById("start-button");
const startMenu = document.getElementById("start-menu");
startBtn.onclick = () => startMenu.classList.toggle("hidden");

// TASKBAR CLOCK
setInterval(() => {
  document.getElementById("clock").innerText =
    new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
}, 1000);

// WINDOW MANAGER
let zTop = 10;
let winCount = 0;

function openApp(url, title) {
  startMenu.classList.add("hidden");
  winCount++;

  let win = document.createElement("div");
  win.className = "window";
  win.style.left = 100 + winCount*20 + "px";
  win.style.top  = 80 + winCount*20 + "px";
  win.style.zIndex = zTop++;

  win.innerHTML = `
    <div class="titlebar">
      <span>${title}</span>
      <div class="close-btn">×</div>
    </div>
    <iframe src="${url}" style="width:100%;height:calc(100% - 34px);"></iframe>
  `;

  document.body.appendChild(win);
  win.addEventListener("mousedown", () => win.style.zIndex = zTop++);

  win.querySelector(".close-btn").onclick = () => win.remove();

  // Dragging
  let drag = false;
  let offsetX, offsetY;

  win.querySelector(".titlebar").onmousedown = e => {
    drag = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
  };
  document.onmouseup = () => drag = false;
  document.onmousemove = e => {
    if (!drag) return;
    win.style.left = e.clientX - offsetX + "px";
    win.style.top  = e.clientY - offsetY + "px";
  };

  // Taskbar item
  let item = document.createElement("div");
  item.className = "taskbar-item";
  item.textContent = title;
  document.getElementById("taskbar-windows").appendChild(item);

  item.onclick = () => {
    win.style.display = win.style.display === "none" ? "block" : "none";
    win.style.zIndex = zTop++;
  };
}
