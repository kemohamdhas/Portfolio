// Selecting popup and overlay elements
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popupbox");
var addpopupbutton = document.getElementById("popup-button");

// Show popup on "+" button click
addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Hide popup on "Cancel" click
var cancelbutton = document.getElementById("cancel-input");
cancelbutton.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Get input fields
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("author-name-input");
var bookdescriptioninput = document.getElementById("book-description-input");

// Add book
addbook.addEventListener("click", function (event) {
    event.preventDefault();

    // Create book card
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdescriptioninput.value}</p>
        <button onclick="deletebook(event)">delete</button>
    `;

    container.appendChild(div);

    // Hide popup and clear inputs
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";
});

// Delete book
function deletebook(event) {
    event.target.parentElement.remove();
}
