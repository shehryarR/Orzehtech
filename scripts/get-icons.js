import * as simpleIcons from 'simple-icons';

const icons = [
  'siAmazonwebservices',
  'siSnowflake',
  'siMicrosoftazure',
  'siDatabricks',
  'siOdoo',
  'siGooglecloud'
];

icons.forEach(name => {
  if (simpleIcons[name]) {
    console.log(`--- ${name} ---`);
    console.log(simpleIcons[name].svg);
  } else {
    console.log(`--- ${name} NOT FOUND ---`);
  }
});
