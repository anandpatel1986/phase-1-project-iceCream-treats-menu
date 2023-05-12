const menuContainer = document.querySelector(".menu-container")
document.addEventListener("DOMContentLoaded", getContent);

function getContent(){
    fetch("http://localhost:3000/menu")
    .then(resp=>resp.json())
    .then(menuItems=> menuItems.map(menuItem => displayMenuItem(menuItem)))
}

function displayMenuItem(menuItem){
    console.log(menuItem)
}