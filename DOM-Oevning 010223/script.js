// const header = document.getElementById("header1");

// header.innerText = "Heyo";

// const paragraph = document.getElementById("paragraph");
// paragraph.innerText =
// 	"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius distinctio voluptate et accusamus magni mollitia nesciunt unde sit sunt animi error odit, dignissimos totam quos, provident maiores blanditiis cum harum.";

// const footerElement = document.getElementById("footerElement");
// footerElement.innerHTML = `<ul>
//     <li> <a href="https://www.google.com">gooHoogle.com</a> </li>
//     <li> <a href="https://www.w3schools.com">w3:an</a> </li>
//     <li> <a href="https://www.youtube.com">dutuben.com</a> </li>
// </ul>`;

// const myDivs = document.getElementsByClassName("myClass");

// for (const div of myDivs) {
// 	for (const paragraph of div.children) {
// 		paragraph.innerText = "Ändrad text!";
// 	}
// }

const arr = ["katt", "corgi", "orm", "skäggagam", "hund", "råtta"];

const petDiv = document.createElement("div");

document.body.appendChild(petDiv);
let listVisible = false;

function addList() {
	console.log(listVisible);
	if (listVisible) {
		const ol = document.getElementById("animul");
		ol.remove();
	} else {
		const petList = document.createElement("ol");
		petList.id = "animul";

		for (let i = 0; i < arr.length; i++) {
			const element = arr[i];
			const tempListItem = document.createElement("li");
			tempListItem.innerText = element;
			petList.appendChild(tempListItem);
		}

		petDiv.appendChild(petList);
	}

	listVisible = !listVisible;
}

function headerClick(element) {
	element.style.color = "red";
}

// function mouseOverLi() {
// 	console.log("shoopdawoop");
// }
