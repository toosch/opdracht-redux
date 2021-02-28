import { getData } from "./redux/cocktailfinder";
import store from "./redux/store";
import { plus, min } from "./redux/cocktailcounter";

const button = document.querySelector("button#find");
const input = document.querySelector("input");
const cocktailList = document.querySelector("ul");

button.addEventListener("click", () => store.dispatch(getData(input.value)));

function renderList() {
  cocktailList.innerHTML = "";
  if (store.getState().finderState.list) {
    store
      .getState()
      .finderState.list.forEach(
        (drink) =>
          (cocktailList.innerHTML += `<li><a href="https://www.thecocktaildb.com/drink/${drink.idDrink}" target="_blank">${drink.strDrink}</a></li>`)
      );
  }
}

store.subscribe(renderList);

// couter
const plusBtn = document.querySelector("button#plus");
const minBtn = document.querySelector("button#min");
plusBtn.addEventListener("click", () => store.dispatch(plus()));
minBtn.addEventListener("click", () => store.dispatch(min()));

const count = document.getElementById("count");
function renderCounter() {
  count.innerText = store.getState().counterState.counterValue;
}

store.subscribe(renderCounter);
