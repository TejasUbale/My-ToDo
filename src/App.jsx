import React from 'react'
import { useState } from 'react'

const App = () => {
 
  const [task, setTask] = useState("")
  const [desk, setDesk] = useState("")
  const [mainTask, setMainTask] = useState([])
 
  const submitHandler =(e)=>{
    e.preventDefault();
    setMainTask([...mainTask,{task,desk}])
    
    setTask("")
    setDesk("")
    console.log(mainTask)

  }

  const DeleteHandler = (i) => {
   let copyTask=[...mainTask]
   copyTask.splice(i,1)
   setMainTask(copyTask)
  }
  let renderTask = <h2>No Task Available</h2>

 if (mainTask.length > 0) {
  renderTask = mainTask.map((t,i)=>{
    return (
      <li key={i} className='flex justify-center items-center mb-5 ' >
        <div key={i} className='flex justify-between items-center  w-2/3' >
      <h5 className='text-2xl font-semibold '>{t.task}</h5>
      <h6 className='text-xl font-medium'>{t.desk}</h6>
      <button 
      onClick={()=>DeleteHandler(i)}
      className='bg-red-500 text-white text-2xl font-semibold px-4 py-2 rounded-lg ml-6 mt-4 border-none hover:bg-red-700'>Delete</button>
     </div>
      </li>
    )

  })
  
 }
 
 
  return (
    <div className='w-full h-screen'>
      <h1 className='bg-black text-4xl text-white font-semibold text-center p-6'>Tejas ToDo App</h1>
      
      <form onSubmit={submitHandler}
      className='flex items-center justify-center gap-8'
      >
      <input 
      value={task}
      onChange={(e) => setTask(e.target.value)}
      className='text-2xl font-semibold px-4 py-2 text-gray-700 rounded-lg ml-4 mt-4 border-gray-600 border-2 '
      type="text" 
      required
      placeholder='Enter Your Task Here' />

       <input 
       value={desk}
       onChange={(e) => setDesk(e.target.value)}
      className='text-2xl font-semibold px-4 py-2 text-gray-700 rounded-lg ml-4 mt-4 border-gray-600 border-2'
      type="text" 
      required
      placeholder='Enter Your Desc Here' />

      <button 
      className='bg-black text-white text-2xl font-semibold px-4 py-2 rounded-lg ml-6 mt-4 border-none hover:bg-blue-700'
      >
        Add Task
      </button>

      </form>

      <hr />

      <div className='p-8 bg-slate-200 mt-6'>
          <ul>
            {renderTask}
          </ul>
      </div>
      
      
    </div>
  )
}

export default App