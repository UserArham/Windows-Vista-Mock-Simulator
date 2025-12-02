// START MENU
const startBtn = document.getElementById("start-button");
const startMenu = document.getElementById("start-menu");
startBtn.onclick = () => startMenu.classList.toggle("hidden");

// CLOCK
setInterval(() => {
  let t = new Date();
  document.getElementById("clock").textContent =
    t.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
}, 1000);

// WINDOW MANAGER
let zIndexTop = 10;
let windowCount = 0;

function openApp(url, title) {
  startMenu.classList.add("hidden");

  windowCount++;

  let win = document.createElement("div");
  win.className = "window";
  win.style.left = `${80 + windowCount * 20}px`;
  win.style.top = `${80 + windowCount * 20}px`;
  win.style.zIndex = zIndexTop++;

  win.innerHTML = `
    <div class="titlebar">
      <span>${title}</span>
      <div class="close-btn">×</div>
    </div>
    <iframe src="${url}" style="width:100%; height: calc(100% - 34px); border:0;"></iframe>
  `;

  document.body.appendChild(win);

  win.addEventListener("mousedown", () => {
    win.style.zIndex = zIndexTop++;
  });

  // Close button
  win.querySelector(".close-btn").onclick = () => win.remove();

  // Dragging
  let isDrag = false;
  let offset = {x:0, y:0};

  win.querySelector(".titlebar").onmousedown = e => {
    isDrag = true;
    offset.x = e.clientX - win.offsetLeft;
    offset.y = e.clientY - win.offsetTop;
  };

  document.onmouseup = () => isDrag = false;

  document.onmousemove = e => {
    if (!isDrag) return;
    win.style.left = `${e.clientX - offset.x}px`;
    win.style.top = `${e.clientY - offset.y}px`;
  };
}
