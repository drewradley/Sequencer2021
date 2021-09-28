// Required
var PHW224 = {
  name: "PHW224: Organizational Behavior & Management in Healthcare",
  term: "Fall 1",
  units: 3,
  color: "Red",
  type: "HPM Concentration"
};

var PHW227A = {
  name: "PHW227A: Healthcare Finance",
  term: "Spring 2",
  units: 3,
  color: "Red",
  type: "HPM Concentration"
};

// choose between PHW220M and PHW222A
var PHW220M = {
  name: "PHW220M: Health Policy Methods",
  term: "Fall 2",
  units: 3,
  color: "Red",
  type: "HPM Concentration"
};

var PHW222A = {
  name: "PHW222A: Healthcare Technology Policy",
  term: "Spring 1",
  units: "4", // doesn't have a number right now
  color: "Red",
  type: "HPM Concentration"
};

// choose between PHW226A and PHW226C
var PHW226A = {
  name: "PHW226A: Health Economics",
  term: "Fall 2",
  units: 3,
  color: "Red",
  type: "HPM Concentration"
};

var PHW226C = {
  name: "PHW226C: Economics of Population Health",
  term: "Spring 1",
  units: 3,
  color: "Red",
  type: "HPM Concentration"
};

// Recommended
var PHW226F = {
  name: "PHW226F: Cost-Effectiveness Analysis",
  term: "Spring 1",
  units: 1,
  color: "Orange",
  type: "HPM Concentration"
};

var PHW223 = {
  name: "PHW223: Strategy in Health Care Organizations",
  term: "Summer 2",
  units: 3,
  color: "Red",
  type: "HPM Concentration"
};

var hpmRequirements = [PHW224, PHW227A, PHW220M, PHW222A, PHW226A, PHW226C, PHW226F, PHW223];

// 
// ----------------------------ELECTIVES-------------------------------------------
// 


var PHW251 = {
  name: "PHW251: R for Public Health",
  term: "Fall 15",
  units: 2,
  color: "Tan",
  type: "Electives"
};

var PHW241R = {
  name: "PHW241R: Statistical Analysis of Categorical Data",
  term: "Spring 15",
  units: 4,
  color: "Tan",
  type: "Electives"
};

var PHW250B = {
  name: "PHW250B: Epidemiologic Methods II",
  term: "Fall 15",
  units: 4,
  color: "Tan",
  type: "Electives"
};

// PHW241R and PHW250B must be completed before this. PHW241R is high reccomeneded
var PH252 = {
  name: "PH252: Epidemiological Analysis",
  term: "Fall 15",
  units: 4,
  color: "Tan",
  type: "Electives"
};

var PHW212 = {
  name: "PHW212: Foundations of Global Health",
  term: "Fall 1",
  units: 3,
  color: "Tan",
  type: "Elective"
};

var PHW260 = {
  name: "PHW260: Infectious Disease",
  term: "Fall 1",
  units: 3,
  color: "Tan",
  type: "Electives"
};

var PHW260B = {
  name: "PHW260B: Food and Nutrition Policy",
  term: "Fall 2",
  units: 4, //doesn't have a unit yet
  color: "Tan",
  type: "Electives"
};

var PHW213 = {
  name: "PHW213: Global Health Ethics",
  term: "Fall 2",
  units: 3,
  color: "Tan",
  type: "Electives"
};

var PHW236A = {
  name: "PHW236A: Regulatory Science, Drug Development, & Public Health",
  term: "Fall 2",
  units: 3,
  color: "Tan",
  type: "Electives"
};

var PHW253 = {
  name: "PHW253: Outbreak Investigations",
  term: "Fall 2",
  units: 3,
  color: "Tan",
  type: "Electives"
};

var PH252C = {
  name: "PH252C: Interventional Trial Design",
  term: "Spring 15",
  units: 3,
  color: "Tan",
  type: "Electives"
};

var PH290 = {
  name: "PH290: Implementation Science",
  term: "Spring 15",
  units: 2,
  color: "Tan",
  type: "Electives"
};

var PH2900 = {
  name: "PH290: Anti-Racist and Racial Justice Praxis",
  term: "Spring 15",
  units: 3,
  color: "Tan",
  type: "Electives"
}

var PHW206A = {
  name: "PHW206A: Nutrition Assessment",
  term: "Spring 1",
  units: 4, //doesn't have a unit yet
  color: "Tan",
  type: "Electives"
}

var PHW219 = {
  name: "PHW219: Social and Behavioral Research: Intro to Survey Methods",
  term: "Spring 1",
  units: 3,
  color: "Tan",
  type: "Electives"
};

var PHW272A = {
  name: "PHW272A: Introduction to Geographic Information Systems for Public Health",
  term: "Spring 1",
  units: 3,
  color: "Tan",
  type: "Electives"
};

var PHW218 = {
  name: "PHW218: Evaluation of Health & Social Programs",
  term: "Spring 2",
  units: 3,
  color: "Tan",
  type: "Electives"
};

var PHW272C = {
  name: "PHW272C: Applied Spatial Data Science for Public Health",
  term: "Spring 2",
  units: 3,
  color: "Tan",
  type: "Elective"
};

var PHW277 = {
  name: "PHW277: Applied GIS for Public Health Practice",
  term: "Spring 2",
  units: 3,
  color: "Tan",
  type: "Elective"
};

var PHW257 = {
  name: "PHW257: Public Health Preparedness & Emergency Response",
  term: "Summer 1",
  units: 3,
  color: "Tan",
  type: "Elective"
};

var PHW204 = {
  name: "PHW204: Mass Communication in Public Health",
  term: "Summer 2",
  units: 3,
  color: "Tan",
  type: "Elective"
};

var PHW205 = {
  name: "PHW205: Program Planning and Development",
  term: "Summer 2",
  units: 3,
  color: "Tan",
  type: "Elective"
};

var PHW206 = {
  name: "PHW206: Maternal and Child Health Nutrition",
  term: "Summer 2",
  units: 3,
  color: "Tan",
  type: "Elective"
}

var hpmElectives = [PHW251, PHW241R, PHW250B, PH252, PHW212, PHW260, PHW260B, PHW213, PHW236A, PHW253, PH252C, PH290, PH2900, PHW206A, PHW219, PHW272A, PHW218, PHW272C, PHW277, PHW257, PHW204, PHW205, PHW206];

var hpmConcentration = [PHW200E, PHW289, PHW224, PHW227A, PHW220M, PHW222A, PHW226A, PHW226C, PHW226F, PHW223, PHW251, PHW241R, PHW250B, PH252, PHW212, PHW260, PHW260B, PHW213, PHW236A, PHW253, PH252C, PH290, PH2900, PHW206A, PHW219, PHW272A, PHW218, PHW272C, PHW277, PHW257, PHW204, PHW205, PHW206];