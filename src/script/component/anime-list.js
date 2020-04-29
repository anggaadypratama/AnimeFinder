import "../component/anime";

class AnimeList extends HTMLElement {
  set animeList(i) {
    this._list = i;
    this.render();
  }

  render() {
    this._list.forEach(list => {
      const animeEl = document.createElement("anime-item");
      animeEl.className = "card mt-3 bg-blueR";
      animeEl.animeItem = list;
      this.appendChild(animeEl);
    });
  }
}
customElements.define("anime-list", AnimeList);
