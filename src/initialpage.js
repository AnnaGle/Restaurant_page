import { loadHome } from "./homepage";
import {loadMenu} from "./menu";
import { loadContact } from "./contact";


function create_header() {

    const header = document.createElement("div");
    header.classList.add('header');
    document.getElementById('content').appendChild(header);


    const restaurant_name = document.createElement("h1");
    restaurant_name.classList.add('restaurant_name');
    restaurant_name.textContent = "Anna's Place"
    header.appendChild(restaurant_name);

    
    header.appendChild(create_navigation());
    return header;
};


function create_navigation() {

    const navigation_bar = document.createElement("div");
    navigation_bar.classList.add('navigation');



    const home_button = document.createElement("button");
    home_button.classList.add('nav_btn');
    navigation_bar.appendChild(home_button);
    home_button.textContent = "Home";
    home_button.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(home_button);
        loadHome();
    });

    const menu_button = document.createElement("button");
    menu_button.classList.add('nav_btn');
    navigation_bar.appendChild(menu_button);
    menu_button.textContent = "Menu";
    menu_button.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menu_button);
        loadMenu();
    });
    const contact_button = document.createElement("button");
    contact_button.classList.add('nav_btn');
    navigation_bar.appendChild(contact_button);
    contact_button.textContent = "Contact";
    contact_button.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contact_button);
        loadContact();
    });
return navigation_bar;

}

function setActiveButton(button){
    const buttons= document.querySelectorAll(".nav_btn");
    buttons.forEach((button)=>{
        if(button !==this){
            button.classList.remove("active");
        }
    });
    button.classList.add("active");
}

function create_main(){
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id","main");
    return main;
}


export const initialPage = () => {
    const content = document.getElementById("content");
    content.appendChild(create_header());
    content.appendChild(create_main());

    setActiveButton(document.querySelector(".nav_btn"));
    loadHome();


};

