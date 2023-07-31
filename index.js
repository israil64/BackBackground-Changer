console.log("hello");
const btn = document.getElementById("btn");

const RandomColor = () => {
  let val = "0123456789ABCDEF";
  let cons = "#";

  for (let i = 0; i < 6; i++) {
    cons = cons + val[Math.floor(Math.random() * 16)];
  }
  return cons;
};

function RandomChangeColor() {
  document.body.style.backgroundColor = RandomColor();
  console.log(RandomColor());

  //   console.log(RandomChangeColor);
}
btn.addEventListener("click", RandomChangeColor);
