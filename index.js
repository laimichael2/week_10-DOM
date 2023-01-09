let submitButton = document.getElementById("btn");
let inputField = document.getElementById("user-input");
let parentDiv = document.getElementById("read-data");

//create a function for form submission
function submitForm() {
    console.log(parentDiv);
    //get the value of the input field
    let text = inputField.value;
    console.log(text);
    //create a new paragraph
    let newParagraph = document.createElement("p");
    //change the innerHTML of the new div to the input value
    newParagraph.innerHTML = text;
    console.log(newParagraph);
    //add the new div to the parent div
    parentDiv.appendChild(newParagraph);
    //clear the input field
    inputField.value = "";
    }

    submitButton.addEventListener("click", submitForm);