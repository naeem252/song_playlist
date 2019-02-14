import React from 'react';
import {connect} from 'react-redux';

const SongDetail=(props)=>{
	const { song }=props;
	console.log(song)
		return(
          <div>
          	<div className="card">
			  <div className="card-header text-center">
                <h4>{!song ? 'Select Once!':'You Select This Song'}</h4>
			  </div>
			  <div className="card-body">
			  	<h1 className='display-4'>{!song ?null : `Title: ${song.title}`}</h1>
			  	<p className='badge badge-pill badge-warning badge-rounded p-3 leads'>{!song ? null : `Duration: ${song.duration}`}</p>
			  </div>
          	</div>
          </div>
		);
}

const mapStateToProps=(state)=>{
	// console.log(state)
	return{
		song:state.selectedSong
	}
}
export default connect(mapStateToProps)(SongDetail)