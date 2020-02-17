import React, { Component } from 'react';
import axios from 'axios'
import Quote from './Quote'
import { Container } from 'react-bootstrap';

class RandomQuotes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            result: []
        }
    }

    componentDidMount() {
        axios.get("https://quote-garden.herokuapp.com/quotes/all")
            .then(res => {
                const data = res.data.results;
                const randomStart = Math.floor(Math.random() * data.length - 100);
                const randomEnd = randomStart + 30;
                this.setState({ result: data.slice(randomStart, randomEnd) })
            })
    }

    render() {
        return (
            <Container>
                {this.state.result.map(quote =>
                    <Quote
                        key={quote._id}
                        author={quote.quoteAuthor}
                        id={quote._id}
                        text={quote.quoteText}
                        sign="+"
                    ></Quote>

                )}
            </Container>
        )
    }

}

export default RandomQuotes;