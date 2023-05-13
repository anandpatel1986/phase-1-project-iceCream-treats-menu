const menuContainer = document.querySelector(".menu-container");
const btnContainer = document.querySelector(".btn-container");
document.addEventListener("DOMContentLoaded", getContent);

function getContent() {
  fetch("http://localhost:3000/menu")
    .then((resp) => resp.json())
    .then(function (menuItems) {
      displayMenuItem(menuItems);
      const filterBtns = btnContainer.querySelectorAll(".filter-btn");
      filterBtns.forEach((btn) => {
        btn.addEventListener("click", function (e) {
          const itemCatagory = e.currentTarget.dataset.catagory;
          const manuCatagory = menuItems.filter(function (menuItem) {
            if (menuItem.catagory === itemCatagory) {
              return menuItem;
            }
          });
          //console.log(manuCatagory);
          if (itemCatagory === "all") {
            displayMenuItem(menuItems);
          } else {
            displayMenuItem(manuCatagory);
          }
        });
      });
    });
}

//Display items
function displayMenuItem(menuItems) {
  let dispalyList = menuItems.map((menuItem) => {
    return `<article class="menu-item">
                <img src=${menuItem.image} alt=${menuItem.menuItem} class="photo" />
                <div class="item-info">
                    <h4>${menuItem.menuItem}</h4>
                    <h4 class="price">$${menuItem.price}</h4>
                    <p class="item-text">
                    ${menuItem.desc}
                    </p
                </div>
            </article>`;
  });

  dispalyList = dispalyList.join("");
  menuContainer.innerHTML = dispalyList;
  const articles = document.querySelectorAll(".menu-item");
  articles.forEach((article) => {
    article.addEventListener("mouseenter", highLight);
    article.addEventListener("mouseleave", removeHighLight);
  });
}
function highLight(e) {
  e.target.style.border = "5px solid blue";
  e.target.style.background = "rgba(220, 230, 255)";
 }
function removeHighLight(e) {
  e.target.style.border = "1px solid blue";
  e.target.style.background = "rgb(240, 248, 255)";
}
