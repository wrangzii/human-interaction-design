const $$ = document.querySelectorAll.bind(document);
const collapseMonthIcon = $(".collapse-month i");
const collapseList = $(".detail");
const collapseIcons = $$(".detail li:nth-child(odd) i");
// const x = collapseIcon[0].parentElement.nextElementSibling;
// console.log(x);

const handleCollapse = () => {
  collapseList.classList.toggle("d-none");
  collapseMonthIcon.classList.toggle("fa-chevron-up");
  collapseMonthIcon.classList.toggle("fa-chevron-down");
};

const handleCollapseChildren = (item) => {
  item.parentElement.nextElementSibling.classList.toggle("d-none");
  item.classList.toggle("fa-chevron-up");
  item.classList.toggle("fa-chevron-down");
};

[...collapseIcons].map((btn) =>
  btn.addEventListener("click", () => handleCollapseChildren(btn))
);

collapseMonthIcon.addEventListener("click", handleCollapse);
