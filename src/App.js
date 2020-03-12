import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products =[
    {name:"Photoshop",price:"$90.56"},
    {name:"Illustrator",price:"$40.56"},
    {name:"E-tabs",price:"$40.56"},
    {name:"E-tabs",price:"$40.56"}
  ];
 
  return (
    <div className="App">
      <header className="App-header">

        <Counter> </Counter>
        <Users></Users>
          {
            products.map(product=><Container product={product} bname="Button"></Container>)
          }

      </header>
    </div>
  );
}

function Counter(){
  const [count,setCount]=useState(10);
  const handleIncrease=()=>setCount(count+1);
  const handleDecrease=()=>setCount(count-1);
  return(
    
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={handleIncrease}>Increase</button>
      <button onMouseMove={handleDecrease}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return (
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
       {
         users.map(user=><li>{user.name}</li>)
       }

      </ul>
    </div>
  )
}

function Container(props){
  const containerStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    color:'black',
    margin:'30px',
    float:'left'
  }
  
  return (
      <div style={containerStyle}>
        
          <h3>{props.product.name}</h3>
          <h2>{props.product.price}</h2>
          <button>{props.bname}</button>
      </div>
  )
}

export default App;
