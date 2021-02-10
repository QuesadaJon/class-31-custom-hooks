import React, { useEffect, useState } from 'react';
import MonsterList from '../components/monsters/MonsterList';
import { getMonsters } from '../services/xfilesApi';

const MonsterPage = () => {
  const [loading, setLoading] = useState(true);
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    getMonsters().then((monsters) => {
      setMonsters(monsters);
      setLoading(false);
    });
  }, []);

  if(loading) return <h1>Loading...</h1>;
  return <MonsterList monsters={monsters} />;
};

export default MonsterPage;
