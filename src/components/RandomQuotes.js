import React, { Component } from 'react';
import axios from 'axios'
import Quote from './Quote'
import { Container } from 'react-bootstrap';
import SavedModal from './SavedModal';
import Loader from './Loader';

class RandomQuotes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            result: [],
            show: false,
            isFetching: false,
        }
    }

    showModal = param => {
        if (param.sign === "+") {
            this.saveQuote(param)
        }
        this.setState({
            show: true
        });
        setTimeout(() => this.setState({
            show: false
        }), 1500)
    }

    saveQuote = (param) => {
        const { id, author, text } = param;
        this.setState({ quote: { id, author, text } })
        const quotes = JSON.parse(localStorage.getItem('quotes')) || []
        const quateSaved = quotes.some(quote => quote.id === id)
        if (!quateSaved) {
            quotes.push({ id, author, text })
            localStorage.setItem('quotes', JSON.stringify(quotes))
        }

    }

    componentDidMount() {
        this.setState({ isFetching: true })
        axios.get("https://quote-garden.herokuapp.com/quotes/all")
            .then(res => {
                const data = res.data.results;
                const randomStart = Math.floor(Math.random() * data.length - 100);
                const randomEnd = randomStart + 30;
                this.setState({ 
                    result: data.slice(randomStart, randomEnd), 
                    isFetching: false,
                 })
            })
    }

    render() {
        const {isFetching} = this.state;
        return (
            <Container className="mt-3">
                {this.state.show &&
                    <SavedModal quote={this.state.quote}/>
                }
                { isFetching && <Loader></Loader>}
                { !isFetching && this.state.result.map(quote =>
                    <Quote
                        key={quote._id}
                        author={quote.quoteAuthor}
                        id={quote._id}
                        text={quote.quoteText}
                        sign="+"
                        modalFnc={this.showModal}
                    ></Quote>

                )}
            </Container>
        )
    }

}

export default RandomQuotes;