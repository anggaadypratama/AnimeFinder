import { getData } from "./getData";
import Swal from "sweetalert2";

const spinner = document.querySelector("#spinner");
const baseURL = `https://trace.moe/api/search`;

export const byImg = base64 => {
  let body = JSON.stringify({ image: base64 });
  spinner.removeAttribute("hidden");

  fetch(baseUrl, {
    method: "POST",
    body: body,
    headers: { "Content-Type": "application/json" },
  })
    .then(res => res.json())
    .then(result => {
      spinner.setAttribute("hidden", "");
      result.error ? ResPesan(result.message) : getData(result);
    })
    .catch(err => {
      ResPesan(err);
    });
};

export const byUrl = url => {
  spinner.removeAttribute("hidden");

  fetch(`${baseURL}?url=${url}`)
    .then(res => res.json())
    .then(result => {
      spinner.setAttribute("hidden", "");
      result.error ? ResPesan(result.message) : getData(result);
      console.log(result);
    })
    .catch(err => {
      ResPesan(err);
    });
};

const ResPesan = (message = "Cek Koneksi Internet") => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `${message}`,
  });
};
