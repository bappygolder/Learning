/*
This is empty on purpose! Your code to build the resume will go here.
*/

/*--------------------------------------------------
Flow Control
--------------------------------------------------*/

// all object declerations
var work = {
	"jobs" : [
		{"employer" : "oLab",
		 "title" : "Founder & CEO",
		 "location" : "Sydney, Australia",
		 "dates" : "Jan 1015 - Currnt",
		 "description" : "Working as the top dog of oLab. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
		{"employer" : "Advisible",
		 "title" : "Business Development Manager",
		 "location" : "Sydney, Australia",
		 "dates" : "Jan 2014 - Dec 2015",
		 "description" : "Worked as sales channel head. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
	]
};
var projects = {
	"all_projects"	: [
		{"title" : "Sprint List",
		 "date" : "Dec 2015 - Current",
		 "description" : "Sprint List is a simple app that helps with getting things done. You start by making a list of the most important things you think you need to get done before the end of the day. You challenge yourself by committing to finishing everything in the list by the before the end of the day. The list will remove all the items at midnight to help you get started with a fresh new empty list the next morning.",
		 "image" : "images/project1.png"},
		 {"title" : "oTask",
		 "date" : "2015",
		 "description" : "Lorem ipsum this is some dummy text: Worked as sales channel head. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		 "image" : "images/project2.png"}
	]
};
var bio = {
	"name" : "Bappy Golder",
	"role" : "Software Engineer",
	"welcomeMessage" : "Hi I'm Bappy & welcome to my online resume.",
	"contacts" : {
		"mobile" : "+61 (0) 428 770 086",
		"email" : "bups.co@gmail.com",
		"github" : "@BappyGolder",
		"twitter" : "@BappyGolder",
		"location" : "Sydney, Australia"
	},
	"skills" : ["Sketch", "HTML", "CSS", "JavaScript"]
	//"skills" : []
};
var eduction = {
	"schools" : [
		{"name" : "University of Tasmania",
		 "location" : "Tasmania",
		 "degree" : "Bachelor of Computing",
		 "major" : ["CompSci"],
		 "dates" : "2012-2015",
		 "url" : "#"
		 },
		 {"name" : "Certificate VI in Website Development",
		 "location" : "Adelaide, SA, Australia",
		 "degree" : "Cer VI",
		 "major" : ["WebDev"],
		 "dates" : "2011",
		 "url" : "#"
		 }
	],
	"onlineCourses " : [
		{"title" : "Front End Development",
		 "school" : "Treehouse",
		 "dates" : "2015",
		 "url" : "#"
		 },
		 {"title" : "JavaScript Basics",
		 "school" : "Udacity",
		 "dates" : "Current",
		 "url" : "#"
		 }
	]
};

//--------------------
//add work in the screen

//get work expriences
var displayWork = function(){
	"use strict";

	//get jobs array
	var workExp = work.jobs;

	for (var workIndex in workExp) {
		//check if the prpoerty exists
		if (workExp.hasOwnProperty(workIndex)){

			//add initial div first
			$("#workExperience").append(HTMLworkStart);

			//test
			//console.log(workExp[workIndex]);
			//console.log(workExp[workIndex].title);

			//update and show work employer and title
			var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[workIndex].employer);
				//test
				//console.log(formattedHTMLworkEmployer);

			var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", workExp[workIndex].title);
				//test
				//console.log(formattedHTMLworkEmployer + formattedHTMLworkTitle);

			//update work date
			var formattedHTMLworkDates = HTMLworkDates.replace("%data%", work.jobs[workIndex].dates);
				//test
				//console.log(formattedHTMLworkDates);

			//update work description
			var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", work.jobs[workIndex].description);
				//test
				//console.log(formattedHTMLworkDescription);

			//append details to HTML body
			$(".work-entry:last").append(formattedHTMLworkEmployer + formattedHTMLworkTitle);
			$(".work-entry.work-entry:last").append(formattedHTMLworkDates);
			$(".work-entry.work-entry:last").append(formattedHTMLworkDescription);

		} //end: if statement
	} //end: for loop

}; //end: function


//display work
displayWork();

//--------------------


//--------------------
//quiz: internationalize button

//add a button for internationlizing the name
$("#main").append(internationalizeButton);

//function to internationalize a name. (i.e: Bappy GOLDER)
function inName(){
	"use strict";

	var nameArray = bio.name.split(" ");

	//format first name
	nameArray[0] = nameArray[0].charAt(0).toUpperCase() + nameArray[0].slice(1);

	//test
	//console.log(nameArray[0]);

	//format last name
	nameArray[1] = nameArray[1].toUpperCase();

	//test
	//console.log(nameArray[1]);

	return nameArray.join(" ");
}

//test
console.log(inName());

//--------------------


//--------------------

projects.display = function(){
		
		for (var each in projects.all_projects) {
	
			"use strict";

			console.log(each);

			//add project section div to the body
			$("#projects:last").append(HTMLprojectStart);

			//update content and style for project title
			var project_title = HTMLprojectTitle.replace("%data%", projects.all_projects[each].title);
			//add title to project section
			$(".project-entry:last").append(project_title);

			//update content and style for project date
			var project_date = HTMLprojectDates.replace("%data%", projects.all_projects[each].date);
			//add title to project section
			$(".project-entry:last").append(project_date);

			//update content and style for project description
			var project_description = HTMLprojectDescription.replace("%data%", projects.all_projects[each].description);
			//add title to project section
			$(".project-entry:last").append(project_description);

			//update content and style for project image
			var project_image = HTMLprojectImage.replace("%data%", projects.all_projects[each].image);
			//add title to project section
			$(".project-entry:last").append(project_image);
		} //end: for each

}; //end: function


//displey projects on the resume
projects.display();

/*Logic:
For each in projects array
Do runt the above code to displey projects*/



//--------------------

/*--------------------------------------------------
end: Flow Control
--------------------------------------------------*/





/*--------------------------------------------------
Flow Control
--------------------------------------------------*/

//check to see if there is any skills in the bio object

if (bio.skills.length > 0) {
	//test
	//console.log("testing empty array object property");

	//show skills header
	$("#header").append(HTMLskillsStart);

	//show skills
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);

	formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);

	formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);

	formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);
}


