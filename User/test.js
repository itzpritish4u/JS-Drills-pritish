import {users} from './users.js';
import {getUsersInterestedInVideoGames, findUsersInGermany, findUsersWithMastersDegree, groupUsersByProgrammingLanguage}  from './solution.js';

// Test for getUsersInterestedInVideoGames
const testGetUsersInterestedInVideoGames = () => {
    console.log(getUsersInterestedInVideoGames(users));
    console.log(getUsersInterestedInVideoGames([]));
    console.log(getUsersInterestedInVideoGames({}));
    console.log(getUsersInterestedInVideoGames({interests:["Piano, Swimming and Reading"]}));
}

testGetUsersInterestedInVideoGames();