// generate syllabus url
const url = window.location.href;
const courseInfo = url.split("/")[5];
const year = `20${courseInfo.slice(0, 2)}`;
const courseId = courseInfo.slice(3);
const syllabusURL = `https://tiglon.jim.u-ryukyu.ac.jp/portal/Public/Syllabus/DetailMain.aspx?lct_year=${year}&lct_cd=${courseId}`;
console.log("syllabusURL: ", syllabusURL);
