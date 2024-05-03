// TableComponent.js
import React from 'react';


function Table({ FormData }) {
  return (
    <table style={{border:"50px"}}>
      <thead style={{textAlign:"center"}}>
        <tr>
          <th>Date</th>
          
          <th>description</th>

          <th>Category</th>
          
          <th>amount</th>
          
        </tr>
      </thead>  
      <tbody>
        {FormData.map((FormData) => (
          <tr key={FormData.id}>
            <td>{FormData.date}</td>
            <td>{FormData.description}</td>
            <td>{FormData.category}</td>
            <td>{FormData.amount}</td>
          </tr>  
        ))}
        
      </tbody>
    </table>
  );
}

export default Table;
