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
})
    card.appendChild(cardHeading)
    card.appendChild(paragraphPosition)
    card.appendChild(removeButton)

    const employeeContainer = document.getElementById("employeeContainer")
    employeeContainer.appendChild(card);
}
//Example
employeeCard("John Doe", "Founder")
employeeCard("Jane Doe", "Writer")