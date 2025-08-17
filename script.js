
import contacts from "./contacts.js";

let mainElement = document.getElementById('contacts-container');

contacts.forEach((contact) => {
    let divElement = document.createElement('div');
    divElement.setAttribute('class', 'contact-card');
    divElement.innerHTML = `
        <img src="${contact.photo}" alt="avatar" />
        <div class="contact-info">
            <h2>${contact.name}</h2>
            <p>📞 ${contact.mobile}</p>
            <p>✉️ ${contact.email}</p>
        </div>`;
    mainElement.appendChild(divElement);
});
