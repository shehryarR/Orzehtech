import * as simpleIcons from 'simple-icons';

const keys = Object.keys(simpleIcons);

console.log(keys.filter(k => k.toLowerCase().includes('amazon')));
console.log(keys.filter(k => k.toLowerCase().includes('azure')));
console.log(keys.filter(k => k.toLowerCase().includes('aws')));
