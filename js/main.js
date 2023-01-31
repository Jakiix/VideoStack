function findMovie() {
  const input = document.getElementById("search-input");
  const query = input.value;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST
    }
  };
  
  fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${query}`, options)
    .then(response => response.json())
    .then(response => {
      let output = '';
      response.d.forEach(element => {
        let img = '';
        if (element.i && element.i.imageUrl) {
          img = `<img src="${element.i.imageUrl}" alt="${element.l}">`;
        }
          output += `<div style="text-align: center;background-color: #E5E5E5;border-radius:5px;">
                    <li>${element.l}</li>
                    ${img}
                </div>`;
      });
      document.getElementById('result').innerHTML = output;
    })
    .catch(err => console.error(err));
}
