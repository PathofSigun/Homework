// -------------------- DOM - START --------------------
let listDOM = document.querySelector("#list");
let removeButton = document.querySelector(".close");
let userInput = document.querySelector("#task");
let toastLiveExample = document.getElementById('liveToast');
let toastLiveError = document.getElementById('liveToastError');
let regEx =/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
// -------------------- DOM - END --------------------

// Li Access and for cycle
let liElements = listDOM.querySelectorAll("li");
for (let i = 0; i < liElements.length; i++) {
    // Add close button for exist li elements +=
    liElements[i].innerHTML += `<button type="button" class="close" aria-label="Close" onclick="removeElement(this)">
    <span aria-hidden="true">&times;</span>
    </button>`;
    // Add attribute which has onclick key and checkButton(this) value to existing li elements
    liElements[i].setAttribute("onclick" , "checkButton(this)");
}

// Toggle li elements
function checkButton (ele) {
    ele.classList.toggle("checked")
};

// Ekle button function
function newElement () {
    if (userInput.value.match(regEx)) {
    let newListElement = document.createElement("li");
    // Add attribute that has onclick key and checkButton(this) value to created li elements
    newListElement.setAttribute("onclick" , "checkButton(this)");
    newListElement.innerHTML = `${userInput.value} <button type="button" class="close" aria-label="Close" onclick="removeElement(this)">
    <span aria-hidden="true">&times;</span>
    </button>`;
    listDOM.appendChild(newListElement);
    // Reset the value to default
    userInput.value = "";
    // Bootstrap5 Toast
    let toast = new bootstrap.Toast(toastLiveExample)
        toast.show();
    }
    else {     
        let toast = new bootstrap.Toast(toastLiveError)
        toast.show()
    }    
};
// Remove Button Function 
// To work with removeChild we shall reach both the parent we want to remove (that goes in removeChild()) and its parent also. E.g. e.parentNode.parentNode 
function removeElement (e) {
     e.parentNode.parentNode.removeChild(e.parentNode);
};



