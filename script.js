const quests = document.querySelector(".quests-list");

const title = document.querySelector(".title");
const question = document.querySelector(".question");
const input = document.querySelector(".input");
const example = document.querySelector(".example");
const solution = document.querySelector(".solution");
const notes = document.querySelector(".notes");
const rowRight = document.querySelector(".row-right");

// CodeWars
import { primesInNumbers } from "./codewars/primes-in-numbers.js";
import {alphabet} from "./codewars/alphabet.js"
import "./codewars/iqTest.js";
import "./codewars/Buying-a-car.js"
import "./codewars/tictactoe.js";

class codeWars {
  constructor(title, quest, input, example, solution, notes) {
    this.title = title;
    this.input = input;
    this.quest = quest;
    this.example = example;
    this.solution = solution;
    this.notes = notes;
    this.list;
  }

  createList = () => {
    let node = document.createElement("LI");
    node.innerText = `${this.title}`;
    this.list = quests.appendChild(node);
    this.list.classList.add("list");
  };
  createSummary = () => {
    this.list.addEventListener("click", () => {
      let list = Array.from(document.querySelectorAll(".list"));
      list.forEach((el) => {
        el.classList.remove("active");
      });
      title.innerHTML = `${this.title}`;
      question.innerHTML = `${this.quest}`;
      input.innerHTML = `${this.input}`;
      example.innerHTML = `${this.example}`;
      solution.innerHTML = `${this.solution}`;
      notes.innerHTML = `${this.notes}`;
      this.list.classList.add("active");
      rowRight.scrollTo({ top: 0, behavior: "smooth" });
    });
  };
  start = () => {
    this.createList();
    this.createSummary();
  };
}

const prime = () => {
  let {title, quest, input, example, solution, notes} = primesInNumbers;

  const primes = new codeWars(
    title, quest, input, example, solution, notes
  );
  primes.start();
};

const alphabets = () => {
  let {title, quest, input, example, solution, notes} = alphabet;

  const alpha = new codeWars(
    title, quest, input, example, solution, notes
  );
  alpha.start();
};



// Start
prime();
alphabets();