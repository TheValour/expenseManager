import React, { useDebugValue, useState } from "react";
import "./Form.css";

export default function Form(props) {
    const [userData, setUserData] = useState({
      enterTitle: '',
      enterAmount : '',
      enterDate : ''
    })
  const titleChange = (event) => {
    // setUserData({
    //     ...userData,
    //     enterTitle : event.target.value
    // })
    setUserData((preState) =>{
        return {...preState, enterTitle : event.target.value}
    })
  };
  const dateChange = (event) => {
    setUserData((preState) =>{
        return {...preState, enterDate : event.target.value}
    })  
  };
  const amountChange = (event) => {
    setUserData((preState) =>{
        return {...preState, enterAmount : event.target.value}
    })  
  };

  const submitHandler = (event) =>{
    event.preventDefault();
    setUserData({
        enterTitle: '',
        enterAmount : '',
        enterDate : ''
      })

    props.saveFormData(userData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text" 
            onChange={titleChange}
            value={userData.enterTitle} 
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input 
            type="number" 
            min="0.01" 
            step='0.01'
            onChange={amountChange}
            value={userData.enterAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input 
            type="date"     
            min="2021-01-01" 
            max="2023-12-31" 
            onChange={dateChange}
            value={userData.enterDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
