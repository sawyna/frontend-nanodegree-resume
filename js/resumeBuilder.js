String.prototype.replaceData = function(str) {
    return this.replace("%data%", str);
}

var bio = {
  	"name": "Yaswanth Kumar",
  	"role": "Software Engineer",
  	"contacts": {
  		"email": "yash27422@gmail.com",
        "mobile": "8439870711",
        "github": "https://github.com/sawyna",
        "twitter": "@yash27422",
        "location": "San Francisco"
  	},
    "welcomeMessage": "Hey this is my Online Resume",
  	"biopic": "images/biopic.png",
  	"skills": ["Java", "Spring", "MySQL", "JavaScript"],
    "display": function() {
        $("#header").prepend(HTMLbioPic.replaceData(this.biopic));
        $("#header").prepend(HTMLheaderRole.replaceData(this.role));
        $("#header").prepend(HTMLheaderName.replaceData(this.name));

        $("#topContacts").append(HTMLmobile.replaceData(this.contacts.mobile));
        $("#topContacts").append(HTMLemail.replaceData(this.contacts.email));
        $("#topContacts").append(HTMLgithub.replaceData(this.contacts.github));
        $("#topContacts").append(HTMLlocation.replaceData(this.contacts.location));
        $("#header").append(HTMLwelcomeMsg.replaceData(this.welcomeMessage));
        if(this.skills !== undefined && this.skills.length !== 0) {
          $("#header").append(HTMLskillsStart);
          for(var i = 0; i < this.skills.length; i++) {
            $("#header").append(HTMLskills.replaceData(this.skills[i]));
          }
        }
      }
  };

  var work = {
    "jobs": [
      {
        "title": "Software Engineer II",
        "employer": "WalmartLabs",
        "location": "Bangalore",
        "dates": "2015",
        "description": "Works on java and enterprise frameworks like spring"
      }
    ],
    "display": function() {
        var workList = this.jobs;
        for(var i = 0; i < workList.length; i++) {
          $("#workExperience").append(HTMLworkStart);
          $(".work-entry:last").append(HTMLworkEmployer.replaceData(workList[i].employer) + HTMLworkTitle.replaceData(workList[i].title));
          $(".work-entry:last").append(HTMLworkDates.replaceData(workList[i].dates));
          $(".work-entry:last").append(HTMLworkLocation.replaceData(workList[i].location));
          $(".work-entry:last").append(HTMLworkDescription.replaceData(workList[i].description));
        }
    }
  }

  var education = {
    "schools": [
      {
        "name": "NRI",
        "degree": "Intermediate",
        "dates": "2010",
        "major": "NA",
        "location": "Guntur",
        "url": "www.google.com"
      },

      {
        "name": "IITR",
        "degree": "Graduate",
        "dates": "2013",
        "location": "Roorkee",
        "major": "Electronics and Communication",
        "url": "www.iitr.ac.in"
      }
    ],
    "onlineCourses": [
        {
            "title": "Operating Systems",
            "school": "Udacity",
            "date": "2016",
            "url": "https://classroom.udacity.com/courses/ud923"
        },
        {
            "title": "Fundamentals of Git",
            "school": "Udacity",
            "date": "2015",
            "url": "https://classroom.udacity.com/courses/ud775"
        }
    ],
    "display": function() {
        var list = this.schools;
        for(var i = 0; i < list.length; i++) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLschoolName.replaceData(list[i].name) + HTMLschoolDegree.replaceData(list[i].degree));
            $(".education-entry:last").append(HTMLschoolLocation.replaceData(list[i].location));
            $(".education-entry:last").append(HTMLschoolDates.replaceData(list[i].dates));
            $(".education-entry:last").append(HTMLschoolMajor.replaceData(list[i].major));
        }
        list = this.onlineCourses;
        $("#education").append(HTMLonlineClasses);
        for(var i = 0; i < list.length; i++) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineTitle.replaceData(list[i].title) + HTMLonlineSchool.replaceData(list[i].school));
            $(".education-entry:last").append(HTMLonlineDates.replaceData(list[i].date));
            $(".education-entry:last").append(HTMLonlineURL.replaceData(list[i].url));
        }
      }
  };


  var projects = {
    "projectList": [
        {
          "title": "PINTS",
          "dates": "2016",
          "description": "Partner Integration System",
          "images": ["images/project1-1.gif", 
                    "images/project1-2.jpg"]
        },
        {
          "title": "SellerOnboarding",
          "dates": "Feb 2015 - Present",
          "description": "Back end services for Sellers to onboard into walmart system",
          "images": ["images/project2-1.jpg"]
        }
    ],
    "display": function() {
        var list = this.projectList;
        for(var i = 0; i < list.length; i++) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replaceData(list[i].title));
            $(".project-entry:last").append(HTMLprojectDates.replaceData(list[i].dates));
            $(".project-entry:last").append(HTMLprojectDescription.replaceData(list[i].description));
            for(var j = 0; j < list[i].images.length; j++) {
                $(".project-entry:last").append(HTMLprojectImage.replaceData(list[i].images[j]));
            }
        }
      }
  };

  bio.display();
  projects.display();
  work.display();
  education.display();


  $("#mapDiv").append(googleMap);

  var inName = function(name){
    name = name.trim();
    var names = name.split(" ");
    if(names.length === 2) {
      return names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase() + " " + names[1].toUpperCase();
    }
    else {
      console.log("Not a proper name");
      return name;
    }
  };