import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

function SavedModal(props) {

    const { author, text } = props.quote
    const [show, setShow] = useState(true);

    return (
        <>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>
                        {text}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    The quote {author} was added to favourites
                </Modal.Body>
            </Modal>
        </>
    )

}

export default SavedModal;