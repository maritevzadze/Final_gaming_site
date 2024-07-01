import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useFetch from '../../hooks/useFetch';

const GameList = () => {
  const { data, error, loading } = useFetch('https://api.example.com/games');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading games.</p>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1>Game List</h1>
      <ul>
        {data.map(game => (
          <li key={game.id}>
            <Link to={`/game/${game.id}`}>{game.name}</Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default GameList;