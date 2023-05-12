const menuContainer = document.querySelector(".menu-container");
const filterBtns = document.querySelectorAll(".filter-btn");
document.addEventListener("DOMContentLoaded", getContent);

function getContent() {
  fetch("http://localhost:3000/menu")
    .then((resp) => resp.json())
    .then((menuItems) =>
      menuItems.forEach((menuItem) => displayMenuItem(menuItem))
    );
}

function displayMenuItem(menuItem) {
  const menuItemArticle = document.createElement("article");
  menuItemArticle.classList = "menu-item";

  const itemImage = document.createElement("img");
  itemImage.src = menuItem.image;
  itemImage.alt = menuItem.menuItem;

  const infoDiv = document.createElement("div");
  infoDiv.classList = "item-info";
  const itemTitle = document.createElement("h4");
  itemTitle.textContent = menuItem.menuItem;
  const itemPrice = document.createElement("h4");
  itemPrice.textContent = `$${menuItem.price}`;
  const itemDesc = document.createElement("p");
  itemDesc.textContent = menuItem.desc;
  infoDiv.append(itemTitle, itemPrice, itemDesc);

  menuItemArticle.append(itemImage, infoDiv);
  menuContainer.appendChild(menuItemArticle);
}
