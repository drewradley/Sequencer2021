var globalStartTerm;
var globalStartYear;

// Returns what the user selected for the starting semester
function getStartingSemester() {
  var startingSemester = document.getElementById("startingSemester");
  if (startingSemester.value == 0) {
    globalStartYear = 0;
  } else if (startingSemester.value <= 2) {
    globalStartYear = 1;
  } else {
    globalStartYear = 2;
  }
  if (!(startingSemester.value % 2 == 0)) {
    globalStartTerm = 2;
  } else {
    globalStartTerm = 1;
  }
}

// Returns what the user selected for starting term
function getStartingTerm() {
  //var startingTerm = document.getElementById("startingTerm");
  return globalStartTerm;
}

// Returns what the user selected for the starting year
function getStartingYear() {
  //var startingYear = document.getElementById("startingYear");
  return globalStartYear;
}

// Returns what the user selected for the concentration
function getConcentration() {
  var concentration = document.getElementById("concentration");
  return concentration.value;
}

// Updates the page based on user input
function updatePage() {
  // checker to see if input is a valid starting date
  // if (getStartingTerm() == 2 && getStartingYear() == 1) {
  //   var changeTerm = document.getElementById("error");
  //   changeTerm.innerHTML = "Please select an option for the upcoming or future semesters.";
  //   changeTerm.value = 1;
  //   clearDates();
  //   clearOptions();
  newClearDates();
  newChangeDates();
    if (document.getElementById("error").value == 1) {
      var changeTerm = document.getElementById("error");
      changeTerm.innerHTML = "";
    }
    //changeTerms(getStartingTerm());
    //changeDates(getStartingTerm(), getStartingYear());
    changeMenus(getConcentration(), getStartingTerm());
    changeSemesters();
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
    "8/23/21 - 12/19/21", "8/23/21 - 12/12/21", "8/23/21 - 10/17/21", "10/25/21 - 12/19/21",
    "1/18/22 - 5/1/22", "1/18/22 - 5/8/22", "1/11/22 - 3/6/22", "3/7/22 - 5/1/22",
    "5/9/22 - 6/26/22", "6/27/22 - 8/14/22",

    "8/22/22 - 12/18/22", "8/22/22 - 12/11/22", "8/22/22 - 10/16/22", "10/24/22 - 12/18/22",
    "1/17/23 - 4/30/23", "1/17/23 - 5/7/23", "1/10/23 - 3/5/23",  "3/6/23 - 4/30/23",
    "5/8/23 - 6/25/23", "6/26/23 - 8/13/23",

    "8/21/23 - 12/10/23", "8/21/23 - 12/03/23", "8/21/23 - 10/15/23", "10/23/23 - 12/17/23",
    "1/16/24 - 5/5/24", "1/16/24 - 5/13/24", "1/09/24 - 3/3/24", "3/4/24 - 4/28/24",
    "5/13/24 - 6/30/24", "7/8/24 - 8/25/24"
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
    //if (start + i >= 20) {
    //  changeTerm.innerHTML = "TBD";
    //} else {
    //  changeTerm.innerHTML = dates[start + i];
    //}
    changeTerm.innerHTML = dates[start + i];
  }
}

function newClearDates() {
  const dateLabels = 
  [
    "dateOneOne", "dateOneTwo", "dateOneThree", "dateOneFour", "dateOneFive", "dateOneSix", "dateOneSeven", "dateOneEight", "dateOneNine",
    "dateTwoOne", "dateTwoTwo", "dateTwoThree", "dateTwoFour", "dateTwoFive", "dateTwoSix", "dateTwoSeven", "dateTwoEight", "dateTwoNine", 
    "dateThreeOne", "dateThreeTwo", "dateThreeThree", "dateThreeFour", "dateThreeFive", "dateThreeSix", "dateThreeSeven", "dateThreeEight", "dateThreeNine"
  ];
  for (label of dateLabels) {
    var labelElement = document.getElementById(label);
    labelElement.innerHTML = "";
  }
}

