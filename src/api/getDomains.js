import axios from 'axios';

export const getDomains = (id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios.get(`http://localhost:5555/domains/${id}`, {
				withCredentials: true,
				headers: {
					// Overwrite Axios's automatically set Content-Type
					'Content-Type': 'application/json',
				},
			});

			if (res.data.domains) {
				resolve(res.data.domains);
			}
		} catch (err) {
			reject('Could not get domains for this project');
		}
	});
};
