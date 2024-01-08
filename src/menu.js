
function createMenu(){
    const menu= document.createElement("div");
    menu.classList.add("menu");

 menu.appendChild(
    createMenuItem(
      "Coffe",
      "Delicious coffe in varius options. Choose your favourite."
    )
  );
  menu.appendChild(
    createMenuItem(
      "Donut",
      "Fresh donuts made by hand in our restaurat. Choose your own addings."
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pie",
      "We make our pies everyday at our restaurant. Ask our staff what is in today's offer!"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pretzel",
      "We can show you the new face of pretzel and make you love it!"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Soup",
      "Only one soup a day is made to assure freshness and best quality. Seasonal products are used!"
    )
  );
  
return menu
}
 function createMenuItem(name, description){
  const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
 
 const foodName = document.createElement("h2");
 foodName.textContent = name;

 const foodDescription = document.createElement("p");
 foodDescription.textContent = description;

 const foodImage = document.createElement("img");
 foodImage.src = `menu_images/${name.toLowerCase()}.png`;
 foodImage.alt = `${name}`;

 menuItem.appendChild(foodImage);
 menuItem.appendChild(foodName);
 menuItem.appendChild(foodDescription);

 return menuItem;
}
function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
  }
  
  export  {loadMenu};

// import Dish_1 from './main_image.jpg';
// const menuPage = () => {

//     const soupImg = document.createElement("img");
//     soupImgImg.src= "main_image.jpg";
//     container.appendChild(soupImg);
//     const myIcon = new Image();
//     myIcon.classList.add('main_image');
//     myIcon.src = Icon;
//     container.appendChild(myIcon);

// }