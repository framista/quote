import React from 'react'
import { Spinner } from 'react-bootstrap';

function Loader() {
    return (
        <div>
            <h1 style={textStyle}>Fetching the best citations for you</h1>
            <h3 style={textStyle}>Please wait... </h3>
            <div className="d-flex justify-content-center" style={{ padding: "15px" }}>
                < Spinner animation="border" role="status" size="lg" >
                    <span className="sr-only">Loading...</span>
                </Spinner >
            </div>
        </div>
    )
}

const textStyle = {
    textAlign: "center",
    padding: "15px",
}

export default Loader;