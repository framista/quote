import React, { Component } from 'react'
import { Alert, Button, Form, Row } from 'react-bootstrap'

class Quote extends Component {

    render() {
        const { id, author, text, sign } = this.props;
        return (
            <>
                <Alert style={alertStyle} variant="light">
                    <h5>{text}</h5>
                    <hr />
                    <Form.Group as={Row} className="d-flex justify-content-end align-items-center">
                        <Form.Label className="mr-2">{author}</Form.Label>
                        <Button
                            onClick={this.props.modalFnc.bind(this, { id, author, text, sign })} variant="outline-primary">{sign}</Button>
                    </Form.Group>
                </Alert>
            </>
        )
    }
}

const alertStyle = {
    border: '2px solid grey',
    borderRadius: '5px',
}

export default Quote;