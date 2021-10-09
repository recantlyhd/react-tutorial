import Backdrop from "./Backdrop";
import Modal from "./Modal";
import {useState} from "react";

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }
    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>
                    Delete
                </button>
            </div>
            {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
            {modalIsOpen && <Modal onClose={closeModalHandler} onConfirm={closeModalHandler}/>}
        </div>
    );
}

export default Todo;