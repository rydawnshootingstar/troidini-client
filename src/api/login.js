import axios from 'axios';

export const login = (email, password) => {
	return new Promise(async (resolve, reject) => {
		try {
			const user = await axios.post(
				'http://localhost:5555/login',
				{ email, password },
				{
					withCredentials: true,
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
			reject('Incorrect Email or Password');
		}
	});
};
