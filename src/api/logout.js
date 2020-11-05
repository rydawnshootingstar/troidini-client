import axios from 'axios';

export const logout = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios.get('http://localhost:5555/logout', {
				withCredentials: true,
				headers: {
					// Overwrite Axios's automatically set Content-Type
					'Content-Type': 'application/json',
				},
			});

			if (res.status === 200) {
				resolve();
			}
		} catch (err) {
			reject('No user to logout.');
		}
	});
};
