import React from 'react';
import './ExpenseItem.css';


function Button(opis) {
    return (
        <button onClick={opis} className="Button">
            Više
        </button>
    );
}
export default Button;