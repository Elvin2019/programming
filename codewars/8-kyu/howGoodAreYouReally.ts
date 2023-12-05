export function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {
    let sum = 0;
    classPoints.forEach((point)=>{
      sum+=point;
    })
   
    var average = sum/classPoints.length;
    
    return  yourPoints > average ? true : false;
  }
