// code your solution here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (function (mondayAct = "go to the office") {
    return `This Monday, I will ${mondayAct}.`;
});

// const wrapAdjective = function (flair = '*') {
//     return function (adjective = 'special') {
//         return 'You are ${flair} ${adjective} ${flair}!';
//     }
// }; gotta practice some more

function wrapAdjective(flair = "*") {
     return function (adjective = "special"){
        return `You are ${flair}${adjective}${flair}!`
    }
};