class Anime extends HTMLElement {
  set animeItem(i) {
    this._anime = i;
    this.render();
  }

  render() {
    const {
      at,
      anilist_id,
      filename,
      tokenthumb,
      title_romaji: title,
      mal_id,
      episode,
      similarity,
    } = this._anime;

    let acc = (similarity * 100).toFixed(2);

    let jam = Math.floor(at / 60 / 60);
    let menit = Math.floor(at / 60) - jam * 60;
    let detik = (at % 60).toFixed(0);

    jam = ("0" + jam).slice(-2);
    menit = ("0" + menit).slice(-2);
    detik = ("0" + detik).slice(-2);
    let waktu = `${jam}:${menit}:${detik}`;

    this.innerHTML = `
        
          <div class="row no-gutters">
            <div class="col-4 col-md-3 col-lg-12">
              <div class="mini-box position-relative" style="background-image: url('https://trace.moe/thumbnail.php?anilist_id=${anilist_id}&file=${encodeURIComponent(
      filename
    )}&t=${at}&token=${tokenthumb}')"></div>
            </div>
            <div class="col-8 col-md-9 col-lg-12">
              <div class="container mt-lg-3">
                <div class="info ml-3 ml-lg-0 mt-2 mt-lg-0">
                  <h6>
                    <a href="https://myanimelist.net/anime/${mal_id} " target="_blank">
                      ${title}</a
                    >
                  </h6>
                  <p>Episode ${episode} ~ ${waktu} ~ Kecocokan ${acc}%</p>
                </div>
              </div>
            </div>
          </div>
        
    `;
  }
}

customElements.define("anime-item", Anime);
