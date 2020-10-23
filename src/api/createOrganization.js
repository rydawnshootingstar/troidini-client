import axios from 'axios';

export const createOrganization = (organizationData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios.post(
				'http://localhost:5555/organizations/create',
				{ ...organizationData },
				{
					headers: {
						// Overwrite Axios's automatically set Content-Type
						'Content-Type': 'application/json',
					},
				}
			);

			if (res.data) {
				resolve(res.data);
			}
		} catch (err) {
			reject('Could not create that organization');
		}
	});
};
