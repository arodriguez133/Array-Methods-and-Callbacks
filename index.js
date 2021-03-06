import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final

//(b) Away Team name for 2014 world cup final

//(c) Home Team goals for 2014 world cup final


//(d) Away Team goals for 2014 world cup final

//(e) Winner of 2014 world cup final */


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(fifaData) {
  return fifaData.filter((item) =>
  {return item.Stage === 'Final'})
};



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array, getFinals) {
    return getFinals(array).map((item) => {
        return item.Year;
    })
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(array, getFinals) {
    let list = getFinals(array);
    let finalsTeamResults = list.map((e) => {
        return {
            'Home Team Name': e['Home Team Name'],
            'Home Team Goals': e['Home Team Goals'],
            'Away Team Name': e['Away Team Name'],
            'Away Team Goals': e['Away Team Goals'],
        }
    })
    let winner = finalsTeamResults.map((e) => {
        if(e['Home Team Goals'] > e['Away Team Goals']){
            return e['Home Team Name'];
        }else return e['Away Team Name'];
    })
    return winner;
    }




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, getYears, getWinners) {
    //array is the full fifa.js data. 
    // getYears(array) is an array of years of world cup finals 
    //getWinners(array) is an array of finals winners. 
    const years = getYears(array, getFinals);
    const winners = getWinners(array, getFinals);
    let string = winners.map(function(x,y){
        return `In ${years[y]}, ${x} won the world cup!`;
    })
    return string;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(getFinals) {
   let data = getFinals;
  //reference back to this and put it through the debugger. Really put effort in understanding how this works as a solution. 
  // data is a reference to the parameter getFinals
  // getFinals is an array of objects of world cup finals
  //copied data is a reference to a function applied to data that iterates over the array. 
  //This is where is gets tricky... does "e" get assigned to each object within the array?
/* Lets say that's what "e" does. I returned an object with named keys that I set... then the values I 
asked for are the property names within each index. If that's the case, then isn't setting the property that is being evaluated
to names keys a little redundant? How could I fix this... 
 */
   const getCopyOfGoals = data.map((e) =>{
       return {
           'Home Team Goals': e['Home Team Goals'],
           'Away Team Goals': e['Away Team Goals'],
       }
   })
    const homeGoals = getCopyOfGoals.map((index) => {
           return index['Home Team Goals'];
       })
    const awayGoals = getCopyOfGoals.map((index)=> {
        return index['Away Team Goals'];
    })
    const reducer = (acc, val) => acc + val;
    const sumOfHomeGoals = homeGoals.reduce(reducer, 0);
    const sumOfAwayGoals = awayGoals.reduce(reducer,0);
    
//I give up... 
    
}




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
