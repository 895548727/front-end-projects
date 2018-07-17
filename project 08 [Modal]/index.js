var a = document.getElementById("wrapper");
var btn = document.getElementById("btn");
var cover = document.getElementById("cover");
btn.onclick = function () {
  if (a.classList.contains("hidden")) {
    a.classList.remove("hidden");
    cover.style.display = "block";
    btn.innerText = "隐藏模态框";
  } else {
    a.classList.add("hidden");
    btn.innerText = "显示模态框";
    cover.style.display = "none";
  }
}