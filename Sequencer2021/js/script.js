// Returns what the user selected for starting term
function getStartingTerm() {
  var startingTerm = document.getElementById("startingTerm");
  return startingTerm.value;
}

// Returns what the user selected for the starting year
function getStartingYear() {
  var startingYear = document.getElementById("startingYear");
  return startingYear.value;
}

// Returns what the user selected for the concentration
function getConcentration() {
  var concentration = document.getElementById("concentration");
  return concentration.value;
}

// Updates the page based on user input
function updatePage() {
  // checker to see if input is a valid starting date
  if (getStartingTerm() == 2 && getStartingYear() == 1) {
    var changeTerm = document.getElementById("error");
    changeTerm.innerHTML = "Please select an option for the upcoming or future semesters.";
    changeTerm.value = 1;
    clearDates();
    clearOptions();
  } else {
    if (document.getElementById("error").value == 1) {
      var changeTerm = document.getElementById("error");
      changeTerm.innerHTML = "";
    }
    changeTerms(getStartingTerm());
    changeDates(getStartingTerm(), getStartingYear());
    changeMenus(getConcentration(), getStartingTerm());
  }
}

// Changes the semesters on the page
function changeTerms(choice) {
  const yearOne = ["nameOneOne", "nameOneTwo", "nameOneThree", "nameOneFour", "nameOneFive", "nameOneSix", "nameOneSeven", "nameOneEight", "nameOneNine", "nameOneTen"];
  const yearTwo = ["nameTwoOne", "nameTwoTwo", "nameTwoThree", "nameTwoFour", "nameTwoFive", "nameTwoSix", "nameTwoSeven", "nameTwoEight", "nameTwoNine", "nameTwoTen"];
  const yearThree = ["nameThreeOne", "nameThreeTwo", "nameThreeThree", "nameThreeFour", "nameThreeFive", "nameThreeSix", "nameThreeSeven", "nameThreeEight", "nameThreeNine", "nameThreeTen"];
  const terms = ["Fall 15", "Fall 15", "Fall 1", "Fall 2", "Spring 15", "Spring 15", "Spring 1", "Spring 2", "Summer 1", "Summer 2"];
  const start = (choice - 1) * 4;

  for (let i = 0; i < 10; i++) {
    var changeTerm = document.getElementById(yearOne[i]);
    changeTerm.innerHTML = terms[(start + i) % 10];
  }
  for (let i = 0; i < 10; i++) {
    var changeTerm = document.getElementById(yearTwo[i]);
    changeTerm.innerHTML = terms[(start + i) % 10];
  }
  for (let i = 0; i < 10; i++) {
    var changeTerm = document.getElementById(yearThree[i]);
    changeTerm.innerHTML = terms[(start + i) % 10];
  }
}

// Changes the dates by the semesters on the page
function changeDates(term, year) {
  // order goes fall, spring, summer and then repeat
  const dates =
  [
    "8/3/21 - 12/19/21", "8/3/21 - 12/19/21", "8/23/21 - 10/17/21", "10/25/21 - 12/19/21",
    "1/11/22 - 5/1/22", "1/11/22 - 5/1/22", "1/11/22 - 3/6/22", "3/7/22 - 5/1/22",
    "5/9/22 - 6/26/22", "6/27/22 - 8/14/22",
    "8/22/22 - 12/18/22", "8/22/22 - 12/18/22", "8/22/22 - 10/16/22", "10/24/22 - 12/18/22",
    "1/10/23 - 4/29/23", "1/10/23 - 4/29/23", "1/10/23 - 3/5/23",  "3/6/23 - 4/29/23",
    "5/8/23 - 6/25/23", "6/26/23 - 8/13/23"
  ];
  const years =
  [
  "dateOneOne", "dateOneTwo", "dateOneThree", "dateOneFour", "dateOneFive", "dateOneSix", "dateOneSeven", "dateOneEight", "dateOneNine", "dateOneTen",
  "dateTwoOne", "dateTwoTwo", "dateTwoThree", "dateTwoFour", "dateTwoFive", "dateTwoSix", "dateTwoSeven", "dateTwoEight", "dateTwoNine", "dateTwoTen",
  "dateThreeOne", "dateThreeTwo", "dateThreeThree", "dateThreeFour", "dateThreeFive", "dateThreeSix", "dateThreeSeven", "dateThreeEight", "dateThreeNine", "dateThreeTen",
  ];
  var start = 0;

  // checks which year and then which term to determine which date is the correct one to start with
  if (year == 1) {
    // 2021 fall
    if (term == 1) {
      start = 0;
    }
  } else if (year == 2) {
    // 2022 spring -> summer -> fall
    if (term == 2) {
      start = 4;
    } else if (term == 1) {
      start = 10;
    }
  } else if (year == 3) {
    // 2023 spring -> summer -> fall
    if (term == 2) {
      start = 14;
    } else if (term == 1) {
      start = 20;
    }
  }

  // updates the dates using the chosen starting point, if the date isn't in the menu then it displays "TBD"
  for (let i = 0; i < 30; i++) {
    var changeTerm = document.getElementById(years[i]);
    if (start + i >= 20) {
      changeTerm.innerHTML = "TBD";
    } else {
      changeTerm.innerHTML = dates[start + i];
    }
  }
}

