import React from "react"
import { connect } from 'react-redux'

class SongList extends React.Component {

    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={ song.title }>
                    <div className="right floated content">
                        <button className="ui button primary">
                            Select
                        </button>
                    </div>

                    <div className='content'>{ song.title }</div>
                </div>
            )
        })
    }

    render() {
        
        return <div className="ui divided list"> { this.renderList() } </div>
    }
}

// this is a STANDARD name for this function
// we're going to take state object and run some computation that allows us to render data within a component
const mapStateToProps = (state) => {
    return { songs: state.songs }
}


// about this syntax: connect is a function that comes from React/Redux, and then we're just calling SongList 
export default connect(mapStateToProps)(SongList)