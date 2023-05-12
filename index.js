const menuContainer = document.querySelector(".menu-container")

fetch("http://localhost:3000/menu")
.then(resp=>resp.json())
.then(menuItems=> console.log(menuItems))