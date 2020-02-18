import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Quote from './Quote';

class FavoriteQuotes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            result: [],
        }
    }

    deleteQuote(param) {
        const id = param.id
        const quotes = JSON.parse(localStorage.getItem('quotes'))
        localStorage.setItem('quotes', JSON.stringify(quotes.filter(quote => quote.id !== id)))
        window.location.reload(false);
    }

    componentDidMount() {
        const quotes = JSON.parse(localStorage.getItem('quotes')) || []
        if (quotes.length) {
            quotes.reverse()
        }
        this.setState({
            result: quotes
        })
    }

    render() {
        const quotes = this.state.result
        return (
            <Container className="mt-3">
                {quotes.length ?
                    quotes.map(quote =>
                        <Quote
                            key={quote.id}
                            author={quote.author}
                            id={quote.id}
                            text={quote.text}
                            sign="-"
                            modalFnc={this.deleteQuote}
                        ></Quote>
                    ) : <h3>You have saved no citations</h3>}
            </Container>
        )
    };
}

export default FavoriteQuotes;