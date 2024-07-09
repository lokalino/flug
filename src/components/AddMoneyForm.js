
import React, { useState } from 'react';
import axios from 'axios';

const AddMoneyForm = ({ userId }) => {
  const [amount, setAmount] = useState('');

  const handleAddMoney = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/users/${userId}`);
      const user = response.data;
      user.balance += parseFloat(amount);

      await axios.put(`http://localhost:3001/users/${userId}`, user);
      alert('Money added successfully');
    } catch (error) {
      console.error('Failed to add money', error);
    }
  };

  return (
    <form onSubmit={handleAddMoney}>
      <h2>Add Money</h2>
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Amount" 
        required 
      />
      <button type="submit">Add Money</button>
    </form>
  );
};

export default AddMoneyForm;
