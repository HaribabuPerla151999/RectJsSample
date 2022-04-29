function Modal(props){
    function cancelHandling(){
         props.onCancel()
    }

    function confirmHandling(){
        props.onConfirm()

    }
    return(
        <div>
            <div className="modal">
                 <h3>Are you sure?</h3>
                 <div>
                     <button className="btn btn--alt" onClick={cancelHandling}>Cancel</button>
                     <button className="btn" onClick={confirmHandling}>Confirm</button>
                 </div>

            </div>
        </div>
    )
}
export default Modal;