import {useState} from 'react'
import './App.css';
import data from './data'

function App() {

  const [text, setText] = useState("");

  const filteredNames = ( data.filter(d => {
    return d.name.toLowerCase().indexOf( text.toLowerCase()) !== -1
  }))


  return (
    <>
        <div id="search"><input type="text" onChange={(e)=>setText(e.target.value)} placeholder="Search..."></input></div>

        <table>
          <thead>
            <tr>
            <th>Name</th>
            <th>Location</th>
            </tr>
          </thead>

          <tbody>
          {filteredNames.map(i=> {
            return (<tr id="row" key={i.id}>
              <td>{i.name}</td>
              <td>{i.location}</td>
            </tr>)
          })}
          </tbody>
          
        </table>
    </>
  );
}

export default App;
