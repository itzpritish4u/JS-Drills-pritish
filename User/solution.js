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

// To find all users with masters Degree.
export const findUsersWithMastersDegree = (users) => {
    if (typeof users !== 'object' || Object.keys(users).length === 0 || users === undefined) {
        return "Error: Input is either not a valid object or is empty.";
    }
    const result = [];
    for (let user in users) {
        if (users[user].qualification === "Masters") {
            result.push(user);
        }
    }
    return result;
}

// To group users based on their Programming language mentioned in their designation.
export const groupUsersByProgrammingLanguage = (users) => {
    if (users === undefined || typeof users !== 'object' || Object.keys(users).length === 0) {
        return "Error: Input is either not a valid object or is empty.";
    }
    
    const result = {
        Java: [],
        Python: [],
        JavaScript: [],
        Golang: [],
        Others: []
    }

    for (const user in users) {
        if (users[user].designation) {
            if (users[user].designation.toLowerCase().includes("golang")) {
                result.Golang.push(user);
            } else if (users[user].designation.toLowerCase().includes("javascript")) {
                result.JavaScript.push(user);
            } else if (users[user].designation.toLowerCase().includes("python")) {
                result.Python.push(user);
            } else if (users[user].designation.toLowerCase().includes("java")) {
                result.Java.push(user);
            } else {
                result.Others.push(user);
            }
        }   
    }

    return result;
}