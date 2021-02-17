import React from 'react';
import MonsterList from '../components/monsters/MonsterList';
import { useMonsters } from '../hooks/monsters';

const MonsterPage = () => {
  const { loading, monsters } = useMonsters();
  // const [loading, setLoading] = useState(true);
  // const [monsters, setMonsters] = useState([]);

  // useEffect(() => {
  //   getMonsters()
  //     .then((monsters) => {
  //       setMonsters(monsters);
  //       setLoading(false);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  if(loading) return <h1 data-testid="monsters" >Loading...</h1>;
  return <MonsterList monsters={monsters} />;
};

export default MonsterPage;
