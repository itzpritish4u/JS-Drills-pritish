import {users} from './users.js';
import {getUsersInterestedInVideoGames, findUsersInGermany, findUsersWithMastersDegree, groupUsersByProgrammingLanguage}  from './solution.js';

// Test for getUsersInterestedInVideoGames
const testGetUsersInterestedInVideoGames = () => {
    console.log(getUsersInterestedInVideoGames(users));
    console.log(getUsersInterestedInVideoGames([]));
    console.log(getUsersInterestedInVideoGames({}));
    console.log(getUsersInterestedInVideoGames({interests:["Piano, Swimming and Reading"]}));
}

// Test for findUsersInGermany
const testFindUsersInGermany = () => {
    console.log(findUsersInGermany(users));
    console.log(findUsersInGermany(users.Ron));
    console.log(findUsersInGermany({nationality:"Japan"}));
    console.log(findUsersInGermany({Ezekiel: {nationality:"Germany"}}));
}

testGetUsersInterestedInVideoGames();
testFindUsersInGermany();