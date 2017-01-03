import React from 'react';
import ReactDOM from 'react-dom';

import LoadTime from './components/LoadTime';
import LoadFile from './components/LoadFile';


const render = () => {
  ReactDOM.render(
		<div>
			<LoadTime />
			<LoadFile />
		</div>,
    document.getElementById('root')
  );
};

render();


