import './App.css';
import{useState} from "react";


export default function Table() {

  const [table,setTable]=useState(0) 
  const [list,setList]=useState([])
  const loopElement=()=>{
    let newlist=[]
    for (let i=1;i<11;i++){
      newlist.push(`${table}* ${i}=${table*i}`)
      console.log(newlist)
  }
  setList(newlist)
  console.log(list)

}
return(
  <div id="box">

    <input style={{marginLeft:"40px"}} type="text" placeholder='inter the number' onChange={(e)=>{
    setTable(e.target.value) }}/>
    <button  id="Btn"onClick={loopElement}>click</button>
      {
        list.map((item,index)=>{
          return(
            <div>
              <h1 id="item">{item}</h1>
            </div>
          )
        })
      }

  </div>
)

}