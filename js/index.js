const hamburgerMenu = document.getElementById("hamburgerMenu");
const homeContactLeft = document.getElementById("homeContactLeft");

const homeContactRightEmpty = document.getElementById("homeContactRightEmpty");
const homeContactRightAdded = document.getElementById("homeContactRightAdded");
const homeCreateContact = document.getElementById("homeCreateContact");
const homeContactTotalLeft = document.querySelector("#homeContactTotalLeft");
const homeContactTotalRight = document.querySelector("#homeContactTotalRight");
let contactTotal = 0;
const contact = [];

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

hamburgerMenu.addEventListener("click", function () {
  homeContactLeft.classList.toggle("hamburgerLeft");
  homeContactRightEmpty.classList.toggle("homeRightFullScreen");
  homeContactRightAdded.classList.toggle("homeRightFullScreen");
  homeCreateContact.classList.toggle("homeRightFullScreen");
});

createContactBtnBlockLeft.addEventListener("click", function () {
  openModalCreateContactBtn.classList.toggle("showModal");
});

showContactBtnBlockLeft.addEventListener("click", function () {
  homeContactRightEmpty.classList.add("closeModal");
  homeContactRightAdded.classList.add("closeModal");
  homeCreateContact.classList.remove("closeModal");
  openModalCreateContactBtn.classList.remove("showModal");
  inputPrenom.focus();
});

// create element
function createElement(tag, propreties = {}) {
  const element = document.createElement(tag);
  Object.assign(element, propreties);

  return element;
}

const homeAllContact = document.getElementById("homeAllContact");

function createContact(
  initial,
  prenom,
  nom,
  email,
  telephone,
  entreprise,
  fonction,
  libelle
) {
  const homeContactCreated = createElement("ul", {
    id: "homeContactCreated",
    className: "homeContactCreated",
  });

  const homeContactCreatedItem_1 = createElement("li", {
    // id: "homeContactCreatedItem",
    className: "homeContactCreatedItem",
  });
  homeContactCreatedItem_1.classList.add("drag_indicator");

  const drag_indicator = createElement("i", {
    className: "material-icons",
    textContent: "drag_indicator",
  });
  homeContactCreatedItem_1.appendChild(drag_indicator);

  const homeContactCreatedItem_2 = createElement("li", {
    // id: "homeContactCreatedItem",
    className: "homeContactCreatedItem",
  });
  const checkboxBlock = createElement("div", { className: "checkboxBlock" });
  const checkbox = createElement("input", {
    className: "checkbox",
    type: "checkbox",
  });
  checkboxBlock.appendChild(checkbox);

  const accountImg = createElement("span", {
    className: "accountImg",
    textContent: initial,
  });
  homeContactCreatedItem_2.append(checkboxBlock, accountImg);

  const title = createElement("li", {
    className: "homeContactCreatedItem",
    textContent: `${prenom} ${nom}`,
  });

  const mail = createElement("li", {
    className: "homeContactCreatedItem",
    textContent: email,
  });

  const telNumber = createElement("li", {
    className: "homeContactCreatedItem",
    textContent: telephone,
  });

  const fonctionEntreprise = createElement("li", {
    className: "homeContactCreatedItem",
    textContent: `${fonction}, ${entreprise}`,
  });

  const label = createElement("li", {
    className: "homeContactCreatedItem",
  });
  const labelBtn = createElement("button", {
    className: "homeContactCreatedAddLabel",
    textContent: libelle,
  });
  label.appendChild(labelBtn);

  const icons = createElement("li", {
    className: "homeContactCreatedItem",
  });
  icons.classList.add("homeContactAddedTopBarItemBlockIcons");
  const star_outline = createElement("i", {
    className: "material-icons",
    textContent: "star_outline",
  });
  const edit = createElement("i", {
    className: "material-symbols-outlined",
    textContent: "edit",
  });
  const more_vert = createElement("i", {
    className: "material-icons",
    textContent: "more_vert",
  });

  icons.append(star_outline, edit, more_vert);
  homeContactCreated.append(
    homeContactCreatedItem_1,
    homeContactCreatedItem_2,
    title,
    mail,
    telNumber,
    fonctionEntreprise,
    label,
    icons
  );

  homeAllContact.appendChild(homeContactCreated);

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      homeContactCreated.classList.add("homeContactChecked");
    } else {
      homeContactCreated.classList.remove("homeContactChecked");
    }
  });
}

// create contact
const contactSaved = document.getElementById("homeCreateContactTopBarItemBtn");
const inputPrenom = document.getElementById("inputPrenom");
const inputNom = document.getElementById("inputNom");
const inputEntreprise = document.getElementById("inputEntreprise");
const inputFonction = document.getElementById("inputFonction");
const inputMail = document.getElementById("inputMail");
const inputPhone = document.getElementById("phone");

function data(key, value) {
  localStorage.setItem(key, value);
  return localStorage.getItem(key);
}

contactSaved.addEventListener("click", function () {
  const contactId = crypto.randomUUID();

  if (
    inputPrenom.value.trim() === "" ||
    inputNom.value.trim() === "" ||
    inputPhone.value.trim() === ""
  ) {
    return;
  } else {
    const contactElement = {
      id: contactId,
      prenom: inputPrenom.value,
      nom: inputNom.value,
      entreprise: inputEntreprise.value,
      fonction: inputFonction.value,
      email: inputMail.value,
      phone: inputPhone.value,
    };
    contact.push(contactElement);
    addContact();

    homeContactRightEmpty.classList.add("closeModal");
    homeCreateContact.classList.add("closeModal");
    homeContactRightAdded.classList.remove("closeModal");
    homeContactRightAdded.classList.remove("closeModal");

    inputPrenom.value = "";
    inputNom.value = "";
    inputEntreprise.value = "";
    inputFonction.value = "";
    inputMail.value = "";
    inputPhone.value = "";

    homeContactTotalLeft.textContent = contactTotal;
    homeContactTotalRight.textContent = `( ${contactTotal} )`;
  }
});

function addContact() {
  let prenom;
  let nom;
  let entreprise;
  let fonction;
  let email;
  let phone;

  for (let i = 0; i < contact.length; i++) {
    const element = contact[i];

    prenom = element.prenom;
    nom = element.nom;
    entreprise = element.entreprise;
    fonction = element.fonction;
    email = element.email;
    phone = element.phone;
  }
  createContact("A", prenom, nom, email, phone, entreprise, fonction, "Bureau");
  contactTotal += 1;
}

function updateContact(
  contactId,
  newPrenom,
  newNom,
  newEntreprise,
  newFonction,
  newEmail,
  newPhone
) {
  for (let i = 0; i < contact.length; i++) {
    const element = contact[i];

    if (element.id === contactId) {
      element.prenom = newPrenom;
      element.nom = newNom;
      element.entreprise = newEntreprise;
      element.fonction = newFonction;
      element.email = newEmail;
      element.phone = newPhone;

      console.log("good");
    } else {
      console.log("none");
    }
  }
}

function deleteContact(contactId) {
  for (let i = 0; i < contact.length; i++) {
    const element = contact[i];

    if (element.id === contactId) {
      contact.splice(element);
    }
  }
}
