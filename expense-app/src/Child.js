import React, { useContext, useState } from 'react';
import { TransactionContext } from './TransactionContext';

function Child() {

    let { transactions, addTransaction } = useContext(TransactionContext);
    // console.log(transactions)

    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event) => {
        event.preventDefault();
        console.log(newDesc, newAmount)
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc,
        });
       
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0) {
                income += transactions[i].amount;
            }
        }
        return income;
    }
    console.log(getIncome())

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0) {
                expense += transactions[i].amount;
            }
        }
        return expense;
    }
    console.log(getExpense())

    const totalBalance = () => {
        return getIncome() + getExpense();
    }

    return (
        <div className="container">
            <h1 className="text-center"> Expense Tracker</h1>

            <h3>Your Balance <br /> ${totalBalance()} </h3>
            <div className="expense-container">
                <h3>INCOME <br /> {getIncome()} </h3>
                <h3>EXPENSE <br /> {getExpense()} </h3>
            </div>
            <h3>
                History
            </h3>
            <hr />
            <ul className="transaction-list">
                {
                    transactions.map((transObj, index) => {
                        return (<li key={index} style={{ borderRight: transObj.amount < 0 ? '5px solid red' : '5px solid blue' }}  >
                            <span>{transObj.desc}</span>
                            <span>{transObj.amount}</span>
                        </li>)
                    })
                }
            </ul>
            <h3>Add new Transaction</h3>
            <hr />
            <form className="transaction-form" onSubmit={handleAddition}>
                <label>Enter Description <br />
                    <input type="text" required onChange={(e) => setDesc(e.target.value)} />
                </label>

                <label>Enter Amount <br />
                    <input type="number" required onChange={(e) => setAmount(e.target.value)} />
                </label>
                <br />
                <input type="submit" value="Add Transaction" />
            </form>
        </div>
    );
}

export default Child;
