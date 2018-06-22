import css from './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import Admin from './admin/admin';
import { querySiteName, get_as_cp, list } from './req'

if (location.pathname == '/admin.html') {
	ReactDOM.render(
		<Admin />,
		document.getElementById('Admin')
	);
} else {
	// ReactDOM.render(
	// 	<App />,
	// 	document.getElementById('Index')
	// );
	list({
		params: {
			ac: 'wap',
			count: 20,
			format: 'json_raw',
			as: 'A1350B62CCCBF2B',
			cp: '5B2C9B8F025BAE1',
			min_behot_time: 0,
			_signature: 'TDS0wgAAFxkbA.yZ24fxm0w0tN'
		}
	})

	// querySiteName({ doMain: '' })
	// 	.then(res => {
	// 		if (res.code == 0) {
	// 			// localStorage.setItem('loginfo', JSON.stringify(res.data))
	// 			ReactDOM.render(
	// 				<App />,
	// 				document.getElementById('Index')
	// 			);
	// 		} else {
	// 			// localStorage.setItem('loginfo', JSON.stringify(res.data))
	// 			// ReactDOM.render(
	// 			// 	<App />,
	// 			// 	document.getElementById('Index')
	// 			// );
	// 		}
	// 	})

}