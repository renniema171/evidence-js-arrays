// Matthew Rennie
// Web & App Dev, 29/04/24
// Evidence: JS Array Basics

// Define
const firstName = 'Matthew';
const lastName = 'Rennie';
const school = 'Elk Rapids High School'
const names = ['Lucas','Isaiah','Maddox'];
const namesPush = names;
const namesPop = names;

// Process
namesPush.push('Kaylee')
namesPop.push('Kaylee')
namesPop.pop()

// Output
console.log(`*** Script written by ${firstName} ${lastName} from ${school} ***\n

Adding Kaylee to the 'names' Array using push()\n
Added Kaylee to the 'names' Array:\n
${namesPush}\n

Removing Kaylee from the 'names' Array using pop()\n
Removed Kaylee from the 'names' Array:\n
${namesPop}\n`)
