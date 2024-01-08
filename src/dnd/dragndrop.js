import {useState} from "react"
import { useRef } from "react";
import "./zoom.css"
const Images=()=>{
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [dataList1]=useState([
    "Box1","Box2","Box3","Box4","Box5","Box6","Box7","Box8","Box9"

  ])
    const [dataList,setDataList]=useState([
      "Box2","Box7","Box4","Box1","Box5","Box9","Box3","Box8","Box6"
    ])

  const handleclick1=()=>{
    for (let i = 0; i < dataList.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp=dataList[i]
      dataList[i]=dataList[j]
      dataList[j]=temp
    }
  setDataList([...dataList])
    }
    console.log(dataList);
   
    

    const dragStart = (e, position) => {
    
      dragItem.current = position;
      console.log(position);
    };
   
    const dragEnter = (e, position) => {
  
      dragOverItem.current = position;
      console.log(position);
    };
   
    const drop = (e) => {
      e.preventDefault()
      const ListItems = [...dataList];
      const dragItemList = ListItems[dragItem.current];
      ListItems.splice(dragItem.current, 1);
      ListItems.splice(dragOverItem.current, 0, dragItemList); 
      setDataList(ListItems);
      
    };
    // console.log(dataList);
    // console.log(dataList1)

    const handleclick=()=>{
      if(JSON.stringify(dataList)==JSON.stringify(dataList1)){
        alert("success")
      }else{
        alert("Drag and Drop the boxes in correct way similar to adjacent figure")
      }
    }




  return(
    <div style={{width:1000,height:560,border:"3px solid black",marginTop:20,marginLeft:190,backgroundColor:"violet",borderRadius:15}}>
    <center><h1>DRAG AND DROP</h1></center>
    <div style={{width:340,height:340,border:"4px solid black",marginTop:70,marginLeft:150,borderRadius:15}}>
    {
      dataList.map((value,index)=>{
        return (
          <div className="zoom1"
          draggable="true"
          onDragStart={(e)=>dragStart(e, index)}
          onDragEnter={(e) => dragEnter(e, index)}
          onDragEnd={drop} 
          key={index} 
          
          style={{width:100,height:100,backgroundColor:"lightblue",marginTop:10,marginLeft:10,display:"flex",float:"left",justifyContent:"center",alignItems:"center",color:"black",borderRadius:15,transition:"transform 1s"}}
          >
            
            {value}
            </div>
        )
      })

    }
    </div>
    <button onClick={handleclick} style={{backgroundColor:"#ff6347",padding:10,width:100,marginLeft:220,marginTop:10,borderRadius:20,fontSize:20}}>Confirm</button>
    <button onClick={handleclick1} style={{backgroundColor:"#ff6347",padding:10,width:100,marginLeft:15,marginTop:10,borderRadius:20,fontSize:20}}>Refresh</button>
    
    <div className="zoom">
    {
      dataList1.map((value,index)=>{
        return (
   <div style={{width:50,height:50,backgroundColor:"lightblue",display:"flex",float:"left",justifyContent:"center",alignItems:"center",borderRadius:15,margin:5}} >
        {value}  </div>
        )
      }
      )
    }
   
    </div>
    </div>
  )
}
export default Images