// Required

var PHW223 = {
  name: "PHW223: Strategic Management & the Health Sector",
  term: ["Summer 2",],
  units: 3,
  color: "Red",
  type: "HPM Concentration"
};

var PHW224 = {
  name: "PHW224: Organizational Behavior & Management in Healthcare",
  term: ["Fall 1",],
  units: 3,
  color: "Red",
  type: "HPM Concentration"
};

var PHW227A = {
  name: "PHW227A: Healthcare Finance",
  term: ["Spring 2",],
  units: 3,
  color: "Red",
  type: "HPM Concentration"
};

// choose between PHW220M and PHW222A
var PHW220M = {
  name: "PHW220M: Health Policy Methods",
  term: ["Summer 2",],
  units: 3,
  color: "Red",
  type: "HPM Concentration"
};

var PHW222A = {
  name: "PHW222A: Healthcare Technology Policy",
  term: ["Spring 1",],
  units: "3", // doesn't have a number right now
  color: "Red",
  type: "HPM Concentration"
};

// choose between PHW226A and PHW226C
var PHW226A = {
  name: "PHW226A: Health Economics",
  term: ["Fall 2",],
  units: 3,
  color: "Red",
  type: "HPM Concentration"
};

var PHW226C = {
  name: "PHW226C: Economics of Population Health",
  term: ["Spring 1",],
  units: 3,
  color: "Red",
  type: "HPM Concentration"
};

var hpmRequirements = [PHW220M, PHW223, PHW224, PHW227A, PHW226A];

//
// ----------------------------ELECTIVES-------------------------------------------
//
// REGULATORY SCIENCE COURSES

var PHW209 = {
  name: "PHW209: Comparative Health Systems",
  term: ["Spring 1",],
  units: 3,
  color: "Tan",
  type: "Electives"
};

var PHW236A = {
  name: "PHW236A: Regulatory Science, Drug Development, & Public Health",
  term: ["Fall 2",],
  units: 3,
  color: "Tan",
  type: "Electives"
};

var PHW226F = {
  name: "PHW226F: Cost-Effectiveness Analysis",
  term: ["Spring 1",],
  units: 1,
  color: "Tan",
  type: "Elective"
};

// EPIDEMIOLOGY AND INFECTIOUS DISEASES

var PHW251 = {
  name: "PHW251: R for Public Health",
  term: ["Fall 15",],
  units: 2,
  color: "Tan",
  type: "Electives"
};

var PH271K = {
  name: "PH271K: Intro to Data Management & Programming in SAS for Public Health",
  term: ["Spring 15",],
  units: 2,
  color: "Green",
  type: "EpiBio Concentration"
};

var PHW250B = {
  name: "PHW250B: Epidemiologic Methods II",
  term: ["Fall 15",],
  units: 4,
  color: "Tan",
  type: "Electives"
};

var PH252C = {
  name: "PH252C: Interventional Trial Design",
  term: ["Spring 15",],
  units: 3,
  color: "Tan",
  type: "Electives"
};

var PHW241R = {
  name: "PHW241R: Statistical Analysis of Categorical Data",
  term: ["Spring 15",],
  units: 4,
  color: "Tan",
  type: "Electives"
};

var PHW253 = {
  name: "PHW253: Outbreak Investigations",
  term: ["Fall 2",],
  units: 3,
  color: "Tan",
  type: "Electives"
};

var PHW257 = {
  name: "PHW257: Public Health Preparedness & Emergency Response",
  term: ["Summer 1",],
  units: 3,
  color: "Tan",
  type: "Elective"
};

var PHW236A = {
  name: "PHW236A: Regulatory Science, Drug Development, & Public Health",
  term: ["Fall 2",],
  units: 3,
  color: "Tan",
  type: "Electives"
};

var PHW260 = {
  name: "PHW260: Infectious Disease",
  term: ["Fall 1",],
  units: 3,
  color: "Tan",
  type: "Electives"
};

// COMMUNITY HEALTH SCIENCES

var PHW205 = {
  name: "PHW205: Program Planning & Development",
  term: ["Summer 2",],
  units: 3,
  color: "Tan",
  type: "Elective"
};

