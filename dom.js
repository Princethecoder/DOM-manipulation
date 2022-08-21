//TODO:activity 2 session-4 dom manipulation
/* function searchPerson(elemid, name) {
  let getList = document.getElementById(elemid);
  let listForm = getList.getElementsByTagName("li");
  let list = Array.from(listForm);
  for (let i = 0; i < list.length; i++) {
    if (list[i].textContent === name) {
      return true;
    }
  }
  return false;
}

console.log(searchPerson("names", "Crio.Do"));
 */

//TODO:activity-3 session-4 dom manipulation
/* function updateCard(elem, name, role, bio) {
  elemElement.getElementsByTagName("h1")[0].textContent = name;
  elemElement.getElementsByTagName("h3")[0].textContent = role;
  elemElement.getElementsByTagName("p")[0].textContent = bio;
}

const elemElement = document.getElementById("card");

updateCard(elemElement, "prince", "merndeveloper", "best in coding");
 */

let createElem = document.createElement("p");
createElem.textContent = "hello this is para created using create element";

document.getElementById("card").append(createElem);
