// const util = require('node:util');
// const exec = util.promisify(require('node:child_process').exec);

// async function lsExample() {
//   const { stdout, stderr } = await exec('mongosh --file insert.js --file query.js ');

//   const pattern = /\[(.*?)\]/g;
// const matches = stdout.match(/\[(.*?)\]/g);
//   console.log('stdout:', matches);
//   console.error('stderr:', stderr);
// }
// lsExample();

const text = `
[
  {
    _id: ObjectId("642f1524e9abb201cd9027dd"),
    title: 'Titanic',
    year: 1997,
    genres: [
      'Drama',
      'Romance'
    ]
  },
  {
    _id: ObjectId("642f1524e9abb201cd9027de"),
    title: 'Spirited Away',
    year: 2001,
    genres: [
      'Animation',
      'Adventure',
      'Family'
    ]
  },
  {
    _id: ObjectId("642f1524e9abb201cd9027df"),
    title: 'Casablanca',
    genres: [
      'Drama',
      'Romance',
      'War'
    ]
  },
  {
    _id: ObjectId("642f1555c21dac31f85d1bc0"),
    title: 'Titanic',
    year: 1997,
    genres: [
      'Drama',
      'Romance'
    ]
  },
  {
    _id: ObjectId("642f1555c21dac31f85d1bc1"),
    title: 'Spirited Away',
    year: 2001,
    genres: [
      'Animation',
      'Adventure',
      'Family'
    ]
  },
  {
    _id: ObjectId("642f1555c21dac31f85d1bc2"),
    title: 'Casablanca',
    genres: [
      'Drama',
      'Romance',
      'War'
    ]
  },
  {
    _id: ObjectId("642f16ec7dfec24988089ea8"),
    title: 'Titanic',
    year: 1997,
    genres: [
      'Drama',
      'Romance'
    ]
  },
  {
    _id: ObjectId("642f16ec7dfec24988089ea9"),
    title: 'Spirited Away',
    year: 2001,
    genres: [
      'Animation',
      'Adventure',
      'Family'
    ]
  },
  {
    _id: ObjectId("642f16ec7dfec24988089eaa"),
    title: 'Casablanca',
    genres: [
      'Drama',
      'Romance',
      'War'
    ]
  }
]
`

const matches = text.split('[');

console.log(matches)