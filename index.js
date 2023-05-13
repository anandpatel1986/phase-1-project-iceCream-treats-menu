const menuContainer = document.querySelector(".menu-container");
const btnContainer = document.querySelector(".btn-container");
document.addEventListener("DOMContentLoaded", getContent);

//fetch data from local server and pass data to call back functions to display first all menu items and then filtered menu items
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
          // compare clicked button text and invoke display menu accordingly
          if (itemCatagory === "all") {
            displayMenuItem(menuItems);
          } else {
            displayMenuItem(manuCatagory);
          }
        });
      });
    });
}

//Display menu items
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
  //adds event listners on mouse event and invoke call back function
  articles.forEach((article) => {
    article.addEventListener("mouseenter", highLight);
    article.addEventListener("mouseleave", removeHighLight);
  });
}
//highlight border and change background color on mouseenter event
function highLight(e) {
  e.target.style.border = "5px solid blue";
  e.target.style.background = "rgba(220, 230, 255)";
}
//remove effects caused by mouseenter event and change state to origin on mouseleave event
function removeHighLight(e) {
  e.target.style.border = "1px solid blue";
  e.target.style.background = "rgb(240, 248, 255)";
}