// Deletes the drop down menu options
function deleteOption(id) {
  var parent = document.getElementById(id);
  var contents = parent.children;
  var length = contents.length
  for (let i = 0; i < length; i++) {
    parent.removeChild(contents[0]);
  }
}

// Adds a drop down option to the menu
function addOption(parentId, content, color) {
  var element = document.createElement("option");
  element.innerHTML = content;
  element.style = "background-color:" + color;
  document.getElementById(parentId).appendChild(element);
}

// Clears all the drop down menus
function clearOptions() {
  const menu =
    [
    "selectOneOne", "selectOneTwo", "selectOneThree", "selectOneFour", "selectOneFive", "selectOneSix", "selectOneSeven", "selectOneEight", "selectOneNine", "selectOneTen",
    "selectTwoOne", "selectTwoTwo", "selectTwoThree", "selectTwoFour", "selectTwoFive", "selectTwoSix", "selectTwoSeven", "selectTwoEight", "selectTwoNine", "selectTwoTen",
    "selectThreeOne", "selectThreeTwo", "selectThreeThree", "selectThreeFour", "selectThreeFive", "selectThreeSix", "selectThreeSeven", "selectThreeEight", "selectThreeNine", "selectThreeTen"
    ];
  for (const id of menu) {
    deleteOption(id);
  }
}

// Clears all the dates
function clearDates() {
  const years =
  [
  "dateOneOne", "dateOneTwo", "dateOneThree", "dateOneFour", "dateOneFive", "dateOneSix", "dateOneSeven", "dateOneEight", "dateOneNine", "dateOneTen",
  "dateTwoOne", "dateTwoTwo", "dateTwoThree", "dateTwoFour", "dateTwoFive", "dateTwoSix", "dateTwoSeven", "dateTwoEight", "dateTwoNine", "dateTwoTen",
  "dateThreeOne", "dateThreeTwo", "dateThreeThree", "dateThreeFour", "dateThreeFive", "dateThreeSix", "dateThreeSeven", "dateThreeEight", "dateThreeNine", "dateThreeTen"
  ];
  const terms =
  [
  "nameOneOne", "nameOneTwo", "nameOneThree", "nameOneFour", "nameOneFive", "nameOneSix", "nameOneSeven", "nameOneEight", "nameOneNine", "nameOneTen",
  "nameTwoOne", "nameTwoTwo", "nameTwoThree", "nameTwoFour", "nameTwoFive", "nameTwoSix", "nameTwoSeven", "nameTwoEight", "nameTwoNine", "nameTwoTen",
  "nameThreeOne", "nameThreeTwo", "nameThreeThree", "nameThreeFour", "nameThreeFive", "nameThreeSix", "nameThreeSeven", "nameThreeEight", "nameThreeNine", "nameThreeTen"
  ]
  for (let i = 0; i < years.length; i++) {
    document.getElementById(years[i]).innerHTML = "";
    document.getElementById(terms[i]).innerHTML = "";
  }
}

// combines two lists together based on cond
function addListCond(initial, other, cond) {
  for(let i=0; i < other.length; i++) {
    if (other[i].term == cond) {
      initial.push(other[i]);
    }
  }
}

// combines two lists together
function addList(initial, other) {
  for(let i=0; i < other.length; i++) {
    initial.push(other[i]);
  }
}

