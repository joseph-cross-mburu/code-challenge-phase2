import React from 'react';
import { useState } from 'react';

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({ 
   date: "",
  description: "",
  category: "",
  amount: "", });

  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();
    onSubmit(formData); 
    setFormData({ 
     date: "",
    description: "",
    category: "",
    amount: "",
  }); 
  };

  return (
    <form onSubmit={handleSubmitButton}>
    <lable for="date">date</lable>
    <input type='date' id='date' name='date' value={FormData.date} onChange={handleChange}></input>
    <lable for="description">description</lable>
    <input type='text' id='date' name='description' value={FormData.description} onChange={handleChange}></input>
    <lable for="category">category</lable>
    <input type='text' id='category' name='category' value={FormData.category} onChange={handleChange}></input>
    <lable for="amount">amount</lable>
    <input type='currency' id='amount' name='amount' value={FormData.amount} onChange={handleChange}></input>
    <button type='submit' >submit</button>
  </form>
  );
}

export default Form;