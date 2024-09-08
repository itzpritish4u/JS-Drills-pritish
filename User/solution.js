// To find users who are interested in playing video games.
const getUsersInterestedInVideoGames = (users) => {
    const result = [];
    for (let user in users) {
        if (users[user].interests[0].includes("Playing Video Games")) {
            result.push(user);
        }
        return result;
    }
}

// To find all users staying in Germany.
const findUsersInGermany = (users) => {
    const result = [];
    for (let user in users) {
        if (users[user].nationality === "Germany") {
            result.push(user);
        }
    }
    return result;
}

// To find all users with masters Degree.
const  findUsersWithMastersDegree = (users) => {
    const result = [];
    for (let  user in users) {
        if (users[user].qualification === "Masters") {
            result.push(user);
        }
    }
    return result;
}

// To group users based on their Programming language mentioned in their designation.
const groupUsersByProgrammingLanguage = (users) => {
    const result = {
        Java: [],
        Python: [],
        JavaScript: [],
        Golang: [],
        OtherDeveloper: []
    }
    for (let user in users) {
        if (users[user].designation.toLoweCase().includes("python")) {
            result.Python.push(user);
        }  else if (users[user].designation.toLoweCase().includes("java")) {
            result.Java.push(user);
        } else if (users[user].designation.toLoweCase().includes("javascript")) {
            result.JavaScript.push(user);
        } else if (users[user].designation.toLoweCase().includes("golang")) {
            result.Golang.push(user);
        } else {
            result.OtherDeveloper.push(user);
        }
    }
    return result;
}