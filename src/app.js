/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};
let generateExcuse = () => {
  let who = ["My Dog", "My Cat", "My Doctor", "My Priest"];
  let action = ["ate", "soiled", "destroyed", "took out"];
  let what = ["my car,", "my house,", "my computer,", "my papers,"];
  let when = [
    "yesterday.",
    "this morning.",
    "last night.",
    "five minutes ago."
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
