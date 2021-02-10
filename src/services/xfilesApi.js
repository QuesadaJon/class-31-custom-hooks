export const getMonsters = () => {
  return fetch (
    'https://xfiles-api.herokuapp.com/api/v1/characters?category=Monster_of_the_Week&perPage=20'
  )
    .then(res => res.json())
    .then(({ results })  => results.map(result => ({
      name: result.name,
      image: result.image,
      description: result.description,
      categories: results.categories,
    })));
};

export const getMonsterByName = name => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`)
    .then(res => res.json())
    .then(json => ({
      name: json.id,
      image: json.image,
      description: json.description,
      categories: json.categories,
      gender: json.gender,
    }));
};
