import './App.css'
import AutoComplete from './components/autocomplete'
import { useData } from './hooks/useData';
import data from './data/data.json';

function App() {

  const clickedData = (data:string) =>{
    console.log('data',data)
  }

 const { sdata, error, loading } = useData();
 console.log(error, loading)

  return (
    <div className='container'>
      
      <h1>React Autocomplete</h1>
      <div className="card">
       <AutoComplete options={data} selectedData={clickedData}></AutoComplete>
      </div>

      <h1>React Autocomplete from API</h1>
      <div className="card">
       <AutoComplete options={sdata} selectedData={clickedData}></AutoComplete>
      </div>
     
    </div>
  )
}

export default App
