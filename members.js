/*
first name ,last name ,job title         ,department  ,manager  ,location  ,first aider ,user slack ,timezone
John       ,Doe       ,Software Engineer ,Engineering ,null     ,Glasgow   ,No          ,johndoe    ,America/Los_Angeles
Jane       ,Doe       ,Software Engineer ,Engineering ,John Doe ,Leeds     ,No          ,janedoe    ,America/Los_Angeles
Bob        ,Doe       ,Software Engineer ,Engineering ,Jane Doe ,Cape Town ,No          ,bobdoe     ,America/Los_Angeles
Sally      ,Doe       ,Software Engineer ,Engineering ,Jane Doe ,Rome      ,No          ,sallydoe   ,America/Los_Angeles
*/

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
