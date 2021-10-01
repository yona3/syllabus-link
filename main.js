// generate syllabus url
const url = window.location.href;
const courseInfo = url.split("/")[5];
const year = `20${courseInfo.slice(0, 2)}`;
const courseId = courseInfo.slice(3);
const syllabusURL = `https://tiglon.jim.u-ryukyu.ac.jp/portal/Public/Syllabus/DetailMain.aspx?lct_year=${year}&lct_cd=${courseId}`;
console.log("syllabusURL: ", syllabusURL);

// get target element
const menu = document.getElementById("menu");
const targetNav = menu.children[2];

// create element
const li = document.createElement("li");
const a = document.createElement("a");
a.textContent = "シラバス";
a.href = syllabusURL;
a.target = "_blank";

li.appendChild(a);

// add element
targetNav.appendChild(li);
