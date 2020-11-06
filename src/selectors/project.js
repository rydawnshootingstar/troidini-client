import * as R from 'ramda';

export const getProjectByName = (state, name) => {
	return R.prop(name, state.projects);
};

// get a single project
// export const getProject = (state, name) => {
// 	const activeCategoryIdExists = getActiveCategoryId(ownProps);

// 	const phones = R.compose(
// 		R.filter(applySearch),
// 		R.when(R.always(activeCategoryIdExists), R.filter(applyCategory)), // when the function returns true, apply the filter
// 		R.map((id) => getPhoneById(state, id))
// 	)(state.phonesPage.ids);

// 	return phones;
// };
