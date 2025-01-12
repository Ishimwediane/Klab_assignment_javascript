const Projects=[
    {
        Name: "Air pollution monitoring",
        Description: "IOT project for monitoring gases,temperature and humidity",
        TechnologyUsed: ["IOT"],
        Year:2024
    },
    {
        Name: "club management",
        Description: "Backend Api for managing club in university",
        TechnologyUsed: ["Java Spring Boot"],
        Year:2024
    },
    {
        Name: "Portfolio",
        Description: "A personal portfolio website",
        TechnologyUsed: ["HTML","CSS","JAVASCRIPT"],
        Year:2024
    },
]
Projects.map(project => {
    console.log(`Project name : ${project.Name}`);
    console.log(`Description : ${project.Description}`);
    console.log(`TechnologyUsed : ${project.TechnologyUsed}`);
    console.log(`Year : ${project.Year}`);
    console.log('-----------------------------------------------------------------------------');
});