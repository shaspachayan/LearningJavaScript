//object destructuring

const band = {

    bandName: "led zepplin",
    famousSong: "stairway to heaven",
}

// we can always destructure object set. 



// process: 01 // one of the old fashioned method
// let bandName1 = band.bandName;
// const famousSong1 = band.famousSong;
// bandName1 = "queen";
// console.log(bandName1, famousSong1); //queen stairway to heaven


// process: 02 // we can write the above code in one line: 
const { bandName, famousSong } = band; // it creates 2 keys(bandName and famousSong) like previous and each key is assigned by the corresponding values from  the band
//simple nah :))
