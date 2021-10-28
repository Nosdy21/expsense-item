import './ExpenseItem.css';

function ExpenseItem (props) { 
    
    return (
            <div className = "expense-item">
                <div><h2>{props.model}</h2></div>
                <div className ="expense-item_description"> 
                    <h2>{props.title}</h2> 
                    <div className="expense-item_price">{props.amount}kn</div>
                </div>
            </div>
    ); 
}
export default ExpenseItem;