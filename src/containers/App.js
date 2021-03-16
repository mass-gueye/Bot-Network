import React, { Component } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import '../containers/App.css'



class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    async componentDidMount() {
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state
        const filteredBot = robots.filter(bot => {
            return bot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ? <h1 className="f1 tc">Loading</h1> : (
            <div className="tc">
                <h1 className="f1">BOTNETWORK</h1>

                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredBot} />
                </Scroll>

            </div>
        )
    }

}

export default App
