import {useState} from "react"
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props){
    const[modelOpen,isBackdropOpen]=useState(false)
    function isModelOpen(){
        isBackdropOpen(true)
    }

    function closeModal (){
        isBackdropOpen(false)
        
    }
    function confirmModal(){
        alert("button under progress")
        isBackdropOpen(false)
    }


    return(
    <div>
        
        <div className="card">
            <h3>{props.text}</h3>
            <div className="actions">
                <button className="btn" onClick={isModelOpen}>DELETE</button>
            </div>
        </div>
        {modelOpen && <Modal onCancel={closeModal} onConfirm={confirmModal}  />}
        {modelOpen && <Backdrop onCancel={closeModal}/>}
    </div>
    )

}
export default Todo;