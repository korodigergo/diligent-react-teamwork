import Header from "./components/Header"
import TodoList from "./components/TodoList"

const App = () => {
  return (
    <main className="bg-slate-200 h-[100vh] w-[100vw] flex flex-col justify-start items-center">
      <Header/>
      <TodoList/>
    </main>
  )
}

export default App