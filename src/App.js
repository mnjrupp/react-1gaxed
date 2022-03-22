import React from "react";
import MaskedInput from "react-maskedinput";
import "./style.css";

class CreditCardDetails extends React.Component{

  state = {
    card:'',
    expiry:'',
    ccv:''
  }

  _onChange = (e) => {
    this.state({[e.target.name]:e.target.value})
  }
}
export default function App() {
 
  return (
    <div className="CreditCardDetails">
      <label>
        Card Number:{' '}
        <MaskedInput mask="1111 1111 1111 1111" name="card" size="20" onChange={this._onChange}/>
      </label>
      <label>
        Expiry Date:{' '}
        <MaskedInput mask="11/1111" name="expiry" placeholder="mm/yyyy" onChange={this._onChange}/>
      </label>
      <label>
        CCV:{' '}
        <MaskedInput mask="111" name="ccv" onChange={this._onChange}/>
      </label>
    </div>
  );

}
