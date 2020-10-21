import axios from 'axios';

export const checkEmail = (email) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios.post(
				'http://localhost:5555/users/check',
				{ email },
				{
					headers: {
						// Overwrite Axios's automatically set Content-Type
						'Content-Type': 'application/json',
					},
				}
			);

			if (res.status === 200) {
				resolve(true);
			}
			// if (res.status === 409) {
			// 	reject();
			// }
		} catch (err) {
			reject('A user with this email already exists.');
		}
	});
};
