import React from "react";
import AccountBalance from "./AccountBalance";
import {Link} from 'react-router-dom';

function Home(props){
    console.log(props.balance)
    return(
        <div>
            <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
            <h1>Bank of React</h1>

            <Link to="/userProfile">UserProfile </Link>
            <Link to="/Login">LogIn</Link>    

            <AccountBalance balance={props.balance}/>
        </div>
    )
}

export default Home;