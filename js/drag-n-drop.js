import Sortable from "sortablejs";

let verticalContainers = document.querySelectorAll(".vertical.draggable");
verticalContainers.forEach((container) => {
  new Sortable(container, {
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    direction: "vertical",
  });
});

let horizontalContainers = document.querySelectorAll(".horizontal.draggable");
horizontalContainers.forEach((container) => {
  new Sortable(container, {
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    direction: "horizontal",
  });
});

let verticalCards = document.querySelectorAll(".vertical-delete.draggable");
verticalCards.forEach((container) => {
  new Sortable(container, {
    group: "shared",
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    direction: "vertical",
  });
});

let horizontalCards = document.querySelectorAll(".horizontal-delete.draggable");
horizontalCards.forEach((container) => {
  new Sortable(container, {
    group: "shared",
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    direction: "horizontal",
  });
});

let copyArea = document.querySelectorAll(".copy.draggable");
copyArea.forEach((container) => {
  new Sortable(container, {
    group: {
      name: "shared",
      pull: "clone", 
      put: false,
    },
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    direction: "vertical",
    sort: false,
  });
});

const deleteArea = document.getElementById("delete-area");
Sortable.create(deleteArea, {
  group: "shared",
  onAdd: function (evt) {
    evt.item.remove(); 
  },
});