var PHW206 = {
  name: "PHW206: Maternal & Child Health Nutrition",
  term: ["Summer 2",],
  units: 3,
  color: "Tan",
  type: "Elective"
}
var PHW206A = {
  name: "PHW206A: Nutrition Assessment",
  term: ["Spring 1",],
  units: 3,
  color: "Tan",
  type: "Electives"
}

var PHW218 = {
  name: "PHW218: Evaluation of Health & Social Programs",
  term: ["Spring 2",],
  units: 3,
  color: "Tan",
  type: "Electives"
};

var PHW219 = {
  name: "PHW219: Social & Behavioral Research: Intro to Survey Methods",
  term: ["Spring 1",],
  units: 3,
  color: "Tan",
  type: "Electives"
};

// SPATIAL DATA SCIENCE FOR PUBLIC HEALTH COURSES

var PHW272A = {
  name: "PHW272A: Intro to GIS for Public Health",
  term: ["Spring 1",],
  units: 3,
  color: "Tan",
  type: "Electives"
};

var PHW277 = {
  name: "PHW277: GIS for Public Health Practice",
  term: ["Spring 2",],
  units: 3,
  color: "Tan",
  type: "Elective"
};

var PHW272C = {
  name: "PHW272C: Applied Spatial Data for Public Health",
  term: ["Spring 2",],
  units: 3,
  color: "Tan",
  type: "Electives"
};

// GLOBAL HEALTH

var PHW212 = {
  name: "PHW212: Foundations of Global Health",
  term: ["Fall 1",],
  units: 3,
  color: "Tan",
  type: "Elective"
};

var PHW213 = {
  name: "PHW213: Global Health Ethics",
  term: ["Fall 2",],
  units: 3,
  color: "Tan",
  type: "Electives"
};

var PHW209 = {
  name: "PHW209: Comparative Health Systems",
  term: ["Spring 1",],
  units: 3,
  color: "Tan",
  type: "Electives"
};



var hpmElectives = [PHW209, PHW236A, PHW226F, PHW251, PH271K, PHW250B, PH252C, PHW241R, PHW253, PHW257, PHW260,
PHW205, PHW206, PHW206A, PHW218, PHW219, PHW272A, PHW277, PHW272C, PHW212, PHW213];

var hpmConcentration = [PHW289, PHW220M, PHW223, PHW224, PHW227A, PHW226A, PHW226C, PHW222A];

var hpmRecommendationFall = [PHW200G, PHW250, PHW200F, PHW142, PHW200E, PHW220M, PHW224, PHW226A, PHW222A, PHW227A, PHW289, PHW223, PHW251, PHW250B];

var hpmRecommendationFallMap = new Map([
  [PHW200G, ["Fall 15"]],
  [PHW250, ["Fall 15"]],
  [PHW200F, ["Spring 15"]],
  [PHW142, ["Spring 15"]],
  [PHW200E, ["Summer 1"]],
  [PHW220M, ["Summer 2"]],
  [PHW224, ["Fall 1"]],
  [PHW226A, ["Fall 2"]],
  [PHW222A, ["Spring 1"]],
  [PHW227A, ["Spring 2"]], 
  [PHW289, ["Summer 1"]],
  [PHW223, ["Summer 2"]],
  [PHW251, ["Fall 15"]],
  [PHW250B, ["Fall 15"]]
]);

var hpmRecommendationSpring = [PHW200G, PHW250, PHW200E, PHW220M, PHW200F, PHW142, PHW222A, PHW227A, PHW289, PHW223, PHW224, PHW226A, PHW226C, PHW272C];

var hpmRecommendationSpringMap = new Map([
  [PHW200G, ["Spring 15"]],
  [PHW250, ["Spring 15"]],
  [PHW200E, ["Summer 1"]],
  [PHW220M, ["Summer 2"]],
  [PHW200F, ["Fall 15"]],
  [PHW142, ["Fall 15"]],
  [PHW222A, ["Spring 1"]],
  [PHW227A, ["Spring 2"]],
  [PHW289, ["Summer 1"]], 
  [PHW223, ["Summer 2"]], 
  [PHW224, ["Fall 1"]],
  [PHW226A, ["Fall 2"]],
  [PHW226C, ["Spring 1"]],
  [PHW272C, ["Spring 2"]]
]);
