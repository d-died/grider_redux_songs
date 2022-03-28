// this file is called index.js because it can be a shortcut
// import statement will automatically import whatever file called index.js within a directory


//Action Creator
// notice this is a NAMED export so there isn't a export default statement at the bottom of this component
export const selectSong = (song) => {
    // return an action; type is required, payload is NOT
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}


