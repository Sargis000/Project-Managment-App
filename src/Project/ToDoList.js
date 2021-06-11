import React, { Component, useState} from 'react';
import CreateTask from './modals/CreateTask';

const HeaderCreateTask=()=> {
     const [modal,setModal]=useState(false);
     const[taskList,setTaskList]=useState([]);
     const toggle=()=>{
       setModal(!modal);
     }
     const saveTaske=(taskObj)=>{
       let temp =taskList;
       temp.push(taskObj);
       setTaskList(temp);
      //  setTaskList(taskList.push(taskObj));
       setModal(false);
     }
     return (
       <>
         <div className="header  text-center">
              <h2>Tasks</h2>
              <button className="btn btn-Succses mt-2" onClick={()=>(setModal(true))}>Add</button>
         </div>
         <div className="container-task">         
              {taskList.map((obj)=>{ <li>obj.name</li>})}
              {taskList.length}
         </div>
         <CreateTask toggle={toggle} modal={modal} save={saveTaske} />
         </>
     );
   }


export default HeaderCreateTask;