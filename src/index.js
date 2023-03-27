import {testFunction1} from "./test1";
import {testFunction2, styling} from "./test2";
import {catPic} from "./test3";
import "./style.css";

testFunction1();
testFunction2();
styling();
catPic();

document.body.classList.add("hello");