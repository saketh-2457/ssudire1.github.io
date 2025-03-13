const works = {
    "task1": { "title": "Project 1", "url": "works/task1/index.html" },
    "task2": { "title": "Project 2", "url": "works/task2/index.html" },
    "task3": { "title": "Project 3", "url": "works/task3/index.html" },
};

const navButtonsDiv = document.getElementById("nav_buttons");
const contentFrame = document.getElementById("content_frame");

for (let key in works) {
    let projectLink = document.createElement("div");
    projectLink.innerText = works[key].title;
    projectLink.className = "nav_item";

    projectLink.onclick = function () {
        contentFrame.src = works[key].url;
    };

    navButtonsDiv.appendChild(projectLink);
}
