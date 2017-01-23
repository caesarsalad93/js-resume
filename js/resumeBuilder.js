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
            images: 'images/mockup-demo-mobile.jpg'
        },
    ]
};
var bio = {
    name: 'Alexander Huynh',
    role: 'Front-end Developer',
    welcomeMessage: 'Hello World!',
    biopic: 'images/panda-3.jpg',
    contacts: {
        number: '555 555 5555',
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
        graduationDate: '2013-2017',
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

bio.displayHeader = function() {
    var formattedHeaderName = HTMLheaderName.replace('%data%', bio.name);
    var formattedHeaderRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

    $("#header").prepend(formattedHeaderRole)
        .prepend(formattedHeaderName)
        .append(formattedBioPic)
        .append(formattedMsg);
};

bio.displayContacts = function() {
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.number);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

    $("#topContacts, #footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

};

bio.displaySkills = function() {
    $("#header").append(HTMLskillsStart);

    this.skills.forEach(function(skill, index) {
        var formattedSkill = HTMLskills.replace('%data%', skill);
        $("#skills:last").append(formattedSkill);
    }, bio);
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace('%data%', job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
        $(".work-entry:last").append(formattedDescription);

        var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
        $(".work-entry:last").append(formattedLocation);
    });
};

projects.display = function() {
    this.projects.forEach(function(project, index) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace('%data%', this.projects[index].title);
        var formattedDates = HTMLprojectDates.replace('%data%', this.projects[index].dates);
        var formattedDescription = HTMLprojectDescription.replace('%data%', this.projects[index].description);
        var formattedImage = HTMLprojectImage.replace('%data%', this.projects[index].images);

        $(".project-entry:last").append(formattedTitle).append(formattedDates).append(formattedDescription).append(formattedImage);
    }, projects);

};

education.displaySchools = function() {
    this.schools.forEach(function(school, index) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLschoolName.replace('%data%', this.schools[index].name);
        $(".education-entry:last").append(formattedTitle);
        //location
        var formattedLocation = HTMLschoolLocation.replace('%data%', this.schools[index].location);
        $(".education-entry:last").append(formattedLocation);
        //graduation
        var formattedDate = HTMLschoolDates.replace('%data%', this.schools[index].graduationDate);
        $(".education-entry:last").append(formattedDate);
        //major
        var formattedMajor = HTMLschoolMajor.replace('%data%', this.schools[index].majors[0]);
        $(".education-entry:last").append(formattedMajor);

        //degree
        var formattedDegree = HTMLschoolDegree.replace('%data%', this.schools[index].degree);
        $(".education-entry:last").append(formattedDegree);

    }, education);
};

education.displayOnlineCourses = function() {
    //Online Classes Title
    $("#education").append(HTMLonlineClasses);
    this.onlineCourses.forEach(function(course, index) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace('%data%', this.onlineCourses[index].title);

        var formattedSchool = HTMLonlineSchool.replace('%data%', this.onlineCourses[index].school);

        var formattedDate = HTMLonlineDates.replace('%data%', this.onlineCourses[index].dates);

        var formattedURL = HTMLonlineURL.replace('%data', this.onlineCourses[index].url);

        $(".education-entry:last").append(formattedTitle).append(formattedSchool).append(formattedDate).append(formattedURL);
    }, education);
}

bio.displayHeader();
bio.displayContacts();
bio.displaySkills();
work.display();
projects.display();
education.displaySchools();
education.displayOnlineCourses();