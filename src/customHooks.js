import MyReact from "./react";

function Component() {
  const [text, setText] = useSplitURL("www.netlify.com");
  return {
    type: (txt) => setText(txt),
    render: () => text
  };
}
function useSplitURL(str) {
  const [text, setText] = MyReact.useState(str);
  const masked = text.split("");
  return [masked, setText];
}

const hookBtnElem = document.querySelector("#customHooks #callHook");
const valueElem = document.querySelector("#customHooks #value");

hookBtnElem.onclick = function () {
  const App = MyReact.render(Component);
  App.type("Deepesh_Kumar");
  valueElem.innerText =
    "Text to list =>  " + MyReact.render(Component).render();
};
