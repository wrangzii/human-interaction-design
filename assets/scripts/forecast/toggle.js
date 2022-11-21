const search = $(".search");
const locationPicker = $(".location h2");
const locationDropdown = $(".location-dropdown");

locationDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
});

locationPicker.addEventListener("click", (e) => {
  e.stopPropagation();
  locationDropdown.classList.toggle("d-none");
});

window.addEventListener("click", (e) =>
  e.target ? locationDropdown.classList.add("d-none") : null
);
