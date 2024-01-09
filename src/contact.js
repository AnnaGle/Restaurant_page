
function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '📞 723 456 789';

    const address = document.createElement('p');
    address.textContent = '🏠 Mysia 42, Wypizdówko, Poland';

    const restaurantLocation = document.createElement('img');
    restaurantLocation.classList.add('map');
    restaurantLocation.src = "menu_images/location.png";
    restaurantLocation.alt = "Anna's restaurant location";

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(restaurantLocation);

    return contact
};

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createContact())
};

export { loadContact };