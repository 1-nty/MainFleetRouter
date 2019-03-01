const weekDay = function(){
  const names = [/*weekdayName*/];
  return {
    name(number){/*functionLine*/},
    number(name){/*functionLine*/},
  };
}

//const func= function that ties rng1-rng2

const CarNav = function(){
  const currLoc = 1
  const range = [1,2,3];
  return{
    pathToOtherRange(RngTo){
      return math.add( [currLoc,range[RngTo]])
    }
  };
}();


console.log(CarNav.pathToOtherRange(0))
