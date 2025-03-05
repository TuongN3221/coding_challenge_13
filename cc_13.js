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

    const removeButton = document.createElement("button")
    removeButton.textContent = "Remove"
    removeButton.setAttribute("class", "remove-button")
    removeButton.addEventListener("click", () => {
    card.remove();

});
// Task 4
document.querySelectorAll(".employee-card").forEach(card => {
    card.addEventListener("click", (event) =>{
        console.log("An Employee card has been clicked")
        event.stopPropagation()
    })
})
    card.appendChild(cardHeading)
    card.appendChild(paragraphPosition)
    card.appendChild(removeButton)

    const employeeContainer = document.getElementById("employeeContainer")
    employeeContainer.appendChild(card); 
}

//Employee
employeeCard("The Joker", "Founder")
employeeCard("Harley Quinn", "Co-Founder")
employeeCard("Oswald Cobblepot", "Chief Financial Officer")

// Task 3
function highlightEmployee() {
    const getEmployeeCard = document.querySelectorAll(".employee-card")
    const employeeCardArray = Array.from(getEmployeeCard)

    employeeCardArray.forEach((card) => {
        card.style.backgroundColor = `lightblue`;
        card.style.border = `1px solid blue`;
        card.style.padding = '10px';
    })
}
highlightEmployee();


