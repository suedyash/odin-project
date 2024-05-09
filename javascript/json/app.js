async function populate() {
  const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);
  const response = await fetch(request);
  const superHeroesText = await response.text();
  const superHeroes = JSON.parse(superHeroesText);
  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}

function populateHeader(object) {
  const header = document.querySelector('header');
  const h1 = document.createElement('h1');
  h1.textContent = object.squadName;
  header.appendChild(h1);

  const para = document.createElement('p');
  para.textContent = `Hometown: ${object.homeTown} // Formed: ${object.formed}`;
  header.appendChild(para);
}
  
function populateHeroes(object) {
  const section = document.querySelector('section');
  const heroes = object.members;

  for (const hero of heroes) {
    const article = 
    document.createElement('article');
    const h2 = document.createElement('h2');
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');
    const list = document.createElement('ul');

    h2.textContent = hero.name;
    para1.textContent = `Secret Identity: ${hero.secretIdentity}`;
    para2.textContent = `Age: ${hero.age}`;

    para3.textContent = `Superpowers:`;
    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement('li');
      listItem.textContent = power;
      list.appendChild(listItem);
    } 

    article.appendChild(h2);
    article.appendChild(para1);
    article.appendChild(para2);
    article.appendChild(para3);
    article.appendChild(list);

    section.appendChild(article);
  }
}

populate();