import axios from 'axios';

export const getOrganizationByCode = (organization_code) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios.post(
				'http://localhost:5555/organizations/verify/invite',
				{ organization_code },
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
