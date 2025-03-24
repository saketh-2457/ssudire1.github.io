document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { title: "Project 1", url: "Project/works/task2.html" },
        { title: "Project 2", url: "Project/works/task2d.html" },
        { title: "Project 3", url: "Project/works/Task3.html" },
        { title: "Project 4", url: "Project/works/Task4.html" },
        { title: "Project 5", url: "project/works/Task5.html" },
        { title: "Project 6", url: "Project/works/task8.html" },
        { title: "Project 7", url: "Project/works/task9.html" },
        { title: "Project 8", url: "Project/works/task10.html" },
        { title: "Project 9", url: "Project/works/task11.html" },
        { title: "Project 10", url: "Project/works/calculate sum.html" },
        { title: "Project 11", url: "Project/works/vanish.html" },
        { title: "Project 12", url: "Project/works/agecalculator.html" },
        { title: "Project 13", url: "Project/works/checkout.html" },
        { title: "Project 14", url: "Project/works/BSF.html" },
        { title: "Project 15", url: "Project/works/student.html" },
        { title: "Project 16", url: "Projectworks/info.html" },
        { title: "Project 17", url: "Project/works/midterm.html" },




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
