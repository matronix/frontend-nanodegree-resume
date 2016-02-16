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
formattedSkills0 = HTMLskills.replace("%data%", bio.skills[0]);
formattedSkills1 = HTMLskills.replace("%data%", bio.skills[1]);
formattedSkills2 = HTMLskills.replace("%data%", bio.skills[2]);



$("#header").prepend(formattedMsg);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPic);

$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGit);


$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills0);
$("#skills").append(formattedSkills1);
$("#skills").append(formattedSkills2);


var work = {
		"position": "CTO",
		"name": "Labornique Inc.",
		"years": "14"		
};

work.city = "Raleigh, NC";

/*var employer = HTMLworkEmployer.replace("%data%", work.name);
var title = HTMLworkTitle.replace("%data%", work["position"]);
$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(employer+title);*/

var projects = {
		"title": "Connecting skilled people with those who need them",
		"date": "Jan 2014 - Dec 2016",
		"description": "We have mastered the technology of connecting people...specificlly connecting skilled people with those who need those skills"
};

$("#projects").append(HTMLprojectStart);
var title = HTMLprojectTitle.replace("%data%", projects.title);
$(".project-entry").append(title);
var projDates = HTMLprojectDates.replace("%data%", projects.date);
$(".project-entry").append(projDates);
var projDescr = HTMLprojectDescription.replace("%data%", projects.description);
$(".project-entry").append(projDescr);


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






