import axios from 'axios';

export const getProjects = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios.get(`http://localhost:5555/projects`, {
				withCredentials: true,
				headers: {
					// Overwrite Axios's automatically set Content-Type
					'Content-Type': 'application/json',
				},
			});

			if (res.data.projects) {
				resolve(res.data.projects);
			}
		} catch (err) {
			reject('Could not get projects for this organization');
		}
	});
};
