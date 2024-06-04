import { useState } from "react"
import Button from "../../ui/Button"
import CreateCabinForm from "./CreateCabinForm"
import Modal from "../../ui/Modal";
import CabinTable from './CabinTable'

function AddCabin(){
    return (
    <Modal>
        <Modal.Open opens='cabin-form'>
            <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name='cabin-form'>
            <CreateCabinForm />
        </Modal.Window>

        <Modal.Open opens='table'>
            <Button>Show Table</Button>
        </Modal.Open>
        <Modal.Window name='table'>
            <CabinTable />
        </Modal.Window>
    </Modal>
    
    )
}

// function addCabin() {
//     const [isOpenModal,setIsOpenModal] = useState(false);
//     return (
//         <div>
//             <Button onClick={() => setIsOpenModal(show=>!show)}>Add New Cabin</Button>
//             {isOpenModal &&(<Modal onClose={() => setIsOpenModal(false)}><CreateCabinForm onCloseModal={() => setIsOpenModal(show=>!show)} /></Modal>)}
//         </div>
//     )
// }

export default AddCabin