function newChangeDates() {
  newClearDates();
  const dateLabels = 
  [
    "dateOneOne", "dateOneTwo", "dateOneThree", "dateOneFour", "dateOneFive", "dateOneSix", "dateOneSeven", "dateOneEight", "dateOneNine",
    "dateTwoOne", "dateTwoTwo", "dateTwoThree", "dateTwoFour", "dateTwoFive", "dateTwoSix", "dateTwoSeven", "dateTwoEight", "dateTwoNine", 
    "dateThreeOne", "dateThreeTwo", "dateThreeThree", "dateThreeFour", "dateThreeFive", "dateThreeSix", "dateThreeSeven", "dateThreeEight", "dateThreeNine"
  ];
  const dates = 
  [
    // Fall -> Spring -> Summer -> Repeat
    // Fall 2022 Start
    "8/22/22 - 12/11/22", "8/22/22 - 10/16/22", "10/24/22 - 12/18/22",
    "1/17/23 - 5/7/23", "1/10/23 - 3/5/23", "3/6/23 - 4/30/23",
    "5/8/23 - 6/25/23", "6/27/23 - 8/13/23",
    // Fall 2023 Start
    "8/21/23 - 12/10/23", "8/21/23 - 10/15/23", "10/23/23 - 12/17/23",
    "1/16/24 - 5/5/24", "1/9/24 - 3/3/24", "3/4/24 - 4/28/24",
    "5/13/24 - 6/30/24", "7/8/24 - 8/25/24",
  ];
  var startYear = globalStartYear;
  var startTerm = globalStartTerm;
  var dateCounter = 0;
  var startChange = false;

  for (label of dateLabels) {
    var labelElement = document.getElementById(label);
    if (startYear == 0) {
      // 2022
      if (dateCounter >= dates.length) {
        labelElement.innerHTML = "TBD";
        continue;
      }
      if (label == "dateOneSeven" || label == "dateTwoSeven") {
        continue;
      } else {
        labelElement.innerHTML = dates[dateCounter];
        dateCounter += 1;
      }
    } else if (startYear == 1) {
      // 2023
      
      if (startTerm == 2) {
        // Spring 2023 Start
        if (!startChange) {
          dateCounter = 3;
          startChange = true;
        }
        if (dateCounter >= dates.length) {
          labelElement.innerHTML = "TBD";
          continue;
        } else {
          if (label == "dateOneFour" || label == "dateTwoFour") {
            continue;
          } else {
            labelElement.innerHTML = dates[dateCounter];
            dateCounter += 1;
          }
        }
      } else {
        // Fall 2023 Start
        if (!startChange) {
          dateCounter = 8;
          startChange = true;
        }
        if (dateCounter >= dates.length) {
          labelElement.innerHTML = "TBD";
          continue;
        }
        if (label == "dateOneSeven" || label == "dateTwoSeven") {
          continue;
        } else {
          labelElement.innerHTML = dates[dateCounter];
          dateCounter += 1;
        }
      }
    } else if (startYear == 2) {
      // 2024
      if (startTerm == 2) {
        // Spring 2024 Start
        if (!startChange) {
          dateCounter = 11;
          startChange = true;
        }
        if (dateCounter >= dates.length) {
          labelElement.innerHTML = "TBD";
          continue;
        } else {
          if (label == "dateOneFour" || label == "dateTwoFour") {
            continue;
          } else {
            labelElement.innerHTML = dates[dateCounter];
            dateCounter += 1;
          }
        }
      }
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
function addOption(parentIds, content, color) {
  for (id of parentIds) {
    var element = document.createElement("option");
    var select = document.getElementById(id);
    var elementStyleColor = element.style.color;
    element.innerHTML = content;
    elementStyleColor = color;
    select.appendChild(element);
  }
}

// Adds and sets a drop down option to the menu
function setOption(parentIds, content, color) {
  for (id of parentIds) {
    var element = document.createElement("option");
    element.innerHTML = content;
    element.style.backgroundColor = color;
    document.getElementById(id).appendChild(element);
    document.getElementById(id).value = content;
  }
}

// Adds the blank option to all drop down menus
function addBlanks() {
  const menu =
  [
    "selectOneOne", "selectOneTwo", "selectOneThree", "selectOneFour", "selectOneFive", "selectOneSix", "selectOneSeven", "selectOneEight", "selectOneNine", "selectOneTen", "selectOneEleven", "selectOneTwelve",
    "selectTwoOne", "selectTwoTwo", "selectTwoThree", "selectTwoFour", "selectTwoFive", "selectTwoSix", "selectTwoSeven", "selectTwoEight", "selectTwoNine", "selectTwoTen", "selectTwoEleven", "selectTwoTwelve",
    "selectThreeOne", "selectThreeTwo", "selectThreeThree", "selectThreeFour", "selectThreeFive", "selectThreeSix", "selectThreeSeven", "selectThreeEight", "selectThreeNine", "selectThreeTen", "selectThreeEleven", "selectThreeTwelve"
    ];
  for (const id of menu) {
    var element = document.createElement("option");
    element.innerHTML = "";
    document.getElementById(id).prepend(element);
  }
}

// Clears all the drop down menus
function clearOptions() {
  const menu =
    [
    "selectOneOne", "selectOneTwo", "selectOneThree", "selectOneFour", "selectOneFive", "selectOneSix", "selectOneSeven", "selectOneEight", "selectOneNine", "selectOneTen", "selectOneEleven", "selectOneTwelve",
    "selectTwoOne", "selectTwoTwo", "selectTwoThree", "selectTwoFour", "selectTwoFive", "selectTwoSix", "selectTwoSeven", "selectTwoEight", "selectTwoNine", "selectTwoTen", "selectTwoEleven", "selectTwoTwelve",
    "selectThreeOne", "selectThreeTwo", "selectThreeThree", "selectThreeFour", "selectThreeFive", "selectThreeSix", "selectThreeSeven", "selectThreeEight", "selectThreeNine", "selectThreeTen", "selectThreeEleven", "selectThreeTwelve"
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
    if (other[i].term.includes(cond)) {
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
  addListCond(hpmSummerTwo, hpmElectives, "Summer 2");
  addListCond(epiBioSummerTwo, epiBioConcentration, "Summer 2");
  addListCond(epiBioSummerTwo, epiBioElectives, "Summer 2");
  addListCond(interSummerTwo, interConcentration, "Summer 2");
  addListCond(interSummerTwo, interElectives, "Summer 2");
  addListCond(phnSummerTwo, phnConcentration, "Summer 2")
  addListCond(phnSummerTwo, phnElectives, "Summer 2");

  clearOptions();
  ;
  updateColumn(coreRequirements, startTerm, 1);

  // updates from HPM -> EpiBio -> Interdisciplinary -> PHN
  if (concentration == 1) {
    updateColumn(hpmSummerTwo, startTerm, 1);
    updateColumn(hpmConcentration, startTerm, 2);
    updateColumn(hpmElectives, startTerm, 2);
    updateColumn(hpmConcentration, startTerm, 3);
    updateColumn(hpmElectives, startTerm, 3);
  } else if (concentration == 2) {
    updateColumn(epiBioSummerTwo, startTerm, 1);
    updateColumn(epiBioConcentration, startTerm, 2);
    updateColumn(epiBioElectives, startTerm, 2);
    updateColumn(epiBioConcentration, startTerm, 3);
    updateColumn(epiBioElectives, startTerm, 3);
  } else if (concentration == 3) {
    updateColumn(interSummerTwo, startTerm, 1);
    updateColumn(interConcentration, startTerm, 2);
    updateColumn(interElectives, startTerm, 2);
    updateColumn(interConcentration, startTerm, 3);
    updateColumn(interElectives, startTerm, 3);
  } else if (concentration == 4) {
    updateColumn(phnSummerTwo, startTerm, 1);
    updateColumn(phnConcentration, startTerm, 2);
    updateColumn(phnElectives, startTerm, 2);
    updateColumn(phnConcentration, startTerm, 3);
    updateColumn(phnElectives, startTerm, 3);
  }
  addBlanks();
}

// updates each column with classes
function updateColumn(classes, startTerm, column) {
  var starts = [];
  for (let i=0; i < classes.length; i++) {
    // adds core class to second year Summer 1 but not third year Summer 1
    if ((classes[i] == PHW200E || classes[i] == PHW289) && column == 3) {
      continue;
    }
    starts = findDropdown(startTerm, classes[i].term, column, 0);
    addOption(starts, classes[i].name, classes[i].color);
    // adds classes to both Fall 15 and/or Spring 15 dropdown menus
    if (classes[i].term.includes("Fall 15") || classes[i].term.includes("Spring 15")) {
      starts = findDropdown(startTerm, classes[i].term, column, 1);
      setOption(starts, classes[i].name, classes[i].color);
    }
    // sets second Summer 1 to PHW289
    if (classes[i].name == "PHW289: Interdisciplinary Seminar" && column == 2) {
      var start = starts[0];
      document.getElementById(start).value = classes[i].name;
    }
  }
}

// gets the classes dictionary
function getClassesMap(startTerm) {
  const concentration = getConcentration();
  if (concentration == 1) {
    if (startTerm == 1) {
      return hpmRecommendationFallMap;
    } else if (startTerm == 2) {
      return hpmRecommendationSpringMap;
    }
  } else if (concentration == 2) {
    if (startTerm == 1) {
      return epiBioRecommendationFallMap;
    } else if (startTerm == 2) {
      return epiBioRecommendationSpringMap;
    }
  } else if (concentration == 3) {
    if (startTerm == 1) {
      return interRecommendationFallMap;
    } else if (startTerm == 2) {
      return interRecommendationSpringMap;
    }
  } else if (concentration == 4) {
    if (startTerm == 1) {
      return phnRecommendationFallMap;
    } else if (startTerm == 2) {
      return phnRecommendationSpringMap;
    }
  }
}

// updates the page, including other dropdown menus when a change is made
function updateAll(selectedID) {
  countUnits();
  const menu =
    [
    ["selectOneOne", "selectOneTwo", "selectOneThree", "selectOneFour", "selectOneFive", "selectOneSix", "selectOneSeven", "selectOneEight", "selectOneNine", "selectOneTen", "selectOneEleven", "selectOneTwelve"],
    ["selectTwoOne", "selectTwoTwo", "selectTwoThree", "selectTwoFour", "selectTwoFive", "selectTwoSix", "selectTwoSeven", "selectTwoEight", "selectTwoNine", "selectTwoTen", "selectTwoEleven", "selectTwoTwelve"],
    ["selectThreeOne", "selectThreeTwo", "selectThreeThree", "selectThreeFour", "selectThreeFive", "selectThreeSix", "selectThreeSeven", "selectThreeEight", "selectThreeNine", "selectThreeTen", "selectThreeEleven", "selectThreeTwelve"]
    ];
  var selectedElement = document.getElementById(selectedID);
  var selectedClassName = selectedElement.innerHTML;
  for (selectID of menu) {
    var selectIDElement = document.getElementById(selectID);
    var selectElementClassName = selectIDElement.innerHTML;
    if (selectedClassName == selectElementClassName) {
      selectIDElement.innerHTML.style = "text-decoration: line-through"
    }
  }
}

// recommends classes with given schedule
function recommendClasses(startTerm, classes) {
  const fallStartTerms = ["Fall 15", "Fall 15", "Fall 1", "Fall 2", "Spring 15", "Spring 15", "Spring 1", "Spring 2", "Summer 15", "Summer 15", "Summer 1", "Summer 2"];
  const springStartTerms = ["Spring 15", "Spring 15", "Spring 1", "Spring 2", "Summer 15", "Summer 15", "Summer 1", "Summer 2", "Fall 15", "Fall 15", "Fall 1", "Fall 2"];
  const menu =
    [
    ["selectOneOne", "selectOneTwo", "selectOneThree", "selectOneFour", "selectOneFive", "selectOneSix", "selectOneSeven", "selectOneEight", "selectOneNine", "selectOneTen", "selectOneEleven", "selectOneTwelve"],
    ["selectTwoOne", "selectTwoTwo", "selectTwoThree", "selectTwoFour", "selectTwoFive", "selectTwoSix", "selectTwoSeven", "selectTwoEight", "selectTwoNine", "selectTwoTen", "selectTwoEleven", "selectTwoTwelve"],
    ["selectThreeOne", "selectThreeTwo", "selectThreeThree", "selectThreeFour", "selectThreeFive", "selectThreeSix", "selectThreeSeven", "selectThreeEight", "selectThreeNine", "selectThreeTen", "selectThreeEleven", "selectThreeTwelve"]
    ];
  const fallAndSpringTerms = [fallStartTerms, springStartTerms];
  const terms = fallAndSpringTerms[startTerm-1];
  var classesMap = getClassesMap(startTerm);
  var starts = [];
  var prevClassTerm = "";
  var separatedClasses = splitClasses(classes, 6);
  var prevTempIndex = null;
  for (let col=1; col < separatedClasses.length+1; col++) {
    var classesGivenYear = separatedClasses[col-1];
    var prevTermIndex = 0;
    var termsCopy = terms.slice();
    var thisColTerm = []
    classesGivenYear.forEach(function(obj) {thisColTerm.push(obj.term)});
    const termCounts = countTermOccurences(thisColTerm);
    for (let i=0; i < classesGivenYear.length; i++) {
      var recClass = classesGivenYear[i];
      var recClassTerm = classesMap.get(recClass)[0];
      
      if (prevClassTerm == recClassTerm) {
        second = 1;
      } else {
        second = 0;
      }
      var thetermiwant = classesMap.get(recClass);
      starts = findDropdown(startTerm, classesMap.get(recClass), col, second);
      var termIndex = termsCopy.indexOf(classesMap.get(recClass)[0]);
      termsCopy.splice(termIndex, 1);
      prevTermIndex = termIndex;
      var recClassName = recClass.name;
      if (recClassName == "PHW289: Interdisciplinary Seminar" && col == 1) {
        continue;
      }
      for (start of starts) {
        document.getElementById(start).value = recClass.name;
      }
      prevClassTerm = recClassTerm;
    }
    for (const term of termsCopy) {
      if ((term === "Fall 15" || term === "Spring 15") && termCounts[term] == 1) {
        var tempIndex = terms.indexOf(term);
        var menuSelect = null;
        var menuCol = menu[col-1]
        if (tempIndex == prevTempIndex) {
        menuSelect = menuCol[tempIndex+1];
        } else {
          menuSelect = menuCol[tempIndex + 1];
          prevTempIndex = tempIndex;
        }

        document.getElementById(menuSelect).value = "";
      } else {
          var tempIndex = terms.indexOf(term);
          var menuSelect = null;
          var menuCol = menu[col-1]
          if (tempIndex == prevTempIndex) {
          menuSelect = menuCol[tempIndex+1];
          } else {
            menuSelect = menuCol[tempIndex];
            prevTempIndex = tempIndex;
          }
          document.getElementById(menuSelect).value = "";
      }
    }
  }

}

// splits a recommended schedule into years
function splitClasses(classes, size) {
  var separatedClasses = [];
  for (let i=0; i < classes.length; i+= size) {
    separatedClasses.push(classes.slice(i, i + size));
  }
  return separatedClasses;
}

// counts occurences of term elements in term array
function countTermOccurences(termsArray) {
  const count = {};

  for (const element of termsArray) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }
  return count;
}

function getClassRecommendation() {
  getStartingSemester();
  const startTerm = getStartingTerm();
  const startYear = getStartingYear();
  const concentration = getConcentration();

  var preCheck = document.getElementById("countOfUnits");
  var inHTML = preCheck.innerHTML;
  if (preCheck.innerHMTL != 0) {
    updatePage();
  }

  if (concentration == 1) {
    if (startTerm == 1) {
      recommendClasses(startTerm, hpmRecommendationFall)
    } else {
      recommendClasses(startTerm, hpmRecommendationSpring)
    }
  } else if (concentration == 2) {
    if (startTerm == 1) {
      recommendClasses(startTerm, epiBioRecommendationFall)
    } else {
      recommendClasses(startTerm, epiBioRecommendationSpring)
    }
  } else if (concentration == 3) {
    if (startTerm == 1) {
      recommendClasses(startTerm, interRecommendationFall)
    } else {
      recommendClasses(startTerm, interRecommendationSpring)
    }
  } else if (concentration == 4) {
    if (startTerm == 1) {
      recommendClasses(startTerm, phnRecommendationFall)
    } else {
      recommendClasses(startTerm, phnRecommendationSpring)
    }
  }

  countUnits();
}

function updatePageButton() {
  countUnits();
  getPracAndCompExamDate();
}

// Counts the units with the selected classes
function countUnits() {
  const menu =
  [
    "selectOneOne", "selectOneTwo", "selectOneThree", "selectOneFour", "selectOneFive", "selectOneSix", "selectOneSeven", "selectOneEight", "selectOneNine", "selectOneTen", "selectOneEleven", "selectOneTwelve",
    "selectTwoOne", "selectTwoTwo", "selectTwoThree", "selectTwoFour", "selectTwoFive", "selectTwoSix", "selectTwoSeven", "selectTwoEight", "selectTwoNine", "selectTwoTen", "selectTwoEleven", "selectTwoTwelve",
    "selectThreeOne", "selectThreeTwo", "selectThreeThree", "selectThreeFour", "selectThreeFive", "selectThreeSix", "selectThreeSeven", "selectThreeEight", "selectThreeNine", "selectThreeTen", "selectThreeEleven", "selectThreeTwelve"
    ];
  var countOfUnits = document.getElementById("countOfUnits");
  var unitCount = 0;
  var selectedClasses = [];
  for (const id of menu) {
    var classSelection = document.getElementById(id);
    var className = classSelection.value;
    selectedClasses.push(className);
  }
  var concentration = getConcentration();
  // Find the class object given the className
  if (concentration == 1) {
    var allHpmClasses = hpmConcentration.concat(hpmElectives).concat(coreRequirements);
    unitCount = getObjectByName(allHpmClasses, selectedClasses, unitCount);
  } else if (concentration == 2) {
    var allEpiBioClasses = epiBioConcentration.concat(epiBioElectives).concat(coreRequirements);
    unitCount = getObjectByName(allEpiBioClasses, selectedClasses, unitCount);
  } else if (concentration == 3) {
    var allInterClasses = interConcentration.concat(interElectives).concat(coreRequirements);
    unitCount = getObjectByName(allInterClasses, selectedClasses, unitCount);
  } else if (concentration == 4) {
    var allPhnClasses = phnConcentration.concat(phnElectives).concat(coreRequirements);
    unitCount = getObjectByName(allPhnClasses, selectedClasses, unitCount);
  }
  console.log(unitCount);
  countOfUnits.innerHTML = unitCount;
}

// Gets the class's object unit count and adds it to our current unitCount
function getObjectByName(allClasses, selectedClasses, unitCount) {
  var receivedCompExamDate = false;
  var compExamElement = document.getElementById("compExamDate");
  var practicumElement = document.getElementById("practicumDate");
  for (const className of selectedClasses) {
    var classObject = allClasses.find(obj => obj.name === className);
    if (classObject == null) {
      continue;
    } else {
      unitCount += classObject.units / 1;
    }

    if (unitCount >= 42 && receivedCompExamDate == false) {
      getPracAndCompExamDate(className, selectedClasses);
      receivedCompExamDate = true;
    } else if (unitCount < 42) {
      receivedCompExamDate = false;
      compExamElement.innerHTML = "";
      practicumElement.innerHTML = "";
    }
  }
  return unitCount;
}

// Fills out when the Practicum and Comp Exam are.
function getPracAndCompExamDate(className, selectedClasses) {
  var indexOfClassName = selectedClasses.indexOf(className);
  var compExamElement = document.getElementById("compExamDate");
  var practicumElement = document.getElementById("practicumDate");
  if (indexOfClassName < 23) {
    practicumElement.innerHTML = "By Spring of Year 2";
    compExamElement.innerHTML = "During Fall of Year 3";
  } else if (indexOfClassName < 28) {
    practicumElement.innerHTML = "By Summer of Year 2";
    compExamElement.innerHTML = "During Fall of Year 3";
  }
}



// returns the correct drop down menu level
function findDropdown(startTerm, varTerm, column, second) {
  const yearOne = ["selectOneOne", "selectOneTwo", "selectOneThree", "selectOneFour", "selectOneFive", "selectOneSix", "selectOneSeven", "selectOneEight", "selectOneNine", "selectOneTen", "selectOneEleven", "selectOneTwelve"];
  const yearTwo = ["selectTwoOne", "selectTwoTwo", "selectTwoThree", "selectTwoFour", "selectTwoFive", "selectTwoSix", "selectTwoSeven", "selectTwoEight", "selectTwoNine", "selectTwoTen", "selectTwoEleven", "selectTwoTwelve"];
  const yearThree = ["selectThreeOne", "selectThreeTwo", "selectThreeThree", "selectThreeFour", "selectThreeFive", "selectThreeSix", "selectThreeSeven", "selectThreeEight", "selectThreeNine", "selectThreeTen", "selectThreeEleven", "selectThreeTwelve"];

  var foundTerm = 0;
  var foundTerms = [];
  // checks Fall -> Spring -> Summer
  // returns where in the list the dropdown menu for the semester is at
  if (startTerm == 1) {
    for (term of varTerm) {
      if (term.includes("Fall")) {
        if (term.includes("Fall 15") && second == 0) {
          foundTerm = 0;
        } else if (term.includes("Fall 15") && second == 1) {
          foundTerm = 1;
        } else if (term.includes("Fall 1")) {
          foundTerm = 2;
        } else if (term.includes("Fall 2")) {
          foundTerm = 3;
        }
        foundTerms.push(foundTerm)
      }
      if (term.includes("Spring")) {
        if (varTerm.includes("Spring 15") && second == 0) {
          foundTerm = 4;
        } else if (term.includes("Spring 15") && second == 1) {
          foundTerm = 5;
        } else if (term.includes("Spring 1")) {
          foundTerm = 6;
        } else if (term.includes("Spring 2")) {
          foundTerm = 7;
        }
        foundTerms.push(foundTerm)
      }
      if (term.includes("Summer")) {
        if (term.includes("Summer 1")) {
          foundTerm = 10;
        }
        if (term.includes("Summer 2")) {
          foundTerm = 11;
        }
        foundTerms.push(foundTerm)
      }
    }
    
    
  } else if (startTerm == 2) {
    for (term of varTerm) {
      if (term.includes("Fall")) {
        if (term.includes("Fall 15") && second == 0) {
          foundTerm = 8;
        } else if (term.includes("Fall 15") && second == 1) {
          foundTerm = 9;
        } else if (term.includes("Fall 1")) {
          foundTerm = 10;
        } else if (term.includes("Fall 2")) {
          foundTerm = 11;
        }
        foundTerms.push(foundTerm)
      }
      if (term.includes("Spring")) {
        if (varTerm.includes("Spring 15") && second == 0) {
          foundTerm = 0;
        } else if (term.includes("Spring 15") && second == 1) {
          foundTerm = 1;
        } else if (term.includes("Spring 1")) {
          foundTerm = 2;
        } else if (term.includes("Spring 2")) {
          foundTerm = 3;
        }
        foundTerms.push(foundTerm)
      }
      if (term.includes("Summer")) {
        if (term.includes("Summer 1")) {
          foundTerm = 6;
        }
        if (term.includes("Summer 2")) {
          foundTerm = 7;
        }
        foundTerms.push(foundTerm)
      }
    }
  }
  // returns the correct dropdown menu based on the column input
  var menus = []
   if (column == 1) {
    foundTerms.forEach(i => menus.push(yearOne[i]))
    return menus
   } else if (column == 2) {
    foundTerms.forEach(i => menus.push(yearTwo[i]))
    return menus
   } else if (column == 3) {
    foundTerms.forEach(i => menus.push(yearThree[i]))
    return menus
   }
}

// Changes all the semesters based on user input
function changeSemesters() {
  const semestersArr = ["sem1", "sem2", "sem3", "sem4", "sem5", "sem6", "sem7", "sem8", "sem9"];
  const years = [2022, 2023, 2024, 2025, 2026];
  const termsFromFall = ["Fall", "Spring", "Summer", "Fall", "Spring", "Summer", "Fall", "Spring", "Summer"];
  const termsFromSpring = ["Spring", "Summer", "Fall", "Spring", "Summer", "Fall", "Spring", "Summer", "Fall"];
  var termsFrom = [];
  var yearIndex = globalStartYear;
  if (globalStartTerm == 2) {
    termsFrom = termsFromSpring;
  } else {
    termsFrom = termsFromFall;
  }
  for (let i = 0; i < semestersArr.length; i++) {

    var selectedSem = document.getElementById(semestersArr[i]);
    selectedSem.innerHTML = termsFrom[i] + " " + years[yearIndex];
      if (termsFrom[i] == "Fall") {
        yearIndex += 1;
      }
  }
}