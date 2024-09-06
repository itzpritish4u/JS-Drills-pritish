import { users } from './users';
// To find users who are interested in playing video games.
const getUsersInterestedInVideoGames = (users) => {
    for (let user in users) {
        if (users[user].interests && users[user].interests[0].includes("Playing Video Games")) {
            console.log(user);
        }
    }
}



