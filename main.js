//JSON
const myTemplate = document.querySelector("#myTemplate").content;
const student_name = document.querySelector(".student_name");

//console.log(student_name);

//console.log(myTemplate);

function getStudents() {
  fetch("http://petlatkea.dk/2019/students1991.json")
    .then(res => res.json())
    .then(showStudents);
}

getStudents();


function showStudents(studentList) {
  studentList.forEach(showSingleStudent);
  //console.log(studentList);
  //console.log(document.querySelector(".student-name"));
}

function showSingleStudent(student){
    const copy = myTemplate.cloneNode(true);
    
    copy.querySelector(".student_name").innerHTML = student.fullname;
    copy.querySelector(".student_house").innerHTML = student.house;
    
    document.querySelector(".student-list").appendChild(copy);

}