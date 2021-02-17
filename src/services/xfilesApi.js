const request = path => {
  return fetch(`https://xfiles-api.herokuapp.com${path}`)
    .then(res => {
      if(!res.ok) throw new Error(`Unable to fetch ${path}: ${res.status}`);
      return res.json();
    });
};

export const getMonsters = () => {
  return request('/api/v1/characters?category=Monster_of_the_Week&perPage=20')
    .then(({ results })  => results.map(result => ({
      name: result.name,
      image: result.image,
      description: result.description,
      categories: results.categories,
    })));
};

export const getMonsterByName = name => {
  return request(`/api/v1/characters/${name}`)
    .then(json => json);
};
