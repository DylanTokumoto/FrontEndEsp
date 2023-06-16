import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import Form from "./components/form";

function App() {

  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => state.tasks);

  return (
    <>
      <main className="flex w-full h-full font-poppins">
        <div className="bg-blue-950 h-[100vh] w-[30vw] flex items-center justify-center">
        <Form />
        </div>
        <div className=" flex justify-center w-[70vw] bg-slate-700 p-4">
        <ul>
          {tasks.map((task, idx) => (
            <li key={idx}>
              <div className="bg-white p-3 w-[40vw] h-[30vh]">
                <div className="flex justify-around items-center">
                <h1 className="text-2xl">{task.title}</h1>
                <h3 className="font-bold">{task.date}</h3>
                <button
                  className="bg-red-600 text-white font-thin p-1"
                  onClick={() => dispatch({ type: "REMOVE_TASK", payload: { idx: idx } })}>
                  Remover
                </button>
                </div>
                <p>{task.description}</p>
                <p className="font-bold my-3">categoria: {task.category}</p>
                
                
              </div>

            </li>
          ))}
        </ul>
        </div>
      </main>
    </>
  )
}

export default App
