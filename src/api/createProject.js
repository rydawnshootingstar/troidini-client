import axios from 'axios';

export const createProject = (name) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios.post(
				'http://localhost:5555/projects/create',
				{ name },
				{
					withCredentials: true,
					headers: {
						// Overwrite Axios's automatically set Content-Type
						'Content-Type': 'application/json',
					},
				}
			);

			if (res.satus === 404) {
				reject('Could not create that project');
			}
			resolve(res.data);
		} catch (err) {
			reject('Could not create that project');
		}
	});
};
