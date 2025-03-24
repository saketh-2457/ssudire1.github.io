const works = {
    "task1" : {"title": "Project 1", "url" : "Project/works/task2.html"},
    "task2" : {"title": "Project 2", "url" : "Project/works/task2d.html"},
    "task3" : {"title": "Project 3", "url" : "Project/works/Task3.html"},
    "task4" : {"title": "Project 4", "url" : "Project/works/Task4.html"},
    "task5" : {"title": "Project 5", "url" : "Project/works/Task5.html"},
    "task6" : {"title": "Project 6", "url" : "Project/works/task8.html"},
    "task7" : {"title": "Project 7", "url" : "Project/works/task9.html"},
    "task8" : {"title": "Project 8", "url" : "Project/works/task10.html"},
    "task9" : {"title": "Project 9", "url" : "Project/works/task11.html"},
    "task10" : {"title": "Project 10", "url" : "Project/works/calculate sum.html"},
    "task11" : {"title": "Project 11", "url" : "Project/works/vanish.html"},
    "task12" : {"title": "Project 12", "url" : "Project/works/ggecalculator.html"},
    "task13" : {"title": "Project 13", "url" : "Project/works/checkout.html"},
    "task14" : {"title": "Project 14", "url" : "Project/works/BSF.html"},
    "task15" : {"title": "Project 15", "url" : "Project/works/student.html"},
    "task16" : {"title": "Project 16", "url" : "Project/works/info.html"},
    "task17" : {"title": "Project 17", "url" : "Project/works/midterm.html"},
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
