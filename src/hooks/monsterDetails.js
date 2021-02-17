import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMonsterByName } from '../services/xfilesApi';

export const useMonsterDetails = () => {
  const [loading, setLoading] = useState(true);
  const [monster, setMonster] = useState({});
  const { name } = useParams();

  useEffect(() => {
    getMonsterByName(name)
      .then((monster) => {
        setMonster(monster);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  return {
    loading,
    monster,
    name
  };
};
