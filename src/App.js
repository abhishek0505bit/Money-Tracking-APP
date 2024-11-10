import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // STATE VARIABLES:
  // How to define the useState variable:
  // [variableName, function_to_update_the_variable_value] = useState( initialState or initialValue ) 
  const [name, setName] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [description, setDescription] = useState('');

  // FUNCTIONS:

  const nameChangeHandler = (event) => {
    setName(event.target.value)
    // console.log("the value of event.target is ", event.target); //for understanding event, you can print it in console
  }

  const dateTimeHandler = (event) =>{
    setDateTime(event.target.value);
    // console.log("the value of dateTime ", event.target.value )
  }

  const descriptionHandler = (event) => {
    setDescription(event.target.value);
    // console.log("the value of description is ", event.target);
  }

  // so this function should take all the states(name, dateTime and description) and send it to the backend 
  const addNewTransaction = (name, dateTime, description) =>{

  }

  return (
    <main>
      {/* we have kept .00 inside span because we want to make the .00 in smaller font size */}
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>


        <div className="basic">

          {/*when we write anything in the text box, it takes that in value attribute, 
          and sets the value of name : updated name using the function: setName(event.target.value)*/}
          <input type="text" value={name} onChange={nameChangeHandler} placeholder={'+200 new samsung tv'}></input>
          <input type="datetime-local" value={dateTime} onChange={dateTimeHandler}></input>
        </div >

        <div className="description">
          <input type="text" value={description} onChange={descriptionHandler} placeholder={'description'} />
        </div>

        <button type="submit">
          Add New Transaction
        </button>
      </form>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">New TV bought today</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>{/*this div contains two classes: price and red*/}
            <div className="dateTime">Date</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">Income</div>
            <div className="description">Monthly income</div>
          </div>
          <div className="right">
            <div className="price green">+$500</div> {/*this div contains two classes: price and green*/}
            <div className="dateTime">Date</div>
          </div>
        </div>


      </div>


    </main>

  );
}

export default App;
