/**
 * Pizza delivery prompt example
 * run example by writing `node pizza.js` in your console
 */

'use strict';
var inquirer = require('inquirer');
console.log('Welcome to OOMPH Course Sequencer');

var questions = [

  
  // {
  //   type: 'list',
  //   name: 'Fall 1a',
  //   message: 'Select your first Fall 1 course',
  //   choices: ['No Course', 'Course 1', 'Course 2', 'Course 3'],
  //   filter: function (val) {
  //     return val.toLowerCase();
  //   },
  // },
  // {
  //   type: 'list',
  //   name: 'Fall 1b',
  //   message: 'Select your second Fall 1 course',
  //   choices: ['No Course', 'Course 1', 'Course 2', 'Course 3'],
  //   filter: function (val) {
  //     return val.toLowerCase();
  //   },
  // },
  
  {
    type: 'expand',
    name: 'Fall 1a',
    message: 'Select your first Fall 1 course (Press Enter to expand)',
    choices: [
      {
        key: 'a',
        name: 'Course 1; Units:3',
        value: 'Course 1; Units:3',
      },
      {
        key: 'b',
        name: 'Course 2; Units:3',
        value: 'Course 2; Units:3',
      },
      {
        key: 'c',
        name: 'Course 3; Units:6',
        value: 'Course 3; Units:6',
      },
      {
        key: 'z',
        name: 'No Course; Units:0',
        value: 'No Course; Units:0',
      },
    ],
  },
  {
    type: 'expand',
    name: 'Fall 1b',
    message: 'Select your second Fall 1 course (Press Enter to expand)',
    choices: [
      {
        key: 'a',
        name: 'Course 1; Units:3',
        value: 'Course 1; Units:3',
      },
      {
        key: 'b',
        name: 'Course 2; Units:3',
        value: 'Course 2; Units:3',
      },
      {
        key: 'c',
        name: 'Course 3; Units:6',
        value: 'Course 3; Units:6',
      },
      {
        key: 'z',
        name: 'No Course; Units:0',
        value: 'No Course; Units:0',
      },
    ],
  },   
  
];

inquirer.prompt(questions).then((answers) => {
  console.log('\nSequence:');
  var temp=(JSON.stringify(answers, null, '  '))
  console.log(JSON.stringify(answers, null, '  '));
  //var res = temp.split(":");
  //console.log(res);
  
});
