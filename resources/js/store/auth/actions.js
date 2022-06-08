import actionTypes from './action-types';

/**
 * @param {string} field
 * @param {string} value
 * @returns {{field: string, type: string, value: string}}
 */
export const updateField = (field, value) => ({
    type: actionTypes.UPDATE_FORM_FIELD,
    field,
    value,
});

/**
 * @param {string} value
 * @returns {{type: string, value: string}}
 */
export const updateAction = (value) => ({
    type: actionTypes.UPDATE_ACTION,
    value,
});

const updateLocales = (locales) => ({
    type: actionTypes.UPDATE_LOCALES,
    locales,
})

export const getLoginData = () => async (dispatch) => {
    const { data } = await axios.get(route('api.get.login-data'));
    dispatch(updateLocales(data.locales));
};
