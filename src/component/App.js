import React from 'react';

import SongList from './SongList';
import SongDetail from './SongDetail';

const App=(props)=>{
	return(
		  <div className='container'>
		  <div className="row mt-4">
			<div className="col-md-7">
	          <SongList/>
			</div>
			<div className="col-md-5">
              <SongDetail/>
			</div>
		  </div>
		  </div>
		);
}
export default App;