// keep in mind are you working with an OBJECT, ARRAY OR PRIMITIVE? --- ask yourself
// managers is an array within object COMPANY, but we added more objects within the ARRAY. Don't forget the COMMA after curly brace
let company = {
    name: `Cloudpunch`,
    yearlyRevenue: 500000000,
    ceo: `Siobhan Bonardi`,
    numberOfEmployees: 10,
    managers: [
        {
            name: `Chucky`,
            salary: 200000,
            isSenior: true,
        },
        {
            name:  `Michael`,
            salary: 150000,
            isSenior: true,
        },
        {
            name: `Jason`,
            salary: 75000,
            isSenior: false,
        },
        {
            name: `Penny`,
            salary: 100000,
            isSenior: false,
        }
    ]
};

if (company[`yearlyRevenue`] >= 1000000){
    console.log(`Congratulations ${company[`name`]} for one million! ${company[`ceo`]} ${company[`numberOfEmployees`]}`);
} else{
    console.log(`Keep going Cloudpunch, you can do it`);
}


// to go through a list 1 by 1 you ALWAYS use this loop method with counter =.... counter = counter +_ or whatever 

// the FOR LOOP is a quicker way to write the WHILE loop 

// the length can be found in debugger on the side
// length is more dynamic and you dont have to go back and change this later when new managers are added
let counter = 0;
while(counter < company[`managers`].length){
    console.log(company[`managers`][counter][`name`]);
    console.log(company[`managers`][counter][`salary`]);
    if (company[`managers`][counter][`isSenior`] === true){
        console.log("You are a senior manager.");
    }
    counter = counter +1;
}

// at the end > counter ++ is equivalent to counter +1 (same == to subtract same as -1)
// for(let counter = 0; counter < company[`managers`].length; counter = counter ++){
    // console.log(company[`managers`][counter][`name`]);
    // console.log(company[`managers`][counter][`salary`]);
// }
