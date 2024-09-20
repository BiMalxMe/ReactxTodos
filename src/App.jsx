import { useState } from 'react';
import './App.css';

function App() {
  const [todo, settodos] = useState([
    {
      title: 'Go To Gym',
      description: 'Go to gym from 9 to 5',
      completed: true,
    },
    {
      title: 'Learn Coding',
      description: 'Learn React from nine to five',
      completed: false,
    },
  ]);
  console.log(settodos)
  function addTodos(){
    settodos([...todo,{
      title:"watch Movie",
      description:'Watch any movie from the 17th century'
    }])
  }
  return (
    <div> 
      <button onClick={addTodos}>Click Here to add Todos</button>
      {todo.map(function(singletodos){
        return <Todo title={singletodos.title} description={singletodos.description}/>
      })}
     </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;
