import { useState, useEffect } from 'react';
import { getMonsters } from '../services/xfilesApi';

export const useMonsters = () => {
  const [loading, setLoading] = useState(true);
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    getMonsters()
      .then((monsters) => {
        setMonsters(monsters);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    monsters
  };
};
