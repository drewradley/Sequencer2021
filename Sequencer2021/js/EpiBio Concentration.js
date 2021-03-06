// Required EpiBio Courses

var PHW241R = {
  name: "PHW241R: Intermediate Biostatistics for Public Health",
  term: "Spring 15",
  units: 4,
  color: "Green",
  type: "EpiBio Concentration"
};

var PHW250B = {
  name: "PHW250B: Epidemiologic Methods II",
  term: "Fall 15",
  units: 4,
  color: "Green",
  type: "EpiBio Concentration"
};
// Required Competency in Data Management (at least 1)
var PHW251 = {
  name: "PHW251: R for Public Health",
  term: "Fall 15",
  units: 2,
  color: "Green",
  type: "EpiBio Concentration"
};

var PH271K = {
  name: "PH271K: Intro to Data Management & Programming in SAS for Public Health",
  term: "Spring 15",
  units: 2,
  color: "Green",
  type: "EpiBio Concentration"
};

// Additional Courses (at least 5 units)
var PHW219 = {
  name: "PHW219: Intro to Survey Methods",
  term: "Spring 1",
  units: 3,
  color: "Green",
  type: "EpiBio Concentration"
};

var PHW225A = {
  name: "PHW225A: Intro to Applied Implementation Science",
  term: "Spring 1",
  units: 1,
  color: "Green",
  type: "EpiBio Concentration"
};

var PHW225B = {
  name: "PHW225B: Implementation Science Case Studies in Low & Middle Income Countries",
  term: "Spring 2",
  units: 1,
  color: "Green",
  type: "EpiBio Concentration"
};

var PHW251B = {
  name: "PHW251B: Data Visualization for Public Health",
  term: "Spring 15",
  units: 2,
  color: "Green",
  type: "EpiBio Concentration"
};

var PH252 = {
  name: "PH252: Epidemiological Analysis",
  term: "Fall 15",
  units: 4,
  color: "Green",
  type: "EpiBio Concentration"
};

var PH252C = {
  name: "PH252C: Interventional Trial Design",
  term: "Spring 15",
  units: 3,
  color: "Green",
  type: "EpiBio Concentration"
};

var PHW253 = {
  name: "PHW253: Outbreak Investigations",
  term: "Fall 2",
  units: 3,
  color: "Green",
  type: "EpiBio Concentration"
};

var PHW268 = {
  name: "PHW268: Water, Sanitation, & Hygiene (WaSH) for Health & Development",
  term: "Summer 2",
  units: 3,
  color: "Green",
  type: "EpiBio Concentration"
};

var PHW272C = {
  name: "PHW272C: Applied Spatial Data Science for Public Health",
  term: "Spring 2",
  units: 3,
  color: "Green",
  type: "EpiBio Concentration"
};

var epiBioRequirements = [PHW241R, PHW250B, PHW251, PH252, PHW225A];


//
// ----------------------------ELECTIVES-------------------------------------------
// INFECTIOUS DISEASES
var PHW260 = {
  name: "PHW260: Infectious Disease",
  term: "Fall 1",
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

var PHW257 = {
  name: "PHW257: Emergency Preparedness & Disaster Management",
  term: "Summer 1",
  units: 3,
  color: "Tan",
  type: "Elective"
};

// GLOBAL HEALTH

var PHW212 = {
  name: "PHW212: Foundations of Global Health",
  term: "Fall 1",
  units: 3,
  color: "Tan",
  type: "Elective"
};

var PHW213 = {
  name: "PHW213: Global Health Ethics",
  term: "Fall 2",
  units: 3,
  color: "Tan",
  type: "Electives"
};

var PHW209 = {
  name: "PHW209: Comparative Health Systems",
  term: "Spring 1",
  units: 3,
  color: "Tan",
  type: "Electives"
};

// SPATIAL DATA SCIENCE FOR PUBLIC HEALTH COURSES

var PHW272A = {
  name: "PHW272A: Intro to GIS for Public Health",
  term: "Spring 1",
  units: 3,
  color: "Tan",
  type: "Electives"
};

var PHW277 = {
  name: "PHW277: GIS for Public Health Practice",
  term: "Spring 2",
  units: 3,
  color: "Tan",
  type: "Elective"
};

var PHW272C = {
  name: "PHW272C: Applied Spatial Data for Public Health",
  term: "Spring 2",
  units: 3,
  color: "Tan",
  type: "Electives"
};

// COMMUNITY HEALTH SCIENCES

var PHW205 = {
  name: "PHW205: Program Planning & Development",
  term: "Summer 2",
  units: 3,
  color: "Tan",
  type: "Elective"
};

var PHW206 = {
  name: "PHW206: Maternal & Child Health Nutrition",
  term: "Summer 2",
  units: 3,
  color: "Tan",
  type: "Elective"
}
var PHW206A = {
  name: "PHW206A: Nutrition Assessment",
  term: "Spring 1",
  units: 3,
  color: "Tan",
  type: "Electives"
}

var PHW218 = {
  name: "PHW218: Evaluation of Health & Social Programs",
  term: "Spring 2",
  units: 3,
  color: "Tan",
  type: "Electives"
};

var PHW219 = {
  name: "PHW219: Social & Behavioral Research: Intro to Survey Methods",
  term: "Spring 1",
  units: 3,
  color: "Tan",
  type: "Electives"
};

// REGULATORY SCIENCE COURSES

var PHW209 = {
  name: "PHW209: Comparative Health Systems",
  term: "Spring 1",
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

var PHW226F = {
  name: "PHW226F: Cost-Effectiveness Analysis",
  term: "Spring 1",
  units: 1,
  color: "Tan",
  type: "Elective"
};


var epiBioElectives = [PHW260, PHW253, PHW257, PHW212, PHW209, PHW213, PHW272A, PHW277, PHW272C,
PHW205, PHW206, PHW206A, PHW218, PHW219, PHW209, PHW236A, PHW226F];

var epiBioConcentration = [PHW200G, PHW200F, PHW200E, PHW142, PHW250, PHW289, PHW241R, PHW250B, PHW251, PH252, PHW225A,
PHW260, PHW253, PHW257];
