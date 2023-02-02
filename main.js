// 親要素
const targetEl = (() => {
  const menu = document.getElementById("menu");
  return menu.children[2];
})();

// シラバスのURL生成
const syllabusURL = (() => {
  const url = window.location.href;
  const courseInfo = url.split("/")[5];
  const year = `20${courseInfo.slice(0, 2)}`;
  const courseId = courseInfo.slice(3);
  return `https://tiglon.jim.u-ryukyu.ac.jp/portal/Public/Syllabus/DetailMain.aspx?lct_year=${year}&lct_cd=${courseId}`;
})();
console.log("syllabusURL: ", syllabusURL);

// ボタンの生成
const syllabusButton = (() => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = "シラバス";
  a.href = syllabusURL;
  a.target = "_blank";
  li.appendChild(a);
  return li;
})();

// ボタンの追加
targetEl.appendChild(syllabusButton);
