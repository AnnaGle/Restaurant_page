// window.onload = () => {

// }
import Icon from './main_image.jpg';

// function to be exported 
const createHome = () => {


    const container = document.createElement("div");
    container.classList.add('home');
    // document.getElementById('main').appendChild(container);


    const quote = document.createElement("div")
    quote.classList.add('quote');
    const quotetext = document.createTextNode("You are what you eat so eat well at Anna's Place")
    quote.appendChild(quotetext);
    container.appendChild(quote);


    // const mainImg = document.createElement("img");
    // mainImg.src= "main_image.jpg";
    // container.appendChild(mainImg);
    const myIcon = new Image();
    myIcon.classList.add('main_image');
    myIcon.src = Icon;
    container.appendChild(myIcon);

    const slogan = document.createElement("div")
    slogan.classList.add('slogan');
    const slogantext = document.createTextNode("Visit us! You won't regret!")
    slogan.appendChild(slogantext);
    container.appendChild(slogan);

    return container

};
function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}


export { loadHome };