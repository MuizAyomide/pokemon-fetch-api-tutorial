 function fetchData(){ 

    const pokemonName = document.getElementById('Pokemon').value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
.then(response => response.json())
.then(data => {
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById('pokemonSprite')
    imgElement.src = pokemonSprite;
    imgElement.style.display = 'block'
})
.catch(error => console.log(error));
 }