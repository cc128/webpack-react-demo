import css from './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/login'
import {Index} from './router'

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
	// list({
	// 	params: {
	// 		tag: 'news_world',
	// 		ac: 'wap',
	// 		count: 20,
	// 		format: 'json_raw',
	// 		as: 'A145DB3371ACACC',
	// 		cp: '5B31ACCA1C9CAE1',
	// 		min_behot_time: 0,
	// 		_signature: 'pmsoBgAA.WnxXGBdl6VmrqZrKB'
	// 	}
	// })

	querySiteName({ doMain: '' })
		.then(res => {
			if (res.code == 0) {
				// localStorage.setItem('loginfo', JSON.stringify(res.data))
				ReactDOM.render(
					<Index />,
					document.getElementById('Index')
				);
			} else {
				// localStorage.setItem('loginfo', JSON.stringify(res.data))
				// ReactDOM.render(
				// 	<App />,
				// 	document.getElementById('Index')
				// );
			}
		})

}