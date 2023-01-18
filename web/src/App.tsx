import { Habit } from './components/Habit'
import './App.css'

function App() {
  return (
    <>
    <Habit completed={5} />
    <Habit completed={10} />
    <Habit completed={15} />
    <Habit completed={20} />
    </>
  )
}

export default App
