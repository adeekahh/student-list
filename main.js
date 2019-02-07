//JSON
const myTemplate = document.querySelector("#myTemplate").content;
const student_name = document.querySelector(".student_name");

var student = document.querySelector(".student");



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

    

    if(student.house == "Hufflepuff"){
      copy.querySelector(".student").classList.add("hufflepuff");
    } else if (student.house == "Gryffindor"){
      copy.querySelector(".student").classList.add("gryffindor");
    } else if (student.house == "Ravenclaw"){
      copy.querySelector(".student").classList.add("ravenclaw");
    } else if (student.house == "Slytherin"){
      copy.querySelector(".student").classList.add("sltyherin");
    }
    
    
    document.querySelector(".student-list").appendChild(copy);

}
