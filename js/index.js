const homeContactRightEmpty = document.getElementById("homeContactRightEmpty");
const homeContactRightAdded = document.getElementById("homeContactRightAdded");
const homeCreateContact = document.getElementById("homeCreateContact");
const createContactBtnBlockLeft = document.getElementById(
  "homeCreateContactBtn"
);
const showContactBtnBlockLeft = document.getElementById(
  "modalCreateContactItemCreateContact"
);
const openModalCreateContactBtn = document.getElementById("modalCreateContact");
const createContactBtnBlockRight = document.getElementById(
  "homeContactEmptyCreateBtn"
);
const showContactBtn = document.getElementById(
  "homeContactTypeItemShozContact"
);
const corbeilleBtn = document.getElementById("homeContactOthersItemCorbeille");
const openModalLabelBtn = document.getElementById("homeContactAddLibelle");
const openLabelClick = document.getElementById(
  "fc9df8f2-329d-4d1a-b8f6-2ee03ea739dc"
);

createContactBtnBlockLeft.addEventListener("click", function () {
  openModalCreateContactBtn.classList.toggle("showModal");
});

showContactBtnBlockLeft.addEventListener("click", function () {
  homeContactRightEmpty.classList.add("closeModal");
  homeContactRightAdded.classList.add("closeModal");
  homeCreateContact.classList.add("showModal");
  openModalCreateContactBtn.classList.remove("showModal");
});

// const homeContactEmptyCreateBtn = document.getElementById(
//   "homeContactEmptyCreateBtn"
// );
// const homeContactEmpty = document.getElementById("homeContactEmpty");
// const homeCreateContact = document.getElementById("homeCreateContact");

// console.log(homeContactEmpty);

// homeContactEmptyCreateBtn.addEventListener("click", function () {
//   homeContactEmpty.style.display = "none";
//   homeCreateContact.style.display = "flex";
// });
