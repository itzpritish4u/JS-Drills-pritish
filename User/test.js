import {users} from './users.js';
import {getUsersInterestedInVideoGames, findUsersInGermany}  from './solution.js';

// Test for getUsersInterestedInVideoGames
const testGetUsersInterestedInVideoGames = () => {
    console.log(getUsersInterestedInVideoGames(users));
}

testGetUsersInterestedInVideoGames();
