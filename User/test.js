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

// Test for findUsersWithMastersDegree
const testfindUsersWithMastersDegree = () => {
    console.log(findUsersWithMastersDegree(undefined));
    console.log(findUsersWithMastersDegree(users));
    console.log(findUsersWithMastersDegree(81));
    console.log(findUsersWithMastersDegree(NaN));
    console.log(findUsersWithMastersDegree({Tony:{qualification:"Diploma"}}));
    console.log(findUsersWithMastersDegree({Clark:{qualification:"Masters"}}));
}

testGetUsersInterestedInVideoGames();
testFindUsersInGermany();
testfindUsersWithMastersDegree();