//--------------------
//pracktice with while loop

var bappy = {};
bappy.job = "entrepreneur";

//start a business function

var start_a_venture = function (){
	"use strict";
	//console.log("Start a new buisness.");
};

//test function
//start_a_venture();

var biz_num = 0;
while(bappy.job === "entrepreneur"){
	start_a_venture();
	biz_num += 1;
	if (biz_num === 10){
		bappy.job = "ïnvestor";
	}
}

//print latest role
//console.log(bappy.job);

//end: pracktice with while loop
//--------------------


//--------------------
//practice for in loop
/*var newTestArr = {"BD" = "", "AU" = "", "EU" = "", "India" = "", "Russia" = ""};

for (var itemIndex in newTestArr) {
	if newTestArr.has
	console.log(newTestArr[itemIndex]);
}*/


//end: practice for in loop
//--------------------






/*--------------------------------------------------
end: Flow Control
--------------------------------------------------*/



//print name on the page
//$("#").append("Bappy Golder");

/*--------------------------------------------------
problem set 0
--------------------------------------------------*/

// Write Python code to print out how far light travels
// in centimeters in one nanosecond.  Use the variables
// defined below.

function print_speed_of_light_per_nano_sec(){
	"use strict";

	var speed_of_light_in_meters_per_sec = 299792458;
	var centimeters = 100;  							//1 meter = 100 cm
	var nanosecond = 1000000000;

	var speed_of_light_in_cm_per_sec = speed_of_light_in_meters_per_sec * centimeters;

	//test
	//console.log(speed_of_light_in_cm_per_sec);

	//calculating speed of light in one nanosecond
	var speed_of_light = speed_of_light_in_cm_per_sec / nanosecond;


	//test
	console.log(speed_of_light);

	//print result
	$("#").append(speed_of_light);

}

//print_speed_of_light_per_nano_sec();

/*--------------------------------------------------
end: problem set 0
--------------------------------------------------*/


/*--------------------------------------------------
Data Type
--------------------------------------------------*/

var awesomeThoughts1 = "I Bappy and I am awesome.";
//console.log(awesomeThoughts1);

//--------------------

//update string
var newAwesomeThoughts =
	awesomeThoughts1.replace("AWESOME", "FUN");

//print strings in console for test
/*console.log(awesomeThoughts1);
console.log(newAwesomeThoughts);*/

//add fun thoguhts to the page
//$("#").append(newAwesomeThoughts);


//--------------------

//define new veriables
var formattedName = HTMLheaderName.replace('%data%', 'Bappy Golder');
var formattedRole = HTMLheaderRole.replace('%data%', 'Software Architect');

//add values to the page
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//--------------------

//Using string methods, convert "audacity" to "Udacity".
//instructions: https://classroom.udacity.com/courses/ud804/lessons/1930528550/concepts/28859185580923

var s = "audacity";

var udacityizer = function(s) {
    "use strict";

	// Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!

	//remove the firest char of 's'
	s = s.charAt(1).toUpperCase()	//capitalize the first letter
		+ s.slice(2);				//add the rest of the string to the first letter

	//capitalize the first character:
    return s;
};

// Did your code work? The line below will tell you!
//console.log(udacityizer(s));

