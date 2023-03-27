import yogitocat from "./yogitocat.png";

function catPic() {
    const yogi = new Image();
    yogi.src = yogitocat;
    document.querySelector("main").appendChild(yogi);

    const link = document.createElement("a");
    link.href = "https://octodex.github.com/yogitocat/";
    link.innerText = "Octodex #152: Yogitocat by Joao Ribeiro";
    document.querySelector("main").appendChild(link);
}

export {
    catPic
};