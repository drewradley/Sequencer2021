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
function addOption(parentId, id, content, color) {
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

function changeMenus() {

}