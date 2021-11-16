import React from 'react'; 
import ExpenseItem from './components/ExpenseItem';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Description from './components/Description';

function App() {
  const expenses = [
    { id: 0, model: 'Apple', title: 'MacBook Pro', amount: '13.499,00 ' },
    { id: 1, model: 'Huawei', title: 'MateBook', amount: '5.199,00 ' },
    { id: 2, model: 'Lenovo', title: 'Yoga Creator', amount: '7.899,00 ' },
    { id: 3, model: 'Dell', title: 'Inspirion', amount: '8.999,00 ' },
    { id: 4, model: 'HP', title: 'ProBook G8', amount: '4.199,00 ' },
  ];

  return (
    
    <div>
      <h1>POPIS PROIZVODA</h1>
     
      {expenses.map(item => {
        return (
            
            <div className="expenses">
              <ExpenseItem model={item.model} title={item.title} amount={item.amount}/>
            </div>
           
          );
      })}
       
    </div>
    
  );
}

export default App;