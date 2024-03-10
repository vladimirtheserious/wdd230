const baseURL = "https://mariya-domakova.github.io/wdd230/";
const linksURL = "https://mariya-domakova.github.io/wdd230/data/links.json";
const linksList = document.querySelector("#links");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

const displayLinks = (weeks) => {
    weeks.forEach(week => {
        const listItem = document.createElement("li");
        listItem.textContent = `${week.lesson}: `;
        const innerLinks = week.links;
        innerLinks.forEach((link) => {
            const listTag = document.createElement("a");
            listTag.setAttribute("href", link.url);
            listTag.setAttribute("target", "_blank");
            listTag.innerText = `${link.title}`;
            listItem.appendChild(listTag);
            if (link != innerLinks.at(-1)) {
                const separator = document.createElement("span");
                separator.textContent = " | ";
                listItem.appendChild(separator);
            }
        })
        linksList.appendChild(listItem);
    });
}

getLinks();