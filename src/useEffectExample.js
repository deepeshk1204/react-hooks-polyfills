import MyReact from "./react";

function Counter() {
  const [count, setCount] = MyReact.useState(0);
  MyReact.useEffect(() => {
    const effectCountElem = document.querySelector("#useEffect #effectCount");
    effectCountElem.innerText = "effect triggred";
    console.log("effect", count);
  }, [count]);
  return {
    click: () => setCount(count + 1),
    reset: () => setCount(count),
    render: () => count
  };
}

const countElem = document.querySelector("#useEffect #count");
const btnInc = document.querySelector("#useEffect #increment");
const btnDec = document.querySelector("#useEffect #decrement");
const effectCountElem = document.querySelector("#useEffect #effectCount");

btnInc.onclick = function () {
  const App = MyReact.render(Counter);
  App.click();
  countElem.innerText = "Count " + MyReact.render(Counter).render();
  // effectCountElem.innerText = "effect not triggred";
};

btnDec.onclick = function () {
  const App = MyReact.render(Counter);
  App.reset();
  countElem.innerText = "Count " + MyReact.render(Counter).render();
  effectCountElem.innerText = "effect not triggred";
};
