const marriageBioData = {
    name: "Somya",
    age: 25,
    city: "Delhi",
    hobbies: ["reading", "travelling", "cooking"],
    isMarried: false,
    spouse: null,
    education: {
        degree: "B.Tech",
        university: "XYZ University",
        year: 2020
    },
    workExperience: [
        {
            company: "ABC Corp",
            position: "Software Engineer",
            duration: "2 years"
        },
        {
            company: "DEF Ltd",
            position: "Senior Developer",
            duration: "1 year"
        }
    ],
}

// console.log(marriageBioData.city);
// console.log(marriageBioData['city']);

// console.log(marriageBioData.education.degree);
// console.log(marriageBioData['education']['degree']);

// const keys = Object.keys(marriageBioData);
// console.log(keys);

// console.log(Object.values(marriageBioData));

// var key = 'name';
// console.log(marriageBioData[key]);
// console.log(marriageBioData['name']);

// for(let i = 0; i < keys.length; i++) {
//     console.log(keys[i], marriageBioData[keys[i]]);
// }

for(let keyName in marriageBioData) {
    console.log(keyName);
}

for(let value of [1,2,3,4,5]) {
    console.log(value);
}


