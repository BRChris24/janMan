// No.1 create a class that has class/static propertie and method
class movie{
    constructor(id, title, totalmovie)
    const sum = this.sum.id
    this.title = title;
    this.totalmovie = totalmovie
    this.availablemovie = availablemovie
}
class user{
    constructor(name){
        this.name = name;
    }
}

class moviestore{
    constructor(){
        this.movie = [];
        this.user = {};
    }
}



//  No.2 measure of central tendency
function maen(arr){
let sum = 0
for (let num of arr) {
    sum += num;
}
return Math.floor(sum / arr.length);
}

function median(arr){
    arr = arr.sort((a,b) => a - b);
   if (arr.length % 2 !== 0){
    return arr[math.floor(arr.length/ 2)];
   } else {
    let mid1 = arr[arr.length / 2]
    let mid2 = arr[arr.length / 2 - 1]
    return (mid1 + mid2) / 2;
   }
}

function mode(arr){
    const arrObj = {}
    arr.forEach(elem =>{
        if(!arrObj[elem]) arrObj[elem = 0]
        arrObj[elem]++
    });

    let result = []
    let max = 0
}

    for(let key in arrObj) {
        if(arrObj[key] > max) {
            result = [key]
            max = arrObj[key]
        } else if (arrObj[key] === max) {
            result.push[key]
        }
    }