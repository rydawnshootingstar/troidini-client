import axios from 'axios';

export const getProjects = (organizationId) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios.post(
				'http://localhost:5555/projects/verify/invite',
				{ organization_id: organizationId },
				{
					headers: {
						// Overwrite Axios's automatically set Content-Type
						'Content-Type': 'application/json',
					},
				}
			);

			if (res.data.organization_id) {
				resolve(res.data.organization_id);
			}
		} catch (err) {
			reject('No organization found with this code.');
		}
	});
};
