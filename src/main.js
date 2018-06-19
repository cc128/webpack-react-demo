import css from './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import Admin from './admin/admin';
import { querySiteName } from './req'

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
	querySiteName({ doMain: '' })
		.then(res => {
			if (res.code == 0) {
				// localStorage.setItem('loginfo', JSON.stringify(res.data))
				ReactDOM.render(
					<App />,
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