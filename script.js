async function movie() {

    let recupe = document.getElementById('element').value

    const movie = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=548a69b3&t=${recupe}`)
    if(!movie.ok)
        throw new Error('error value');
    const data = await movie.json()
    console.log("data récuperé")
    console.log(data)

    const boite = document.getElementById("boite");
    boite.innerHTML = `
    <p>Titre: ${data.Title}</p>
    <p>Année: ${data.Year}</p>
    <p>Résumé: ${data.Plot}</p>
    <p>Date: ${data.Released}</p>
    <p>Note: ${data.imdbRating}</p>
    <img src="${data.Poster}" alt="">     
    `;
}
