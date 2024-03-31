const rentalUrl = "https://vladimirtheserious.github.io/wdd230/final%20project/data/rentals.json"

const cards = document.querySelector('#directory-grid');

async function getRentalData(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayRentals(data.rentals);
        // console.log(data.rentals)

    }
}

const displayRentals = (rentals) => {
    rentals.forEach((rental) => {
        let card = document.createElement('section');
        let memberName = document.createElement("h3");
        let logo = document.createElement('img');
        let maxPerson = document.createElement('p');
        let r_half = document.createElement("p");
        let r_full = document.createElement("p")
        let w_half = document.createElement("p");
        let w_full = document.createElement("p");

        
        memberName.textContent = `${rental.name}`;

        logo.setAttribute('src', rental.imageName);
        logo.setAttribute('alt', `${rental.memberName} logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '300');
        logo.setAttribute('height', '100');

        if (rental.name === 'Nika') {
            logo.setAttribute('width', '90');
        } else {
            logo.setAttribute('width', '300');
        }

        maxPerson.textContent =  `Max person: ${rental.maxPerson}`;
        r_half.textContent = `Reservation Half Day: ${rental.rhalfday}`
        r_full.textContent = `Reservation Full Day: ${rental.rfullday}`
        w_half.textContent = `Walk-In Half Day: ${rental.whalf}`
        w_full.textContent = `Walk-In Full Day: ${rental.wfullday}`
        
        card.setAttribute("class", "member-card");
        card.append(memberName, logo, maxPerson, r_half, r_full, w_half, w_full);

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

getRentalData(rentalUrl)
