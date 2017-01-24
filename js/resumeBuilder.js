/*
This file builds out the resume.
There is a work, projects, bio, and education object that each contains its respective data.
Each object has a corresponding display function, e.g work.display();
The display functions use help from the helper.js file to reformat the data so it is suitable for the HTML, then adds it to a designated element node, by ID.

EXAMPLE:
var HTMLheaderName = '<h1 id="name">%data%</h1>'; FROM helper.js file
var formattedHeaderName = HTMLheaderName.replace(data, bio.name);
    formattedHeaderName === '<h1 id="name">bio.name</h1>'
    
    work.display() then appends formattedHeaderName to $("#header")
*/
var work = {
    jobs: [{
            employer: 'Mikuni',
            title: 'Sushi Chef',
            location: 'Davis, California',
            dates: 'September 2015 – August 2016',
            description: 'Worked as a team with sushi chefs, servers, managers, and kitchen staff to deliver high quality service.'
        },
        {
            employer: 'Associated Students, University of California, Davis',
            title: 'Election Committee Marketing Assistant',
            location: 'Davis, California',
            dates: 'October 2015 – March 2016',
            description: 'Handled prize packages for our “Let Your Voice Be Heard” marketing campaign. Lead tabling events to increase election awareness. Collaborated with media department to determine message and platform choices. Combined efforts lead to an increased voter turnout compared to the previous year'
        }
    ]
};

var projects = {
    projects: [{
        title: 'Portfolio Mockup',
        dates: '1/1/2017',
        description: 'Stylized a portfolio webpage to look similar to a provided mockup',
        images: ['images/mockup-demo-mobile.jpg',]
    }, ]
};
var bio = {
    name: 'Alexander Huynh',
    role: 'Front-end Developer',
    welcomeMessage: 'Hello World!',
    biopic: 'images/panda-3.jpg',
    contacts: {
        mobile: '555 555 5555',
        email: 'fakeEmail@gmail.com',
        github: 'caesarsalad93',
        location: 'San Diego, California'
    },
    skills: ['Hungry to learn', 'Team player', 'Great communication']
};

var education = {
    schools: [{
        name: 'University of California, Davis',
        location: 'Davis, California',
        dates: '2013-2017',
        url: '',
        majors: ['Economics'],
        degree: 'B.A.'

    }],
    onlineCourses: [{
        title: 'Udacity Front-End Nanodegree',
        school: 'Udacity',
        dates: 'In progress',
        url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }]
};

var data = '%data%'
bio.displayHeader = function() {
    var formattedHeaderName = HTMLheaderName.replace(data, bio.name);
    var formattedHeaderRole = HTMLheaderRole.replace(data, bio.role);
    var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
    var formattedMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

    $("#header").prepend(formattedHeaderRole)
        .prepend(formattedHeaderName)
        .append(formattedBioPic)
        .append(formattedMsg);
};

bio.displayContacts = function() {
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);

    $("#topContacts, #footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

};

bio.displaySkills = function() {
    $("#header").append(HTMLskillsStart);

    this.skills.forEach(function(skill, index) {
        var formattedSkill = HTMLskills.replace(data, skill);
        $("#skills:last").append(formattedSkill);
    }, bio);
};

bio.display = function() {
    bio.displayHeader();
    bio.displayContacts();
    bio.displaySkills();
}

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
        var formattedTitle = HTMLworkTitle.replace(data, job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace(data, job.dates);
        var formattedDescription = HTMLworkDescription.replace(data, job.description);
        var formattedLocation = HTMLworkLocation.replace(data, job.location);
        
        $(".work-entry:last")
            .append(formattedEmployerTitle)
            .append(formattedDates)
            .append(formattedDescription)
            .append(formattedLocation);
    });
};

projects.display = function() {
    this.projects.forEach(function(project, index) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace(data, this.projects[index].title);
        var formattedDates = HTMLprojectDates.replace(data, this.projects[index].dates);
        var formattedDescription = HTMLprojectDescription.replace(data, this.projects[index].description);
        var formattedImages = this.projects[index].images.map(function(value, index) {
            return (HTMLprojectImage.replace(data, value));
        });

        $(".project-entry:last")
            .append(formattedTitle)
            .append(formattedDates)
            .append(formattedDescription)
            .append(formattedImages);
    }, projects);

};

education.displaySchools = function() {
    this.schools.forEach(function(school, index) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLschoolName.replace(data, this.schools[index].name);
        var formattedLocation = HTMLschoolLocation.replace(data, this.schools[index].location);
        var formattedDate = HTMLschoolDates.replace(data, this.schools[index].dates);
        var formattedMajor = HTMLschoolMajor.replace(data, this.schools[index].majors[0]);
        var formattedDegree = HTMLschoolDegree.replace(data, this.schools[index].degree);

        $(".education-entry:last")
            .append(formattedTitle)
            .append(formattedLocation)
            .append(formattedDate)
            .append(formattedMajor)       
            .append(formattedDegree);  
        
    }, education);
};

education.displayOnlineCourses = function() {
    //Online Classes Title
    $("#education").append(HTMLonlineClasses);
    this.onlineCourses.forEach(function(course, index) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace(data, this.onlineCourses[index].title);
        var formattedSchool = HTMLonlineSchool.replace(data, this.onlineCourses[index].school);
        var formattedDate = HTMLonlineDates.replace(data, this.onlineCourses[index].dates);
        var formattedURL = HTMLonlineURL.replace(data, this.onlineCourses[index].url);

        $(".education-entry:last")
            .append(formattedTitle)
            .append(formattedSchool)
            .append(formattedDate)
            .append(formattedURL);
    }, education);
};

education.display = function() {
    education.displaySchools();
    education.displayOnlineCourses();
}

bio.display();
work.display();
projects.display();
education.display();