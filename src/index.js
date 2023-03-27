import {testFunction1} from "./test1";
import {testFunction2, styling} from "./test2";
import "./style.css";
import yogitocat from "./yogitocat.png"

testFunction1();
testFunction2();
styling();

document.body.classList.add("hello");

const yogi = new Image();
yogi.src = yogitocat;
document.body.appendChild(yogi);

const link = document.createElement("a");
link.href = "https://octodex.github.com/yogitocat/";
link.innerText = "Octodex #152: Yogitocat by Joao Ribeiro";
document.body.appendChild(link);