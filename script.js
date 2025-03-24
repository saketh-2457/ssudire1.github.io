document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { title: "Project 1", url: "works/task2.html" },
        { title: "Project 2", url: "works/task2d.html" },
        { title: "Project 3", url: "works/Task3.html" },
        { title: "Project 4", url: "works/Task4.html" },
        { title: "Project 5", url: "works/Task5.html" },
        { title: "Project 6", url: "works/task8.html" },
        { title: "Project 7", url: "works/task9.html" },
        { title: "Project 8", url: "works/task10.html" },
        { title: "Project 9", url: "works/task11.html" },
        { title: "Project 10", url: "works/calculate sum.html" },
        { title: "Project 11", url: "works/vanish.html" },
        { title: "Project 12", url: "works/agecalculator.html" },
        { title: "Project 13", url: "works/checkout.html" },
        { title: "Project 14", url: "works/BSF.html" },
        { title: "Project 15", url: "works/student.html" },
        { title: "Project 16", url: "works/info.html" },
        { title: "Project 17", url: "works/midterm.html" },
    ];

    const navButtonsDiv = document.getElementById("nav_buttons");
    const contentFrame = document.getElementById("content_frame");
    const projectDropdown = document.getElementById("projectDropdown");

    // Toggle dropdown visibility
    projectDropdown.addEventListener("click", () => {
        navButtonsDiv.classList.toggle("show");
    });

    // Populate dropdown with projects
    projects.forEach(project => {
        let projectButton = document.createElement("button");
        projectButton.innerText = project.title;
        projectButton.className = "nav_item";

        projectButton.onclick = () => {
            contentFrame.src = project.url;
        };

        navButtonsDiv.appendChild(projectButton);
    });
});
