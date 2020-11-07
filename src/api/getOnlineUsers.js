import axios from 'axios';

export const getOnlineUsers = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios.get(`http://localhost:5555/users/online`, {
				withCredentials: true,
				headers: {
					// Overwrite Axios's automatically set Content-Type
					'Content-Type': 'application/json',
				},
			});

			if (res.data.onlineUsers) {
				resolve(res.data.onlineUsers);
			}
		} catch (err) {
			reject('Could not get online users');
		}
	});
};
