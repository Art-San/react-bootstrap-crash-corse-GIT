import { Component } from 'react'
import './App.css'

export default class App extends Component {
  state = {
    rows: [
      { id: 1, name: 'A', text: 'some text' },
      { id: 2, name: 'B', text: 'some text' },
      { id: 3, name: 'c', text: 'some text' },
      { id: 4, name: 'd', text: 'some text' },
      { id: 5, name: 'f', text: 'some text' },
    ]
  }

  spliceRow = (index) => {
    this.state.rows.splice(index, 1)
    this.setState({ rows: this.state.rows })
  }

  filterRows = (id) => {
    this.setState({
      rows: this.state.rows.filter((row) => {
        return row.id !== id
      })
    })
  }

  render() {
    return (
      <table className="App">
        <tbody>
          {this.state.rows.map((row, index) => {
            return (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.text}</td>
                <td>
                  <button onClick={() => this.spliceRow(index)}>
                    Remove row with splice
                  </button>
                </td>
                <td>
                  <button onClick={() => this.filterRows(row.id)}>
                    Remove row with filter
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}