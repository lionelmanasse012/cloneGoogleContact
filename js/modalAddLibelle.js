const activeModal = document.querySelector("#homeContactAddLibelle");

const libelle = document.getElementById("homeContactLibelleList");
const labelList = [];
let idLabel;

const modalBlockContainer = createElement("div", {
  id: "modalBlockContainer",
  className: "modalBlockContainer",
});

const formModal = createElement("form", {
  id: "formModal",
  className: "formModal",
});

const title = createElement("p", { textContent: "Créer un libellé" });

const libelleBlock = createElement("div", {
  id: "libelleBlock",
  className: "libelleBlock",
});

const inputLabelName = createElement("input", {
  type: "text",
  name: "inputLibelle",
  id: "inputLibelle",
  className: "inputLibelle",
  placeholder: "Nouveau libellé",
  autocomplete: "off",
});

const inputBlock = createElement("div", {
  id: "inputBlock",
  className: "inputBlock",
});

const inputCancel = createElement("input", {
  id: "inputCancel",
  class: "inputCancel",
  type: "button",
  value: "Non, ne rien faire",
});

const inputSave = createElement("input", {
  id: "inputSave",
  class: "inputSave",
  type: "submit",
  value: "Enregistrer",
});

const modalActived = createElement("div", {
  id: "modalActived",
  className: "modalActived",
});

function createElement(type, properties = {}) {
  const element = document.createElement(type);
  Object.assign(element, properties);
  return element;
}

function createDivision(id, className) {
  return createElement("div", { id: id, className: className });
}

function triLibelle() {
  const elements = Array.from(libelle.children);
  elements.sort((a, b) => {
    return a.textContent.localeCompare(b.textContent);
  });
  elements.forEach(function (element) {
    libelle.appendChild(element);
  });
}

function getElement(idElement) {
  return document.getElementById(idElement);
}

function openModal() {
  getElement("modalBlock").appendChild(modalBlockContainer);
  getElement("modalBlockContainer").appendChild(formModal);
  getElement("formModal").append(title, libelleBlock, inputBlock);
  getElement("libelleBlock").appendChild(inputLabelName);
  getElement("inputBlock").append(inputCancel, inputSave);
  getElement("modalActivedBlock").appendChild(modalActived);
  inputLibelle.focus();
}

function removeModal() {
  inputLibelle.value = "";
  modalActived.remove();
  modalBlockContainer.remove();
}

function createIcone(iconName, className) {
  return createElement("span", {
    className: className,
    textContent: iconName,
  });
}

function createButtonUpdate(text, className, clickHandler) {
  return createElement("span", {
    className: className,
    textContent: text,
    onclick: clickHandler,
  });
}

function updateLabel(labelId, newLabelName) {
  const label = document.getElementById(labelId);
  const labelDescription = label.querySelector(".labelDescription");

  for (let i = 0; i < labelList.length; i++) {
    const element = labelList[i];
    if (element.id === label.id) {
      element.description = newLabelName;
      labelDescription.textContent = element.description;
    }
  }
}

function deleteLabel(labelId) {
  const label = document.getElementById(labelId);
  label.remove();
}

function createLabel(labelId, labelName) {
  const id = labelId;

  const label = { id: id, description: labelName };

  const contactLeftLibelleItem = createElement("li", {
    id: label.id,
    className: "homeContactLibelleListItem",
  });

  const contactLeftLibelleIconeBlock = createDivision(
    "homeContactLibelleIconeBlock",
    "homeContactLibelleIconeBlock"
  );

  const labelIcon = createIcone("label", "material-icons");

  const labelDescription = createElement("span", {
    // id: labelDescriptionId,
    className: "labelDescription",
    textContent: label.description,
  });
  contactLeftLibelleIconeBlock.append(labelIcon, labelDescription);

  const contactLeftLibelleUpdate = createDivision(
    "homeContactLibelleUpdate",
    "homeContactLibelleUpdate"
  );

  const contactLeftLibelleUpdateBlockLeft = createDivision(
    "homeContactLibelleUpdateBlockLeft",
    "homeContactLibelleUpdateBlockLeft"
  );
  contactLeftLibelleUpdateBlockLeft.classList.add(
    "homeContactLibelleUpdateBlock"
  );

  labelList.push(label);
  const contactLeftLibelleEdit = createButtonUpdate(
    "edit",
    "material-symbols-outlined",
    function () {
      const id = getIdOfLi(this);
      idLabel = id;
      openModal();
      inputLibelle.value = labelName;
      const newTitle = "Renommer le libellé";
      title.textContent = newTitle;
    }
  );
  contactLeftLibelleEdit.classList.add(
    "homeContactLibelleEdit",
    "homeContactLibelleUpdateIcon"
  );
  contactLeftLibelleUpdateBlockLeft.appendChild(contactLeftLibelleEdit);

  const contactLeftLibelleUpdateBlockRight = createDivision(
    "homeContactLibelleUpdateBlockRight",
    "homeContactLibelleUpdateBlockRight"
  );
  contactLeftLibelleUpdateBlockRight.classList.add(
    "homeContactLibelleUpdateBlock"
  );

  const contactLeftLibelleDelete = createButtonUpdate(
    "delete",
    "material-symbols-outlined",
    function () {
      deleteLabel(labelId);
    }
  );
  contactLeftLibelleDelete.classList.add(
    "homeContactLibelleDelete",
    "homeContactLibelleUpdateIcon"
  );
  contactLeftLibelleUpdateBlockRight.appendChild(contactLeftLibelleDelete);
  contactLeftLibelleUpdate.append(
    contactLeftLibelleUpdateBlockLeft,
    contactLeftLibelleUpdateBlockRight
  );

  contactLeftLibelleItem.append(
    contactLeftLibelleIconeBlock,
    contactLeftLibelleUpdate
  );

  libelle.appendChild(contactLeftLibelleItem);

  triLibelle();
}

activeModal.addEventListener("click", function () {
  const newTitle = "Créer un libellé";
  title.textContent = newTitle;
  openModal();
});

modalActived.addEventListener("click", function () {
  removeModal();
});

inputSave.addEventListener("click", function (event) {
  event.preventDefault();
  const id = crypto.randomUUID();
  const create = "Créer un libellé";
  const rename = "Renommer le libellé";

  if (title.textContent === create) {
    const labelName = inputLibelle.value;
    if (labelName.trim() === "" || null || undefined) {
      inputLibelle.value = "";
      inputLibelle.focus();
      return;
    } else {
      createLabel(id, labelName.trim());
      inputLibelle.value = "";
      removeModal();
    }
  } else {
    for (let i = 0; i < labelList.length; i++) {
      const label = labelList[i];
      if (label.id === idLabel) {
        label.description = inputLibelle.value;
        deleteLabel(label.id);
        createLabel(label.id, label.description);
        inputLibelle.value = "";
        removeModal();
      }
    }
  }
});

inputCancel.addEventListener("click", function () {
  inputLibelle.value = "";
  removeModal();
});

function getIdOfLi(element) {
  const liElement = element.closest("li");
  const liId = liElement.id;
  return liId;
}
