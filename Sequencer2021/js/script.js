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
  if (getStartingTerm() >= 2 && getStartingYear() == 1) {
    var changeTerm = document.getElementById("error");
    changeTerm.innerHTML = "Please select an option for the upcoming or future semesters.";
  } else {
    if (document.getElementById("error").value != null) {
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
  const yearOne = ["nameOneOne", "nameOneTwo", "nameOneThree", "nameOneFour", "nameOneFive", "nameOneSix", "nameOneSeven", "nameOneEight", "nameOneNine"];
  const yearTwo = ["nameTwoOne", "nameTwoTwo", "nameTwoThree", "nameTwoFour", "nameTwoFive", "nameTwoSix", "nameTwoSeven", "nameTwoEight", "nameTwoNine"];
  const yearThree = ["nameThreeOne", "nameThreeTwo", "nameThreeThree", "nameThreeFour", "nameThreeFive", "nameThreeSix", "nameThreeSeven", "nameThreeEight", "nameThreeNine"];
  const terms = ["Fall 15", "Fall 1", "Fall 2", "Spring 15", "Spring 1", "Spring 2", "Summer 15", "Summer 1", "Summer 2"];
  const start = (choice - 1) * 3;

  for (let i = 0; i < 9; i++) {
    var changeTerm = document.getElementById(yearOne[i]);
    changeTerm.innerHTML = terms[(start + i) % 9];
  }
  for (let i = 0; i < 9; i++) {
    var changeTerm = document.getElementById(yearTwo[i]);
    changeTerm.innerHTML = terms[(start + i) % 9];
  }
  for (let i = 0; i < 9; i++) {
    var changeTerm = document.getElementById(yearThree[i]);
    changeTerm.innerHTML = terms[(start + i) % 9];
  }
}

// Changes the dates by the semesters on the page
function changeDates(term, year) {
  // const fall = ["8/3/21 - 12/19/21", "8/23/21 - 10/17/21", "10/25/21 - 12/19/21", "8/22/22 - 12/18/22", "8/22/22 - 10/16/22", "10/24/22 - 12/18/22"];
  // const spring = ["1/11/22 - 5/1/22", "1/11/22 - 3/6/22", "3/7/22 - 5/1/22", "1/10/23 - 4/29/23", "1/10/23 - 3/5/23",  "3/6/23 - 4/29/23"];
  // const summer = ["5/9/22 - 6/26/22", "6/27/22 - 8/14/22", "5/8/23 - 6/25/23", "6/26/23 - 8/13/23"];

  // order goes fall, spring, summer and then repeat
  const dates =
  [
    "8/3/21 - 12/19/21", "8/23/21 - 10/17/21", "10/25/21 - 12/19/21",
    "1/11/22 - 5/1/22", "1/11/22 - 3/6/22", "3/7/22 - 5/1/22",
    "5/9/22 - 8/14/22", "5/9/22 - 6/26/22", "6/27/22 - 8/14/22",
    "8/22/22 - 12/18/22", "8/22/22 - 10/16/22", "10/24/22 - 12/18/22",
    "1/10/23 - 4/29/23", "1/10/23 - 3/5/23",  "3/6/23 - 4/29/23",
    "5/8/23 - 8/13/23", "5/8/23 - 6/25/23", "6/26/23 - 8/13/23"
  ];
  // const yearOne = ["dateOneOne", "dateOneTwo", "dateOneThree", "dateOneFour", "dateOneFive", "dateOneSix", "dateOneSeven", "dateOneEight", "dateOneNine"];
  // const yearTwo = ["dateTwoOne", "dateTwoTwo", "dateTwoThree", "dateTwoFour", "dateTwoFive", "dateTwoSix", "dateTwoSeven", "dateTwoEight", "dateTwoNine"];
  // const yearThree = ["dateThreeOne", "dateThreeTwo", "dateThreeThree", "dateThreeFour", "dateThreeFive", "dateThreeSix", "dateThreeSeven", "dateThreeEight", "dateThreeNine"];

  const years =
  [
  "dateOneOne", "dateOneTwo", "dateOneThree", "dateOneFour", "dateOneFive", "dateOneSix", "dateOneSeven", "dateOneEight", "dateOneNine",
  "dateTwoOne", "dateTwoTwo", "dateTwoThree", "dateTwoFour", "dateTwoFive", "dateTwoSix", "dateTwoSeven", "dateTwoEight", "dateTwoNine",
  "dateThreeOne", "dateThreeTwo", "dateThreeThree", "dateThreeFour", "dateThreeFive", "dateThreeSix", "dateThreeSeven", "dateThreeEight", "dateThreeNine"
  ];
  var start = 0;

  if (year == 1) {
    // 2021 fall
    if (term == 1) {
      start = 0;
    }
  } else if (year == 2) {
    // 2022 spring -> summer -> fall
    if (term == 2) {
      start = 3;
    } else if (term == 3) {
      start = 6;
    } else if (term == 1) {
      start = 9;
    }
  } else if (year == 3) {
    // 2023 spring -> summer -> fall
    if (term == 2) {
      start = 12;
    } else if (term == 3) {
      start = 15;
    } else if (term == 1) {
      start = 18;
    }
  }

  for (let i = 0; i < 9; i++) {
    var changeTerm = document.getElementById(years[i]);
    if (start + i > 17) {
      changeTerm.innerHTML = "TBD";
    } else {
      changeTerm.innerHTML = dates[start + i];
    }
  }
  for (let i = 9; i < 18; i++) {
    var changeTerm = document.getElementById(years[i]);
    if (start + i > 17) {
      changeTerm.innerHTML = "TBD";
    } else {
      changeTerm.innerHTML = dates[start + i];
    }  }
  for (let i = 18; i < 27; i++) {
    var changeTerm = document.getElementById(years[i]);
    if (start + i > 17) {
      changeTerm.innerHTML = "TBD";
    } else {
      changeTerm.innerHTML = dates[start + i];
    }  }
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
function clearAll() {
  const menu =
    [
    "selectOneOne", "selectOneTwo", "selectOneThree", "selectOneFour", "selectOneFive", "selectOneSix", "selectOneSeven", "selectOneEight", "selectOneNine",
    "selectTwoOne", "selectTwoTwo", "selectTwoThree", "selectTwoFour", "selectTwoFive", "selectTwoSix", "selectTwoSeven", "selectTwoEight", "selectTwoNine",
    "selectThreeOne", "selectThreeTwo", "selectThreeThree", "selectThreeFour", "selectThreeFive", "selectThreeSix", "selectThreeSeven", "selectThreeEight", "selectThreeNine"
    ];
  for (const id of menu) {
    deleteOption(id);
  }
}

// combines two lists together bsed on cond
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
  var hpm = [];
  var hpmSummerFifteen = [];
  var hpmSummerTwo = [];
  var epiBio = [];
  var epiBioSummerFifteen = [];
  var epiBioSummerTwo = [];
  // MPH Core Requirements (Grey)
  coreRequirements
  // EpiBio required concentration classes (Green)
  epiBioConcentration
  addListCond(epiBioSummerFifteen, epiBioConcentration, "Summer 15");
  addListCond(epiBioSummerTwo, epiBioConcentration, "Summer 2");
  addList(epiBio, epiBioConcentration);
  // HPM required concentration classes (Red)
  hpmConcentration
  addListCond(hpmSummerFifteen, hpmConcentration, "Summer 15");
  addListCond(hpmSummerTwo, hpmConcentration, "Summer 2");
  addList(hpm, hpmConcentration);
  // Epidemiology and Infectious Diseases Elective Courses for HPM (Purple)
  infectiousDiseaseHpmElectives
  addListCond(hpmSummerFifteen, infectiousDiseaseHpmElectives, "Summer 15");
  addListCond(hpmSummerTwo, infectiousDiseaseHpmElectives, "Summer 2");
  addList(hpm, infectiousDiseaseHpmElectives);
  // Epidemiology and Infectious Diseases Elective Courses for EpiBio (Purple)
  infectiousDiseaseEpiBioElectives
  addListCond(epiBioSummerFifteen, infectiousDiseaseEpiBioElectives, "Summer 15");
  addListCond(epiBioSummerTwo, infectiousDiseaseEpiBioElectives, "Summer 2");
  addList(epiBio, infectiousDiseaseEpiBioElectives);
  // Regulatory Science Elective Courses (Orange)
  regulatoryScienceElectives
  addListCond(hpmSummerFifteen, regulatoryScienceElectives, "Summer 15");
  addListCond(hpmSummerTwo, regulatoryScienceElectives, "Summer 2");
  addList(hpm, regulatoryScienceElectives);
  addListCond(epiBioSummerFifteen, regulatoryScienceElectives, "Summer 15");
  addListCond(epiBioSummerTwo, regulatoryScienceElectives, "Summer 2");
  addList(epiBio, regulatoryScienceElectives);
  // Community Health Science Elective Courses (Yellow)
  communityHealthElectives
  addListCond(hpmSummerFifteen, communityHealthElectives, "Summer 15");
  addListCond(hpmSummerTwo, communityHealthElectives, "Summer 2");
  addList(hpm, communityHealthElectives);
  addListCond(epiBioSummerFifteen, communityHealthElectives, "Summer 15");
  addListCond(epiBioSummerTwo, communityHealthElectives, "Summer 2");
  addList(epiBio, communityHealthElectives);
  // Special Data Science for Public Health Elective Courses (Pink)
  spacialDataScienceElectives
  addListCond(hpmSummerFifteen, spacialDataScienceElectives, "Summer 15");
  addListCond(hpmSummerTwo, spacialDataScienceElectives, "Summer 2");
  addList(hpm, spacialDataScienceElectives);
  addListCond(epiBioSummerFifteen, spacialDataScienceElectives, "Summer 15");
  addListCond(epiBioSummerTwo, spacialDataScienceElectives, "Summer 2");
  addList(epiBio, spacialDataScienceElectives);
  // Global Health Elective Courses (Tan)
  globalHealthElectives
  addListCond(hpmSummerFifteen, globalHealthElectives, "Summer 15");
  addListCond(hpmSummerTwo, globalHealthElectives, "Summer 2");
  addList(hpm, globalHealthElectives);
  addListCond(epiBioSummerFifteen, globalHealthElectives, "Summer 15");
  addListCond(epiBioSummerTwo, globalHealthElectives, "Summer 2");
  addList(epiBio, globalHealthElectives);

  clearAll();
  updateColumn(coreRequirements, startTerm, 1);
  // HPM -> EpiBio -> Interdisciplinary
  if (concentration == 1) {
    updateColumn(hpmSummerFifteen, startTerm, 1);
    updateColumn(hpmSummerTwo, startTerm, 1);
    updateColumn(hpm, startTerm, 2);
    updateColumn(hpm, startTerm, 3);
  } else if (concentration == 2) {
    updateColumn(epiBioSummerFifteen, startTerm, 1);
    updateColumn(epiBioSummerTwo, startTerm, 1);
    updateColumn(epiBio, startTerm, 2);
    updateColumn(epiBio, startTerm, 3);
  } else if (concentration == 3) {

  }
}

// updates each column with classes
function updateColumn(classes, startTerm, column) {
  for (let i=0; i < classes.length; i++) {
    var start = findDropdown(startTerm, classes[i].term, column);
    addOption(start, classes[i].name, classes[i].color);
  }
}

// returns the correct drop down menu level
function findDropdown(startTerm, varTerm, column) {
  const yearOne = ["selectOneOne", "selectOneTwo", "selectOneThree", "selectOneFour", "selectOneFive", "selectOneSix", "selectOneSeven", "selectOneEight", "selectOneNine"];
  const yearTwo = ["selectTwoOne", "selectTwoTwo", "selectTwoThree", "selectTwoFour", "selectTwoFive", "selectTwoSix", "selectTwoSeven", "selectTwoEight", "selectTwoNine"];
  const yearThree = ["selectThreeOne", "selectThreeTwo", "selectThreeThree", "selectThreeFour", "selectThreeFive", "selectThreeSix", "selectThreeSeven", "selectThreeEight", "selectThreeNine"];

  var foundTerm = 0;
  // checks Fall -> Spring -> Summer
  if (startTerm == 1) {
    if (varTerm == "Fall 15") {
      foundTerm = 0;
    } else if (varTerm == "Fall 1") {
      foundTerm = 1;
    } else if (varTerm == "Fall 2") {
      foundTerm = 2;
    } else if (varTerm == "Spring 15") {
      foundTerm = 3;
    } else if (varTerm == "Spring 1") {
      foundTerm = 4;
    } else if (varTerm == "Spring 2") {
      foundTerm = 5;
    } else if (varTerm == "Summer 15") {
      foundTerm = 6;
    } else if (varTerm == "Summer 1") {
      foundTerm = 7;
    } else if (varTerm == "Summer 2") {
      foundTerm = 8;
    }
  } else if (startTerm == 2) {
    if (varTerm == "Spring 15") {
      foundTerm = 0;
    } else if (varTerm == "Spring 1") {
      foundTerm = 1;
    } else if (varTerm == "Spring 2") {
      foundTerm = 2;
    } else if (varTerm == "Summer 15") {
      foundTerm = 3;
    } else if (varTerm == "Summer 1") {
      foundTerm = 4;
    } else if (varTerm == "Summer 2") {
      foundTerm = 5;
    } else if (varTerm == "Fall 15") {
      foundTerm = 6;
    } else if (varTerm == "Fall 1") {
      foundTerm = 7;
    } else if (varTerm == "Fall 2") {
      foundTerm = 8;
    }
  } else if (startTerm == 3) {
    if (varTerm == "Summer 15") {
      foundTerm = 0;
    } else if (varTerm == "Summer 1") {
      foundTerm = 1;
    } else if (varTerm == "Summer 2") {
      foundTerm = 2;
    } else if (varTerm == "Fall 15") {
      foundTerm = 3;
    } else if (varTerm == "Fall 1") {
      foundTerm = 4;
    } else if (varTerm == "Fall 2") {
      foundTerm = 5;
    } else if (varTerm == "Spring 15") {
      foundTerm = 6;
    } else if (varTerm == "Spring 1") {
      foundTerm = 7;
    } else if (varTerm == "Spring 2") {
      foundTerm = 8;
    }
  }
   if (column == 1) {
     return yearOne[foundTerm];
   } else if (column == 2) {
     return yearTwo[foundTerm];
   } else if (column == 3) {
     return yearThree[foundTerm];
   }
}
