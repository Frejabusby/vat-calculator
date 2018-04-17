import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vatRate: 25,
      incVat: 0,
      exVat: 0,
      vatSum: 0
    }
  }

  handleVatChange = (event) => {
    this.setState({
      vatRate: parseInt(event.target.value),
      incVat: 0,
      exVat: 0
    })
  }

  handleIncVatChange = (event) => {
    this.setState({
      exVat: incVatToExtVat(this.state.vatRate, parseInt(event.target.value)),
      incVat: parseInt(event.target.value),
      vatSum: parseInt(event.target.value)
    })
  }

  handleExVatChange = (event) => {
    this.setState({
      incVat: exVatToIncVat(this.state.vatRate, parseInt(event.target.value)),
      exVat: parseInt(event.target.value),
      vatSum: parseInt(event.target.value)
    })
  }

  render() {
    console.log(this.state.vatRate)
    return (
      <div className="App">
        <form className="moms-form">
          <h1>Räkna ut momsen!</h1>
          <label htmlFor="25percent">25%</label>
          <input
            onChange={this.handleVatChange}
            type="radio"
            name="chooseVat"
            id="25percent"
            checked={this.state.vatRate === 25}
            value="25" />
          <label htmlFor="12percent">12%</label>
          <input
            onChange={this.handleVatChange}
            type="radio"
            name="chooseVat"
            id="12percent"
            checked={this.state.vatRate === 12}
            value="12" />
          <label htmlFor="6percent">6%</label>
          <input
            onChange={this.handleVatChange}
            type="radio"
            name="chooseVat"
            id="6percent"
            checked={this.state.vatRate === 6}
            value="6" />

          <lable htmlFor="incVat">Inklusive moms</lable>
          <input
            type="number"
            id="incVat"
            name="incVat"
            onChange={this.handleIncVatChange}
            value={this.state.incVat} />

          <lable htmlFor="exVat">Exklusive moms</lable>
          <input
            type="number"
            id="exVat"
            name="exVat"
            onChange={this.handleExVatChange}
            value={this.state.exVat} />

          <lable htmlFor="vatSum">Momssumma</lable>
          <input
            type="number"
            id="vatSum"
            name="vatSum"
            value={this.state.incVat - this.state.exVat} />
        </form>
      </div>
    )
  }

}

export default App
