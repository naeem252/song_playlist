import {combineReducers} from 'redux';

const songReducer=()=>{
	return[
	  {title:'valo lage na',duration:'4.02'},
	  {title:'valovashi',duration:'3.02'},
	  {title:'come on come on',duration:'5.06'},
	  {title:'shap of you',duration:'2.00'}
	];
};

const selectedSongReducer=(selectSong=null,action)=>{
	if(action.type==='SELECT_SONG'){
		return action.payload;
	}
	return selectSong;
}

export default combineReducers({
	song:songReducer,
	selectedSong:selectedSongReducer
});