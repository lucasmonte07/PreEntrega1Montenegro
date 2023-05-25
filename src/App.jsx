import './App.css'
import ItemListContainer from './components/common/itemListContainer/ItemListContainer'
import NavBar from './components/pages/navbar/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={ 'Bienvenido' } />
    </>
  )
}

export default App
