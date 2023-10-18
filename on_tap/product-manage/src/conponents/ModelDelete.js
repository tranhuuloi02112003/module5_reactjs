import {Button, Modal} from 'react-bootstrap';
import * as ProductService from "../service/ProductService";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

export const ModelDelete = (props) => {
    const navigate = useNavigate();

    const {id, show, handleClose} = props;
    const handleDelete = async () => {
        await ProductService.deleteProduct(id);
        // eslint-disable-next-line no-unused-expressions
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