//arrays
var skills = ["UX Designer", "Front End Developer", "Front End Designer", "Sales Chapgion"];

//$("#").append(skills);

//access one item
//$("#").append(skills[0]);

//--------------------

var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.

    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];

    // Your code goes in here!

	//bring the eld array to the new one
	newArray = _array.slice();

	//remove the last item from given array
	last_item = newArray.pop();
	//console.log(last_item)

	//append last item to the newArray with
	newArray.push(last_item+=1);
	//console.log(newArray);

	//return the newArray
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
//console.log(incrementLastArrayElement(sampleArray));

//--------------------

//instructruction: https://classroom.udacity.com/courses/ud804/lessons/1930528550/concepts/23252185360923

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;

	// Your code goes here!
	//console.log(finalName);

	//get access to both names saperately
	var name_array = finalName.split(" ");

	//covert first name to lower case
	//name_array[0] = name_array[0];

	//convert the first name to appropriate case
	name_array[0] = name_array[0].charAt(0).toUpperCase()  		//convert the first letter to upper case
					+ name_array[0].slice(1).toLowerCase();		//convert the rest of the letters to lower case

	//convert the last name to all upper case
	name_array[1] = name_array[1].toUpperCase();

	//test
	//console.log(name_array);

	//update final name by joining the array by seperated by space
	finalName = name_array.join(" ");

    // Don't delete this line!
    return finalName;
}

// Did your code work? The line below will tell you!
//console.log(nameChanger(name));

//--------------------

//var bio = {
//		//"name" : "Bappy Golder",
//		//"role" : "The top dog - oLab",
//		/*contact : {
//			"phone" : "Ph: 8888888888",
//			"email"	: "e@e.com",
//			"twitter" : "@bappygolder",
//			"github" : "@bappygolder",
//			"location" : "sydney"
//		},*/
//		//"welcome_message" : "Hello I'm Bappy and I love making apps.",
//
//		"picture_URL" :
//			"https://raw.githubusercontent.com/bappygolder/LinkedIn-Profile-Photo/master/With%20Touch%20Up/Bappy%20Golder%20%40%20LinkedIn%20www.BappyGolder.com.jpg",
//
//		"skills" : [
//			"UX Designer", "Front End Developer", "Front End Designer", "Sales Chapgion"
//		]
//
//		//the properties of an object can also be defined with dot notation and with brackt notation.
//		//..practicing them below
//	};
//
//
//	//practie adding object properties using dot notation
//	bio.name = "Bappy Golder";
//	bio.welcome_message = "Hello I'm Bappy and I love making apps!",
//
//	//practice adding object properties using bracket notation
//	//..dreamweaver seems to suggest that it is better to use bracket notation
//	bio["role"] = "The top dog - oLab";
//	bio["contact"] = {
//		"phone" : "Ph: 8888888888",
//		"email"	: "e@e.com",
//		"twitter" : "@bappygolder",
//		"github" : "@bappygolder",
//		"location" : "sydney"
//	};

	//append all the objects in the page.
//	$("#").append(bio.name + "<br>");
//	$("#").append(bio.role + "<br>");
//	$("#").append(bio.contact.phone + "<br>");
//	$("#").append(bio.picture_URL + "<br>");
	//$("#").append(bio.welcome_message + "<br>");
	//$("#").append(bio.skills + "<br>");

	//object properties can also be accessed with two different notations.
	//..we used the dot notation above. Practice accessing properties using brcket notation below.
//	$("#").append(bio["welcome_message"] + "<br>");
//	$("#").append(bio["skills"] + "<br>");

//--------------------

	//Quiz: Practice with objects

	//create work object
//	var work = {};

	//add values to work object
//	work.current_job = "Cheif Operating Officer";
//	work.employer = "oLab";
//	work.years_worked = 2;
//	work.city = "Sydney";

	//test
//	console.log(work.current_job);
//	console.log(work.employer);
//	console.log(work.years_worked);
//	console.log(work.city);

//	var education = {};
//	education["school"] = "Udacity";
//	education["year"] = "2015";
//	education["city"] = "Launceston";

	//test
//	console.log(education["school"]);
//	console.log(education["year"]);
//	console.log(education["city"]);

	//append some details to the resume
//	$("#").append(work["current_job"] + "<br>");
//	$("#").append(education.school);

//--------------------

	//practice with JASON
	var education2 = {
		"courses" : [
			{
				"name" : "Intro. to computer science",
				"provider" : "Udacity",
				"complition_year" : "2014",
				"subject_area"	: ["CompSci", "Development"]
			},
			{
				"name" : "Front End Development",
				"provider" : "Treehouse",
				"complition_year" : "2015",
				"subject_area"	: ["CompSci"]
			}
		]
	};


/*--------------------------------------------------
end: Data Type
--------------------------------------------------*/
