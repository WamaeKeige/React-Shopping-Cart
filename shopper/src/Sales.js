import React, { Component } from 'react'

class Sales extends Component {

  sumPrice(price){
    this.setState({total: this.state.total + price})
  }
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
    this.sumPrice = this.sumPrice.bind(this);
  }
  render() {
    var goods = this.props.items.map((item, i) => {
      return <Good name={item.name} price={item.price}
      key={i} sumPrice={this.sumPrice} active={item.active} />
    });
    return (
      <div>
      <h5> Select whatever you need </h5>
      <div id="courses">
      {goods}
      </div>
      <p id="total">Total<b>{this.state.total}</b></p>

      </div>
    );
  }
}

class Good extends Component {

  clicker(){
    var active = !this.state.active;
    this.setState({active: active});
    this.props.sumPrice(active ? this.props.price : -this.props.price);
  }
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.clicker = this.clicker.bind(this);
  }
  render() {
    return (
      <div>
      <p onClick={this.clicker}>{this.props.name} <b>{this.props.price}</b></p>
      </div>
    );
  }
}
export default Sales
