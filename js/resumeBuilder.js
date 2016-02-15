/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*$("#main").append("YUSUF MATCHESWALA");

var awesomeThoughts = "I am YUSUF and I am awesome!!";

console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("awesome", "fun");

console.log(funThoughts);

$("#main").append("<p>"+funThoughts+"</p>");

var formattedName;
var formattedRole;

formattedName = HTMLheaderName.replace("%data%", "Yusuf Matcheswala");
formattedRole = HTMLheaderRole.replace("%data%", "Founder/CEO");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);*/

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


/*$("#header").prepend(formattedSkills);
$("#header").prepend(formattedMsg);
$("#header").prepend(formattedEmail);*/
$("#header").prepend(formattedMsg);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPic);

$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGit);
/*$("#topContacts").append(formattedMsg);
$("#topContacts").append(formattedSkills);*/

$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills2);
$("#header").append(formattedSkills1);
$("#header").append(formattedSkills0);








