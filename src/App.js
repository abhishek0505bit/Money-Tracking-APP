import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // STATE VARIABLES:
  // How to define the useState variable:
  // [variableName, function_to_update_the_variable_value] = useState( initialState or initialValue ) 
  const [name, setName] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('#777'); // that is grey color by default 
  const [transactions, setTransactions] = useState([]);
  const [spends, setSpends] = useState(0);
  const url = process.env.REACT_APP_URL + '/transactions';

  useEffect(() => {


    fetch(url).then((response) => response.json()) // so we are taking response as an argument and returning response.json(), if promise gets resolved 
      .then((transactions) => { setTransactions(transactions) }) // here we are taking the json array of transactions, and just setting the transactions using setTransactions, we are not returning anything since we have used {} and not used any return inside it
      .catch((er) => console.log("some error occured ", er));



  }, [transactions]);

  // FUNCTIONS:

  const nameChangeHandler = (event) => {
    setName(event.target.value)
    // console.log("the value of event.target is ", event.target); //for understanding event, you can print it in console
  }

  const dateTimeHandler = (event) => {
    setDateTime(event.target.value);
    setColor('white')
    // console.log("the value of dateTime ", event.target.value )
  }

  const descriptionHandler = (event) => {
    setDescription(event.target.value);
    // console.log("the value of description is ", event.target);
  }

  // this function should take all the states(name, dateTime and description) and send it to the backend 
  const addNewTransaction = (e) => {
    e.preventDefault(); // this prevents page from getting reloaded 
    const url = process.env.REACT_APP_URL + '/transactions';

    console.log(url);


    const price = name.split(' ')[0]; // split the name wrt spaces, and grab the first element 

    // I am sending the data stored in the name, dateTime and description, into the url
    // when user hits the submit button
    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.substring(price.length + 1),
        price,
        description,
        dateTime
      })

    }).then((response) => {
      response.json() // this will fetch the response and convert to response.json()
      .then((json) => { console.log('result : ', json) }) // this weill take the response.json() as json and log it on console
      .then(() => {
        setName('');
        setDateTime('');
        setDescription('');
      })
      .catch(error => { console.log("error ", error) });// if then doesn't work, it logs the error
    }
    )
  }

    let balance = 0;

    for(const transaction of transactions)
    {
      balance += transaction.price;

    }

    balance = balance.toFixed(2);
    let fraction = balance.split('.')[1];
    balance = balance.split('.')[0]




  

  return (
    <main>
      {/* we have kept .00 inside span because we want to make the .00 in smaller font size */}
      {transactions.length}
      <h1>${balance}<span>.{fraction}</span></h1>
      <form onSubmit={addNewTransaction}>


        <div className="basic">

          {/*when we write anything in the text box, it takes that in value attribute, 
          and sets the value of name : updated name using the function: setName(event.target.value)*/}
          <input type="text" value={name} onChange={nameChangeHandler} placeholder={'+200 new samsung tv'}></input>
          <input type="datetime-local" value={dateTime} onChange={dateTimeHandler} style={{ color: color }}></input>
        </div >

        <div className="description">
          <input type="text" value={description} onChange={descriptionHandler} placeholder={'description'} />
        </div>

        <button type="submit">
          Add New Transaction
        </button>
      </form>


      <div className="transactions">
        {/*In React JSX, {a && <Component />} renders the component only if a is truthy. 
        There’s no second condition (<Component /> is not a condition but a value). */}
        {transactions.length > 0 && transactions.map(transaction => (

          <div className="transaction">
            <div className="left">
              <div className="name">{transaction.name}</div>
              <div className="description">{transaction.description}</div>
            </div>
            <div className="right">
              {/*since the data is coming from db, refer the transaction model, so inside that the transaction is in number form, so thatswhy
              its evaluated in the form of number. Additionally if transaction.price had been a string, then also js converts internally into number
              and evaluate accordingly */}
              <div className={"price " + (transaction.price>0?'green':'red')}>
                {transaction.price}
                </div>{/*this div contains two classes: price and red*/}
              <div className="dateTime">{transaction.date}</div>
            </div>
          </div>

        ) 
        )}
        {/*One more thing to remember, if you are using arra.map(a=>{}) then you have to use return inside {} to show in UI, otherwise it wont be visibe
        PREFERRED: to implicitly return, you can use this way : array.map(a = > () ) you can use () in place of {} to directly return whatever jsx you are writing, */}

      </div>


    </main>

  );
}

export default App;
