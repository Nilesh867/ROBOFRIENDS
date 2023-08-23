import React from 'react';

const Searchbox = ({searchfield,searchchange})=>{
	return(
		<div className = 'pa2'>
			<input className = 'pa3 ba b--grey bw2 bg-light-blue' type='search' placeholder='search robots'
			onChange = {searchchange}
			/>
		</div>


		);
}

export default Searchbox;

