import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { streamers } from '../components/StreamerInfo';

class App extends Component{
    constructor(){
        super()
        this.state = {
            streamers: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        this.setState( { streamers: streamers })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render(){
        const { streamers, searchfield } = this.state;
        const filteredStreamers = streamers.filter(streamer => {
            return streamer.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return(
            <div className='tc'>
                <h1 >Streamer Socials</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList streamers={filteredStreamers}/>
                </Scroll>
            </div>
        );
    }
}

export default App;