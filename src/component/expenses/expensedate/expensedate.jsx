import React from "react";
import  './expensedate.css';
const ExpenseDate=(props)=>{
    const{date}=props;
 

 return(
    <div className="expense-date">
    
            <div className="expense-date__year">{date}</div>
        </div>
 )
}
export default ExpenseDate;