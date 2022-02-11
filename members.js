const members = [{
                  firstName: "John", lastName: "Doe", jobTitle: "Software Engineer", department: "Engineering", 
                  manager: "", location: "Glasgow", firstAider: false, userSlack: "johndoe", 
                  timezone: "America/Los_Angeles"},

                  {firstName: "Jane", lastName: "Doe", jobTitle: "Software Engineer", department: "Engineering", 
                  manager: "John Doe", location: "Leeds", firstAider: false, userSlack: "janedoe", 
                  timezone: "America/Los_Angeles"},

                  {firstName: "Bob", lastName: "Doe", jobTitle: "Software Engineer", department: "Engineering", 
                  manager: "Jane Doe", location: "Cape Town", firstAider: false, userSlack: "bobdoe", 
                  timezone: "America/Los_Angeles"},

                  {firstName: "Sally", lastName: "Doe", jobTitle: "Software Engineer", department: "Engineering", 
                  manager: "Jane Doe", location: "Rome", firstAider: false, userSlack: "sallydoe", 
                  timezone: "America/Los_Angeles"
                }];

module.exports = members;

console.table(members)
