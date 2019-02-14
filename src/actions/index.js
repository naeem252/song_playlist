// create actions

export const selectSong=(song=null)=>{
	return{
		type:"SELECT_SONG",
		payload:song
	}
}