var bio = {
		"name": "Yusuf M. Matcheswala",
		"role": "Founder/CTO",
		"contact": {
			"email": "ymatcheswala@gmail.com",
			"mobile": "919-538-4636",
			"twitter": "@ymatcheswala",
			"github": "matronix"
		},
		"pic_URL": "https://lh6.googleusercontent.com/-CIcLGI6bIgs/AAAAAAAAAAI/AAAAAAAAAN0/A9h-OexZHLM/photo.jpg",
		"msg": "Welcome to my resume page. Please fee free to look around and see what I can do for you to achieve your goals",
		"skills": ["Web Apps", "business solutions", "websites"]
		
		
};



formattedName = HTMLheaderName.replace("%data%", bio.name);
formattedRole = HTMLheaderRole.replace("%data%", bio.role);
formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
formattedGit = HTMLgithub.replace("%data%", bio.contact.github);
formattedPic = HTMLbioPic.replace("%data%", bio.pic_URL);
formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.msg);




$("#header").prepend(formattedMsg);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPic);

$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGit);

if(bio.skills===undefined){
  ;	
}
else if(bio.skills.length>0){
	formattedSkills0 = HTMLskills.replace("%data%", bio.skills[0]);
	formattedSkills1 = HTMLskills.replace("%data%", bio.skills[1]);
	formattedSkills2 = HTMLskills.replace("%data%", bio.skills[2]);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills0);
$("#skills").append(formattedSkills1);
$("#skills").append(formattedSkills2);
}


var work = {
		"job1":{"position": "CTO",
			"name": "Labornique Inc.",
			"years": "8",
			"dates": "2007 to 2016",
			"location": "Raleigh, NC",
			"description": "Developed various web-app technologies and filed patents to make automated websites for targetted industries"},
			
			"job2":{
				"position": "Founder",
				"name": "Matronix Inc.",
				"years": "4",
				"dates": "2004 to 2007",
				"location": "Los Angeles, CA",
				"description": "Founded a company that develops hardware to connect apps to devices and IOT"
					
			},
			
			"job3":{"position": "Head of R&D",
			"name": "Cypress Semiconductor INC.",
			"years": "2",
			"dates": "2002 to 2004",
			"location": "Lexington, KY",
			"description": "Worked on various semiconductor technologies"}
		
};


var displayWork = function(){
	for(var i in work){
		if(work.hasOwnProperty(i)){var employer = HTMLworkEmployer.replace("%data%", work[i].name);
		var title = HTMLworkTitle.replace("%data%", work[i].position);
		var dates = HTMLworkDates.replace("%data%", work[i].dates);
		var city = HTMLworkLocation.replace("%data%", work[i].location);
		var description = HTMLworkDescription.replace("%data%", work[i].description);
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(employer+title);
		$(".work-entry:last").append(dates);
		$(".work-entry:last").append(city);
		$(".work-entry:last").append(description);
		}
	}
}

displayWork();




var projects = {
		"projects":{
			"project1":{"title": "Connecting skilled people with those who need them",
				"date": "Jan 2014 - Dec 2016",
				"description": "We have mastered the technology of connecting people...specificlly connecting skilled people with those who need those skills"},
	 
	        "project2":{"title": "Implementing a reverse bid system",
		        "date": "Jan 2007 - Dec 2013",
		        "description": "Bid better than eBay."}
		}
				

};


projects.display = function(){
	for(var project in projects.projects){
		if(projects.projects.hasOwnProperty(project)){
			$("#projects").append(HTMLprojectStart);
			var title = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(title);
			var projDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
			$(".project-entry:last").append(projDates);
			var projDescr = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(projDescr);
			
		}
	}
	
}

projects.display();




var education = {
		"univUG": {
			"name": "University of Mumbai, Mumbai, India",
			"years": "4",
			"degree": "BSEE",
			"city": "Mumbai, India",
			"graduated": "1997"
		},

"univPG": {
	"name": "University of Kentucky",
	"years": "2",
	"degree": "MSEE",
	"city": "Lexington, KY",
	"graduated": "1999"
}
};




var schoolName = HTMLschoolName.replace("%data%", education.univPG.name);
schoolName = schoolName.replace("#", "http://www.uky.edu");
var degree = HTMLschoolDegree.replace("%data%", education.univPG.degree);
$("#education").append(HTMLschoolStart);
$(".education-entry").append(schoolName+degree);
var gradDate = HTMLschoolDates.replace("%data%", education.univPG.graduated);
$(".education-entry").append(gradDate);
var schoolLoc = HTMLschoolLocation.replace("%data%", education.univPG.city);
$(".education-entry").append(schoolLoc);
var major = HTMLschoolMajor.replace("%data%", education.univPG.degree);
$(".education-entry").append(major);


$("#main").append(internationalizeButton);




