import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const GameDetail = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`https://api.example.com/games/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading game details.</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default GameDetail;