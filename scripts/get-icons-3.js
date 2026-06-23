import * as simpleIcons from 'simple-icons';

const keys = Object.keys(simpleIcons);
console.log("Total keys:", keys.length);
console.log(keys.slice(0, 10));

const aw = keys.filter(k => k.toLowerCase().includes('aws'));
const am = keys.filter(k => k.toLowerCase().includes('amazon'));
const az = keys.filter(k => k.toLowerCase().includes('azure'));
const ms = keys.filter(k => k.toLowerCase().includes('microsoft'));

console.log("AWS:", aw);
console.log("Amazon:", am);
console.log("Azure:", az);
console.log("Microsoft:", ms);

