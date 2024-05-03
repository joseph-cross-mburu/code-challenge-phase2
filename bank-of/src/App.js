import React from 'react';
import Form from './components/Form';
import Table from './components/Table';
import { useState } from 'react';
import Search from './components/search';



function App() {
  const [FormDataInput, setFormInput] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);


  const handleFormSubmitButton = (FormData) => {
    setFormInput([...FormDataInput, FormData]);
  };
  const handleSearch = (searchTerm) => {
    const filtered = FormData.filter(FormData =>
      FormData.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <header>
      <Table FormData={filteredTransactions} />
        <h1 style={{ background: "purple", textAlign: "center" }}>The Royal Bank of Flatiron</h1>
        <Search onSearch={handleSearch} />
      </header>
      <Form onSubmit={handleFormSubmitButton} />
      <Table FormData={FormDataInput} />
    </div>
  );
}

export default App