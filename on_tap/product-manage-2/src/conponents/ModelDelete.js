import {Button, Modal} from 'react-bootstrap';
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {deleteType} from "../service/TypeService";
import * as TypeService from "../service/TypeService";

export const ModelDelete = (props) => {
    const navigate = useNavigate();

    const {id, show, handleClose} = props;
    const handleDelete = async () => {
        await TypeService.deleteType(id);
        handleClose();
        navigate("/");
        toast("deleted")
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có muốn xóa không?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}





