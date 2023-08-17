const addButton = document.getElementById("addButton");
const userInput = document.getElementById("userInput");
const itemList = document.getElementById("itemList");

function inputLen() {
    return userInput.value.length;
}

addButton.addEventListener("click", function () {
    let itemEl = document.createElement("p");
    if (inputLen() > 0) {
        itemEl.innerText = userInput.value;
        itemList.appendChild(itemEl);
        userInput.value = "";
    }

    itemEl.addEventListener("click", function () {
        itemEl.style.textDecoration = "line-through";
    });

    itemEl.addEventListener("dblclick", function () {
        itemList.removeChild(itemEl);
    });
});
