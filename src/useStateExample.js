import MyReact from "./react";

function Counter() {
  const [count, setCount] = MyReact.useState(0);
  return {
    inc: () => setCount(count + 1),
    dec: () => setCount(count - 1),
    render: () => count
  };
}

const countElem = document.querySelector("#useState #count");
const btnInc = document.querySelector("#useState #increment");
const btnDec = document.querySelector("#useState #decrement");

btnInc.onclick = function () {
  const App = MyReact.render(Counter);
  App.inc();
  countElem.innerText = "Count " + MyReact.render(Counter).render();
};

btnDec.onclick = function () {
  const App = MyReact.render(Counter);
  App.dec();
  countElem.innerText = "Count " + MyReact.render(Counter).render();
};

// export default App;
