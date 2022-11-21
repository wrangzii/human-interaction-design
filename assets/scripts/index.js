const $ = document.querySelector.bind(document);

const currentUrl = window.location.pathname.slice(7);
const dashboard = $("li.dashboard"),
  forecast = $("li.forecast"),
  map = $("li.map"),
  history = $("li.history");

const handleActiveNavItem = (url) => {
  if (url === "dashboard.html") {
    map.classList.remove("active");
    history.classList.remove("active");
    forecast.classList.remove("active");
    dashboard.classList.add("active");
  } else if (url === "map.html") {
    dashboard.classList.remove("active");
    history.classList.remove("active");
    forecast.classList.remove("active");
    map.classList.add("active");
  } else if (url === "history.html") {
    dashboard.classList.remove("active");
    map.classList.remove("active");
    forecast.classList.remove("active");
    history.classList.add("active");
  } else if (url === "forecast.html") {
    dashboard.classList.remove("active");
    map.classList.remove("active");
    history.classList.remove("active");
    forecast.classList.add("active");
  }
};

window.onload = handleActiveNavItem(currentUrl);

// SIDEBAR
const bar = $("i.fa-bars");
const sidebar = $(".sidebar");
const closeBtn = $("button.close");
if (sidebar) {
  bar.addEventListener("click", () => {
    sidebar.classList.toggle("d-none");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("d-none");
  });
}
