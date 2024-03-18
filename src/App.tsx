import './App.css'
import AutoComplete from './components/autocomplete'

function App() {

  const data = [
    {
       id: 1,
       value: 'test'
    },
    {
      id: 2,
      value: 'anarakli'
   },
   {
    id: 1,
    value: 'best'
 }
];

  return (
    <div className='container'>
      
      <h1>React Autocomplete</h1>
      <div className="card">
       <AutoComplete options={data}></AutoComplete>
      </div>
      <p className="read-the-docs">
       demo
      </p>
    </div>
  )
}

export default App
