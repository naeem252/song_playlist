import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'


class SongList extends Component{
	render(){

		const {songs,selectSong}=this.props;
		
		const listItem=songs.map((song,key)=>{
			return(
                  <li key={key} className="list-group-item d-flex justify-content-between text-capitalize">
					<h3>{song.title}</h3>
					<button onClick={()=>selectSong(song)} className="btn btn-success">Select</button>
                  </li>
				);
		});

		return(
			<div>
				<ul className="list-group">
					{listItem}
				</ul>
			</div>	

			);
	}
}

const mapStateToProps=(state)=>{
	
	return {
		songs:state.song
	};
}
export default connect(mapStateToProps,{
	selectSong
})(SongList);