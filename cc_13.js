// Task 2
function employeeCard(name, position) {
    //Create employee card
    const card = document.createElement("div");
    card.setAttribute("class", "employee-card");

    //Creates the heading containing employee name
    const cardHeading = document.createElement("h2")
    cardHeading.textContent = name;

    const paragraphPosition = document.createElement("p")
    paragraphPosition.textContent = position;
    // Creates Remove Button
    const removeButton = document.createElement("button")
    removeButton.textContent = "Remove"
    removeButton.setAttribute("class", "remove-button")
    removeButton.addEventListener("click", () => {
        //Removes the employee card on click
    card.remove();
});
    // Task 5 - Creates Edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.setAttribute("class", "edit-button");
    editButton.addEventListener("click", () =>{
        // Starts editing employee details
        startEdit(card, cardHeading, paragraphPosition)
});

// Task 4
document.querySelectorAll(".employee-card").forEach(card => {
    card.addEventListener("dblclick", (event) =>{
        // Logs employee card interaction from double click into console
        console.log("An Employee card has been clicked")
        event.stopPropagation()
    })
})
    card.appendChild(cardHeading)
    card.appendChild(paragraphPosition)
    card.appendChild(removeButton)
    card.appendChild(editButton)

    const employeeContainer = document.getElementById("employeeContainer")
    employeeContainer.appendChild(card); 
}

// Task 5 - Function to edit details
function startEdit(card, nameElement, positionElement) {
    const name = nameElement.textContent;
    const position = positionElement.textContent

    //Create input field
    const nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.value = name;
    
    const positionInput = document.createElement("input")
    positionInput.type = "text"
    positionInput.value = position;

    //Create save button
    const saveButton = document.createElement("button")
    saveButton.textContent = "Save"
    saveButton.addEventListener("click", () =>{
        saveEmployeeDetails(card, nameElement, positionElement, nameInput, positionInput)
    })
    //Replace static text with input field
    nameElement.replaceWith(nameInput)
    positionElement.replaceWith(positionInput)
    card.querySelector(".edit-button").replaceWith(saveButton);
}

// Task 5 - Save employeee details
function saveEmployeeDetails(card, nameElement, positionElement, nameInput, positionInput) {
    // Gets updated employee information
    const updatedName = nameInput.value;
    const updatedPosition = positionInput.value;
    //Allows employee to be updated
    nameElement.textContent = updatedName;
    positionElement.textContent = updatedPosition;
    //Replaces input fields with static text
    nameInput.replaceWith(nameElement);
    positionInput.replaceWith(positionElement);

    // Creates Edit Button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.setAttribute("class", "edit-button");
    editButton.addEventListener("click", () =>{
        startEdit(card, nameElement, positionElement)
    });
    card.querySelector("edit-button").replaceWith(editButton)
}


//Employee
employeeCard("The Joker", "Founder")
employeeCard("Harley Quinn", "Co-Founder")
employeeCard("Oswald Cobblepot", "Chief Financial Officer")

// Task 3
function highlightEmployee() {
    //Gets all employee cards
    const getEmployeeCard = document.querySelectorAll(".employee-card")
    const employeeCardArray = Array.from(getEmployeeCard)
    // Stylizes each employee card
    employeeCardArray.forEach((card) => {
        card.style.backgroundColor = `lightblue`;
        card.style.border = `1px solid blue`;
        card.style.padding = '10px';
    })
}
highlightEmployee();


