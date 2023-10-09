export const usersReducer = (users = [], action) => {
    const {payload, type} = action;
    switch (type) {
        case "get_all":
            return payload;
        case "delete_user":
            return [...users].filter(item => item.id !== payload);
        default:
            return users;
    }
}

