import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup.string().required('Description is required'),
});

const GameForm = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input name="name" ref={register} />
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <label>Description</label>
        <input name="description" ref={register} />
        <p>{errors.description?.message}</p>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default GameForm;