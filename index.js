function distanceFromHqInBlocks(street){
if (street < 42){
  return 42 - street;
  } else{
    return street - 42;
  }
}

function distanceFromHqInFeet(street){
  return distanceFromHqInBlocks(street)*264;
}

function distanceTravelledInFeet(start, end){
  if (start > end){
    return (start - end) * 264;
  }
    else {
      return (end - start) * 264;
    }
}
function calculatesFarePrice(start, destination){
  let trip = distanceTravelledInFeet(start, destination);
  if (trip <=400){
    return 0;
  } else if (trip > 400 && trip <= 2000){
    return (trip - 400) * .02;
  } else if (trip >=2000 && trip <= 2500){
    return 25;
  } else if (trip > 2500){
    return 'cannot travel that far';
  }
}  
  



















// function distanceFromHqInBlocks(street){
//   if(street < 42){
//     return 42 - street;
//   } else {
//     return street - 42;
//   }
// }

// function distanceFromHqInFeet(street){
//   return distanceFromHqInBlocks(street) * 264;
// }

// function distanceTravelledInFeet(x, y){
//   if(x > y){
//     return (x - y) * 264;
//   } else {
//     return (y - x) * 264;
//   }
// }

// function calculatesFarePrice(start, end){
//   let distance;

//   if(start > end){
//     distance = (start - end) * 264;
//   } else {
//     distance = (end - start) * 264;
//   }

//   switch(true){
//     case distance < 400:
//       return 0;
//     case distance > 400 && distance <= 2000:
//       return (distance - 400) * 0.02;
//     case distance > 2000 && distance < 2500:
//       return 25;
//     default:
//       return 'cannot travel that far'
//   }
// }
