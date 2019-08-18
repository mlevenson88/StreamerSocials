import React, { Component } from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { streamers } from '../components/StreamerInfo';

import { setSearchField } from '../actions'

const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component{
    constructor(){
        super()
        this.state = {
            streamers: []
        }
    }

    componentDidMount() {
        this.setState( { streamers: streamers })
    }

    render() {
        const { streamers } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredStreamers = streamers.filter(streamer => {
            return streamer.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return(
            <div className='tc'>
                <h1>Streamer Socials</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList streamers={filteredStreamers}/>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);