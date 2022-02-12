/**
 * @description
 * A script for displaying information about coworkers
 * Can be called by running `npm start {command}` in the terminal
 *
 * @example
 * `npm start list`
 * Running this command will call the `runListCommand` function
 */

// The {command} the user types in the terminal e.g. "list"
const command = process.argv[2];

// The array of members that you defined in the previous task
const members = require("./members");

if (command === "list") {
  runListCommand();
} else {
  console.log(`Command "${command}" not found. Try "list" instead.`);
}

function runListCommand() {
  // Replace this with your implementation
  let seniorMgs,seniorName,managers,managerName,personnel,theFirstAiders;

  console.log('\n');

  // SHOW WHO IS/ARE THE SENIOR MANAGER(S)

  seniorMgs = members.filter(element => !element.manager)
  if (!seniorMgs.length)
  {
       console.log("There appears to be a problem with the members data");
       console.log("Cannot determine any senior management");
       return;
  }      

  if (seniorMgs.length === 1)
        console.log("The Senior Manager is:\n")
  else
        console.log("The Senior Managers are:\n");
  
  for (let person of seniorMgs)
  {
        display_info(1,person);
  }

   // SHOW WHO ARE THE MANAGERS  

  for (let person of seniorMgs)
  {
        seniorName = `${person.firstName} ${person.lastName}`;
        managers = members.filter(element => element.manager === seniorName);
        if (managers.length > 0)
        {
            console.log("The following managers report to: " + seniorName + "\n")
            for (let aManager of managers)
            {
                display_info(2,aManager);
            }

  // SHOW ALL OTHER PERSONNEL
 
            for (let aManager of managers)
            {
                managerName = `${aManager.firstName} ${aManager.lastName}`;
                personnel = members.filter(element => element.manager === managerName);
                if (personnel.length > 0)
                {
                    console.log("The following personnel report to: " + managerName + "\n");
                    for (let person of personnel)
                    {             
                        display_info(3,person);
                    }
                }
            }
        }    
  }

  // SHOW THE FIRST AIDERS

  theFirstAiders = members.filter(element => element.firstAider);
  if (theFirstAiders.length === 0)
  {
        console.log("The company has no First Aid personnel");
        return;
  }

  
  if (theFirstAiders.length === 1)
        console.log("The First Aider is:\n")
  else
        console.log("The First Aiders are:\n");
  for (let person of theFirstAiders)
  {
        display_info(1,person);
  }
}

function display_info(numTabs,person) {
  let tabString = '\t'.repeat(numTabs);
  console.log(`${tabString}Name: ${person.firstName} ${person.lastName}`);
  console.log(`${tabString}Slack User Name: ${person.userSlack}`);
  console.log(`${tabString}Job Title: ${person.jobTitle}`);
  console.log(`${tabString}Department: ${person.department}`);
  console.log(`${tabString}Location: ${person.location}`);
  console.log(`${tabString}Time Zone: ${person.timezone}`);
  console.log('\n');
}