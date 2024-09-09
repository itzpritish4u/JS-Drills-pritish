// To find users who are interested in playing video games.
export const getUsersInterestedInVideoGames = (users) => {
    if (typeof users !== 'object' || Object.keys(users).length === 0 || users === undefined) {
        return "Error: Input is either not a valid object or is empty.";
    }
    const result = [];
    for (const user in users) {
        if (users[user].interests && users[user].interests[0].includes("Video Games")) {
            result.push(user);
        }
    }
    return result;
}

// To find all users staying in Germany.
export const findUsersInGermany = (users) => {
    if (typeof users !== 'object' || Object.keys(users).length === 0 || users === undefined) {
        return "Error: Input is either not a valid object or is empty.";
    }
    const result = [];
    for (let user in users) {
        if (users[user].nationality === "Germany") {
            result.push(user);
        }
    }
    return result;
}