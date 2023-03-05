const button = document.querySelector("#check-button");
const msg = document.querySelector("#rem-content");


button.addEventListener("click", function displaycontent() {
    deleteButton();
    displayMsg();

});

function deleteButton() {
    button.style.display = "none";
}

function displayMsg() {
    msg.style.display = "block";
    msg.innerText = "Climate change can affect our health, ability to grow food, housing, safety and work. Some of us are already more vulnerable to climate impacts, such as people living in small island nations and other developing countries. Conditions like sea-level rise and saltwater intrusion have advanced to the point where whole communities have had to relocate, and protracted droughts are putting people at risk of famine. In the future, the number of “climate refugees” is expected to rise.";
}