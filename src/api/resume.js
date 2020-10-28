import axios from 'axios';

export const resume = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios.get('http://localhost:5555/resume', {
				withCredentials: true,
				headers: {
					// Overwrite Axios's automatically set Content-Type
					'Content-Type': 'application/json',
				},
			});

			if (res.data) {
				resolve({ ...res.data });
			}
		} catch (err) {
			reject('Invalid session.');
		}
	});
};
