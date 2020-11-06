import axios from 'axios';

export const getInitiatives = (id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios.get(`http://localhost:5555/initiatives/${id}`, {
				withCredentials: true,
				headers: {
					// Overwrite Axios's automatically set Content-Type
					'Content-Type': 'application/json',
				},
			});

			if (res.data.initiatives) {
				resolve(res.data.initiatives);
			}
		} catch (err) {
			reject('Could not get initiatives for this project');
		}
	});
};
