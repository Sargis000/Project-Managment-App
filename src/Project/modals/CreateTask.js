import React,{useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({modal,toggle,save}) => {
    const [taskName,setName]=useState("");
    const [summary,setSummary]=useState("");

    const handleChange=(e)=>{
        const{name,value}=e.target
        if(name==="taskName"){
            setName(value);
        }else{
            setSummary(value);
        }
    }
    const saveHandler= ()=>{
        let tempObject={};  
        tempObject.name=taskName;
        tempObject.summary=summary;
        save(tempObject);
    }
    return (
        <div>
             <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={taskName}
                         onChange={handleChange} name="taskName"/>
                    </div>
                    <div className="form-group">
                        <label>Summary</label>
                       <textarea rows="5" className="form-control" value={summary}
                        onChange={handleChange} name="summary"></textarea>
                    </div>

                </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={saveHandler}>Create</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
        </div>
    );
};

export default CreateTask;