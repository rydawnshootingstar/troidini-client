import axios from 'axios';

export const register = (userData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const user = await axios.post(
				'http://localhost:5555/users/create',
				{ ...userData },
				{
					headers: {
						// Overwrite Axios's automatically set Content-Type
						'Content-Type': 'application/json',
					},
				}
			);

			if (user) {
				resolve({ ...user.data });
			}
		} catch (err) {
			reject('Could not register this user');
		}
	});
};
