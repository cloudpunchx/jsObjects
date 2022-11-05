let company = {
    name: `Cloudpunch`,
    yearlyRevenue: 500000000,
    ceo: `Siobhan Bonardi`,
    numberOfEmployees: 10,
};

if (company[`yearlyRevenue`] >= 1000000){
    console.log(`Congrats ${company[`name`]} ${company[`ceo`]} ${company[`numberOfEmployees`]}`);
} else{
    console.log(`Keep going Cloudpunch, you can do it`);
}