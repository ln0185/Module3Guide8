// Create an array of contacts
var contactList = [
    {
        name: "Einar Einarsson",
        age: 30,
        email: "einar.einarsson@example.com",
        phone: "777-1234",
        address: {
            street: "Fjólugata 14",
            city: "Reykjavík",
            postalCode: "101"
        },
    },
    {
        name: "Heiða Marteinsdóttir",
        age: 28,
        email: "heida.marteins@example.com",
        phone: "818-5678",
        address: {
            street: "Seilugrandi 6",
            city: "Reykjavík",
            postalCode: "107"
        }
    },
    {
        name: "Hannes Jonsson",
        age: 35,
        email: "Hannes.jonsson@example.com",
        phone: "717-9012",
        address: {
            street: "Grettisgata 77",
            city: "Reykjavík",
            postalCode: "101"
        },
    }
];
// Remove properties from the object
//delete contactList[0-2].phone;
console.log("Contact details without phone numbers:", contactList);
// Output: will display the contact list without phone numbers
// Add properties to the object
contactList[1].nationality = "Icelandic";
console.log("Contact details with nationality of Heiða:", contactList);
// Output: will display nationality: "Icelandic" in contact 1 in the contact list
//it actually took me a hot minute to figure this out: how to add a property inside the contact list but to a specific contact in it. I added the property nationality to the second contact so [1] (index)
// Output specific properties
console.log("the age of each contact:", contactList[0].age, contactList[1].age, contactList[2].age); // Output: the age of each contact: 30, 28, 35
//it also took quite some time to be able to select all the index numbers I wanted, there might be a more efficient way to select them
// Demonstrate variable assignments
var age1 = contactList[0].age; //in the contact list his age is 30
var age2 = contactList[1].age; //in the contact list her age is 28
var age3 = contactList[2].age; //in the contact list his age is 35
// Output the result of arithmetic operations
var sum = age1 + age2 + age3;
console.log("Sum of everyone's age:", sum); // Output: Sum of everyone's age  93
var difference = age1 - age2;
console.log("Difference of years between age of contact 1 and contact 2 =", difference); // Output: Difference: 2
// Output the result of string concatenations (chain of string characters)
var greeting = "Hello, " + contactList[0].name + "!";
console.log(greeting); // Output: Hello, Einar Einarsson!
// Demonstrate the usage of if statements to check for truthy or falsy values
if (contactList[0].age > 18) {
    console.log(contactList[0].name + " is an adult."); // Output: Einar Einarsson is an adult.
}
else {
    console.log(contactList[0].name + " is not an adult.");
}
// Output the number of items in that array using the length property
console.log("Number of contacts:", contactList.length); // Output: Number of contacts: 3
// Output the date and time of opening of the file using Date()
var currentDate = new Date();
console.log("Current Date and Time:", currentDate); // Output: <current date and time>
// Enable strict mode to catch common errors
"use strict";
