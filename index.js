// code your solution here
let saturdayFun = function(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  let mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  let wrapAdjective = function(delimiter) {
    return function(adjective) {
      return `You are ${delimiter}${adjective}${delimiter}!`;
    };
  }
    



