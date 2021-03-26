import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import '../containers/App.css'
// eslint-disable-next-line
import tachyons from 'tachyons'
import ErrorBoundry from '../components/ErrorBoundry'
import axios from 'axios';
import { setSearchField } from '../actions'


const mapStateToProps = (state, ownProps) => {
    return {
        searchField: state.searchField
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSearchChange: (event) => {
            dispatch(setSearchField(event.target.value))
        }
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => response.data)
            .then(users => this.setState({ robots: users }))

    }


    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredBot = robots.filter(bot => {
            return bot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !robots.length ? <h1 className="f1 tc">Loading</h1> : (
            <div className="tc">
                <h1 className="f1">BOTNETWORK</h1>

                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredBot} />
                    </ErrorBoundry>
                </Scroll>

            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
