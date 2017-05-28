export const AUTH_CODE_REQUIRED = 'AUTH_CODE_REQUIRED';


export function setAuthCodeRequired(state=true) {
    return {
        type: AUTH_CODE_REQUIRED,
        state: state
    }
}
