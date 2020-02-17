import React from 'react'
import { Alert, Button, Form, Row } from 'react-bootstrap'

function Quote(props) {

    const { id, author, text, sign } = props;

    const alertStyle = {
        border: '2px solid grey',
        borderRadius: '5px',
    }

    return (
        <>
            <Alert style={alertStyle} variant="light">
                <h5>{text}</h5>
                <hr />
                <Form.Group as={Row} className="d-flex justify-content-end align-items-center">
                    <Form.Label className="mr-2">{author}</Form.Label>
                    <Button variant="outline-primary">{sign}</Button>
                </Form.Group>

            </Alert>
        </>
    )
}

export default Quote;