const membersUrl = 'https://vladimirtheserious.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#directory-grid');

async function getMembersData(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayMembers(data.members);
    }
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let memberName = document.createElement("h3");
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phoneNumber = document.createElement("p");
        let website = document.createElement('a');

        
        memberName.textContent = `${member.name}`;

        logo.setAttribute('src', member.imageFileName);
        logo.setAttribute('alt', `${member.memberName} logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '300');
        logo.setAttribute('height', '100');

        if (member.name === 'Nika') {
            logo.setAttribute('width', '90');
        } else {
            logo.setAttribute('width', '300');
        }

        address.textContent = `${member.address}`;
        phoneNumber.textContent = `${member.phoneNumber}`;
        website.setAttribute("href", member.websiteURL);
        website.textContent = `${member.websiteURL}`;
        
        card.setAttribute("class", "member-card");
        card.append(memberName, logo, address, phoneNumber, website);

        cards.appendChild(card);
    });
  }

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    showList();
});

function showList() {
    cards.classList.add("list");
    cards.classList.remove("grid");
}

getMembersData(membersUrl)


// document.addEventListener("DOMContentLoaded", function () {
//     const h = document.getElementById("hero-msg");
//     h.style.opacity = "0";
//     setTimeout(() => {
//       h.style.opacity = "1";
//     }, 500); 
//   });