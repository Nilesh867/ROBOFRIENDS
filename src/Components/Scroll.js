import React from 'react';

const Scroll = (props)=> {

return  (
	<div style = {{overflowY : 'scroll', border: '2px Solid black', height: '535px'}}>

{props.children}
</div>
	);


};

export default Scroll;