import { byUrl, byImg } from "./getApi";

const main = () => {
  document.addEventListener("DOMContentLoaded", () => {
    let inputImg = document.querySelector("#img");
    let output = document.querySelector("#outImg");
    let inputTxt = document.querySelector("#inputText");
    let btnClick = document.querySelector("button");

    inputImg.onchange = () => {
      let reader = new FileReader();
      reader.onload = () => {
        output.style.backgroundImage = `url('${reader.result}')`;
        btnClick.onclick = () => {
          byImg(reader.result);
        };
      };
      reader.readAsDataURL(inputImg.files[0]);
    };

    inputTxt.oninput = () => {
      let val = inputTxt.value;
      output.style.backgroundImage = `url('${val}')`;
      btnClick.onclick = () => {
        byUrl(val);
      };
      console.log(val);
      output.onload = () => {
        URL.revokeObjectURL(output.style.backgroundImage);
      };
    };
  });
};

export default main;
