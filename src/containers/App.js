import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import '../containers/App.css'
// eslint-disable-next-line
import tachyons from 'tachyons'
import ErrorBoundry from '../components/ErrorBoundry'

import { setSearchField, requestRobots } from '../actions'



const mapStateToProps = (state, ownProps) => {
    return {
        searchField: state.searchBots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSearchChange: (event) => {
            dispatch(setSearchField(event.target.value))
        },

        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        console.log('====================================');
        console.log(robots);
        console.log('====================================');
        const filteredBot = robots.filter(bot => {
            return bot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return isPending ? <h1 className="f1 tc">Loading</h1> : (
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
