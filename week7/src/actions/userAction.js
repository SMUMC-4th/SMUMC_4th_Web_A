export function registerUser(userData) {

    return {
        type: "REGISTER_USER",
        payload: userData,
    }
}