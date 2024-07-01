import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1>Welcome to the Gaming Site</h1>
      <Link to="/games">View Games</Link>
    </motion.div>
  );
};

export default Home;