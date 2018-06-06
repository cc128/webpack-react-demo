import css from './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import Admin from './admin/admin';
import { querySiteName } from './req'
import { Button, Input } from 'antd';

if (location.pathname == '/admin.html') {
	ReactDOM.render(
		<Admin />,
		document.getElementById('Admin')
	);
} else {
	querySiteName({ doMain: '' })
		.then(res => {
			if (res.code == 0) {
				localStorage.setItem('loginfo', JSON.stringify(res.data))
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