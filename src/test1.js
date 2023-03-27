function testFunction1() {
    const div = document.createElement("div");
    div.innerText = "This site uses Webpack.";
    document.querySelector("main").appendChild(div);
}

export {
    testFunction1
};