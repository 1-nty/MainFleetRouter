////Look into Angular Google Maps (AGM) package
//// Req(math,AGM)


  //Example new Object
const weekDay = function(){
  //Object Properties
  const names = [/*weekdayName*/];
  //Object Methods in return
  return {
    name(number){/*functionLine*/},
    number(name){/*functionLine*/},
  };
};
const time = [Date.now(),new Date()]

let gasPrice 


//const func= function that ties rng1-rng2
let CarNav = function(){
  const startTiktok = new Date();
  let time = 0;
  setInterval(function() { 
    time = Date.now();
    console.log(time)
  }); // asynchronous code for constancy
  let timeScale = 0;///function...eg..collected from maps
  const currLoc = 0;// or retriverFunction
  const range = [1,2,3];// send(currLoc) like // (list/object of coordinates)=>3rdPService{};
  return{
    pathToOtherRange(RngTo){ //just a console.log(thing)
      pathStats = {
        path:
          [
            math.add(range[RngTo]/*pathToSplineMapObj*/,currLoc)
            ,startTiktok
            ,
          ]
        ,gasMilageCost:
          0//{gmaps.Dist(currLoc,range)*gasPrice/mile}
        ,MilageCost:
          0//{gmaps.Dist(currLoc,range)*Price/mile}
        ,
        
      },
      
      //print map to screen
      console.log( `${pathStats.path}`  )
      //return math.add( currLoc,range[RngTo])
      
    
    } // grabs pathway from somewhere returns spline
  };
}();

/* *******function to alter timeScale(){}******
*/





CarNav.pathToOtherRange(0)
console.log(time)

