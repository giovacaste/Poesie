const url = "https://poetrydb.org/author,title/Shakespeare;Sonnet";

function casuale(e) {
  e.preventDefault();

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      function generaNumeroCasuale() {
        return Math.floor(Math.random() * data.length);
      }

      const num = generaNumeroCasuale();
      const poem = data[num];

      document.getElementById("main").style.width = "fit-content";
      document.getElementById("title").style.display = "none";
      document.getElementById("cerca").style.display = "none";
      document.getElementById("container").innerHTML += `
            <h1>Titolo:<br><b>${poem.title}</b></h1>
            <h1>Autore:<br><b>${poem.author}</b></h1>
            <h1>Testo:<br><b>${poem.lines.join("<br>")}</b></h1>`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
