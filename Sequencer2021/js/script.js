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
  changeTerms(getStartingTerm());
}

// Changes the semesters on the page
function changeTerms(choice) {
  const yearOne = ["nameOneOne", "nameOneTwo", "nameOneThree", "nameOneFour", "nameOneFive", "nameOneSix", "nameOneSeven", "nameOneEight", "nameOneNine"];
  const yearTwo = ["nameTwoOne", "nameTwoTwo", "nameTwoThree", "nameTwoFour", "nameTwoFive", "nameTwoSix", "nameTwoSeven", "nameTwoEight", "nameTwoNine"];
  const yearThree = ["nameThreeOne", "nameThreeTwo", "nameThreeThree", "nameThreeFour", "nameThreeFive", "nameThreeSix", "nameThreeSeven", "nameThreeEight", "nameThreeNine"];
  const terms = ["Fall 15", "Fall 1", "Fall 2", "Spring 15", "Spring 1", "Spring 2", "Summer 15", "Summer 1", "Summer 2"];
  
  if (choice == 1) {
    for (let i = 0; i < 9; i++) { 
      var changeTerm = document.getElementById(yearOne[i]);
      changeTerm.innerHTML = terms[i];
    } 
    for (let i = 0; i < 9; i++) { 
      var changeTerm = document.getElementById(yearTwo[i]);
      changeTerm.innerHTML = terms[i];
    }
    for (let i = 0; i < 9; i++) { 
      var changeTerm = document.getElementById(yearThree[i]);
      changeTerm.innerHTML = terms[i];
    }
  } else if (choice == 2) {
    for (let i = 0; i < 9; i++) { 
      var changeTerm = document.getElementById(yearOne[i]);
      changeTerm.innerHTML = terms[((3 + i) % 9)];
    }
    for (let i = 0; i < 9; i++) { 
      var changeTerm = document.getElementById(yearTwo[i]);
      changeTerm.innerHTML = terms[((3 + i) % 9)];
    }
    for (let i = 0; i < 9; i++) { 
      var changeTerm = document.getElementById(yearThree[i]);
      changeTerm.innerHTML = terms[((3 + i) % 9)];
    }
  } else if (choice == 3) {
    for (let i = 0; i < 9; i++) { 
      var changeTerm = document.getElementById(yearOne[i]);
      changeTerm.innerHTML = terms[(6 + i) % 9];
    }
    for (let i = 0; i < 9; i++) { 
      var changeTerm = document.getElementById(yearTwo[i]);
      changeTerm.innerHTML = terms[(6 + i) % 9];
    }
    for (let i = 0; i < 9; i++) { 
      var changeTerm = document.getElementById(yearThree[i]);
      changeTerm.innerHTML = terms[(6 + i) % 9];
    }
  }
}