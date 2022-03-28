import { combineReducers } from 'redux'


const songsReducer = () => {
    // this example is a little bit of overkill since its a static array, but it works
    return [
       { title: 'Toxic', duration: '3:40' },
       { title: 'Bing bing bong', duration: '3:50' },
       { title: 'heheheheh', duration: '3:78' },
       { title: 'Hey Macarena', duration: '4:20' } 
    ]
}

const selectedSongReducer = (selectedSong = null, action) =>{
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
