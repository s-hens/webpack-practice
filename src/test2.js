function testFunction2() {
    const div = document.createElement("div");
    div.innerText = "Isn't that cool?";
    document.querySelector("main").appendChild(div);
}

function styling() {
    document.body.setAttribute("style", "background: #D6EAF8;");
}

export {
    testFunction2,
    styling
};