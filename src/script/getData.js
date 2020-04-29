import "./component/anime-list";

export const getData = data => {
  const { docs: value } = data;

  let list = document.querySelector("anime-list");
  list.animeList = value;

  let animeItem = document.querySelectorAll("anime-item");
  let Wrapper = document.querySelector("#listEl");

  if (animeItem.length > 0) {
    let rmBtn = document.createElement("button");
    let title = document.createTextNode("Hapus");

    rmBtn.appendChild(title);
    rmBtn.setAttribute("class", "hapus");
    rmBtn.setAttribute("id", "hapus");

    rmBtn.onclick = () => {
      animeItem.forEach(i => {
        i.remove();
        rmBtn.remove();
      });
    };
    Wrapper.appendChild(rmBtn);
  }
};