// updates all the menus with classes
function changeMenus(concentration, startTerm) {
  coreRequirements
  hpmConcentration
  epiBioConcentration
  interConcentration
  phnConcentration

  var hpmSummerTwo = [];
  var epiBioSummerTwo = [];
  var interSummerTwo = [];
  var phnSummerTwo = [];

  // choosing the summer classes for column one
  addListCond(hpmSummerTwo, hpmConcentration, "Summer 2");
  addListCond(epiBioSummerTwo, epiBioConcentration, "Summer 2");
  addListCond(interSummerTwo, interConcentration, "Summer 2");


  clearOptions();
  ;
  updateColumn(coreRequirements, startTerm, 1);

  // updates from HPM -> EpiBio -> Interdisciplinary -> PHN
  if (concentration == 1) {
    updateColumn(hpmSummerTwo, startTerm, 1);
    updateColumn(hpmConcentration, startTerm, 2);
    updateColumn(hpmConcentration, startTerm, 3);
  } else if (concentration == 2) {
    updateColumn(epiBioSummerTwo, startTerm, 1);
    updateColumn(epiBioConcentration, startTerm, 2);
    updateColumn(epiBioConcentration, startTerm, 3);
  } else if (concentration == 3) {
    updateColumn(interSummerTwo, startTerm, 1);
    updateColumn(interConcentration, startTerm, 2);
    updateColumn(interConcentration, startTerm, 3);
  }
}

// updates each column with classes
function updateColumn(classes, startTerm, column) {
  var start = "";
  for (let i=0; i < classes.length; i++) {
    // adds core class to second year Summer 1 but not third year Summer 1
    if ((classes[i] == PHW200E || classes[i] == PHW289) && column == 3) {
      continue;
    }
    start = findDropdown(startTerm, classes[i].term, column, 0);
    addOption(start, classes[i].name, classes[i].color);
    // adds classes to both Fall 15 and/or Sring 15 dropdown menus
    if (classes[i].term == "Fall 15" || classes[i].term == "Spring 15") {
      start = findDropdown(startTerm, classes[i].term, column, 1);
      addOption(start, classes[i].name, classes[i].color);
    }
  }
}

// returns the correct drop down menu level
function findDropdown(startTerm, varTerm, column, second) {
  const yearOne = ["selectOneOne", "selectOneTwo", "selectOneThree", "selectOneFour", "selectOneFive", "selectOneSix", "selectOneSeven", "selectOneEight", "selectOneNine", "selectOneTen"];
  const yearTwo = ["selectTwoOne", "selectTwoTwo", "selectTwoThree", "selectTwoFour", "selectTwoFive", "selectTwoSix", "selectTwoSeven", "selectTwoEight", "selectTwoNine", "selectTwoTen"];
  const yearThree = ["selectThreeOne", "selectThreeTwo", "selectThreeThree", "selectThreeFour", "selectThreeFive", "selectThreeSix", "selectThreeSeven", "selectThreeEight", "selectThreeNine", "selectThreeTen"];

  var foundTerm = 0;
  // checks Fall -> Spring -> Summer
  // returns where in the list the dropdown menu for the semester is at
  if (startTerm == 1) {
    if (varTerm == "Fall 15" && second == 0) {
      foundTerm = 0;
    } else if (varTerm == "Fall 15" && second == 1) {
      foundTerm = 1;
    } else if (varTerm == "Fall 1") {
      foundTerm = 2;
    } else if (varTerm == "Fall 2") {
      foundTerm = 3;
    } else if (varTerm == "Spring 15" && second == 0) {
      foundTerm = 4;
    } else if (varTerm == "Spring 15" && second == 1) {
      foundTerm = 5;
    } else if (varTerm == "Spring 1") {
      foundTerm = 6;
    } else if (varTerm == "Spring 2") {
      foundTerm = 7;
    } else if (varTerm == "Summer 1") {
      foundTerm = 8;
    } else if (varTerm == "Summer 2") {
      foundTerm = 9;
    }
  } else if (startTerm == 2) {
    if (varTerm == "Spring 15" && second == 0) {
      foundTerm = 0;
    } else if (varTerm == "Spring 15" && second == 1) {
      foundTerm = 1;
    } else if (varTerm == "Spring 1") {
      foundTerm = 2;
    } else if (varTerm == "Spring 2") {
      foundTerm = 3;
    } else if (varTerm == "Summer 1") {
      foundTerm = 4;
    } else if (varTerm == "Summer 2") {
      foundTerm = 5;
    } else if (varTerm == "Fall 15"  && second == 0) {
      foundTerm = 6;
    } else if (varTerm == "Fall 15"  && second == 1) {
      foundTerm = 7;
    }else if (varTerm == "Fall 1") {
      foundTerm = 8;
    } else if (varTerm == "Fall 2") {
      foundTerm = 9;
    }
  }
  // returns the correct dropdown menu based on the column input
   if (column == 1) {
     return yearOne[foundTerm];
   } else if (column == 2) {
     return yearTwo[foundTerm];
   } else if (column == 3) {
     return yearThree[foundTerm];
   }
}
