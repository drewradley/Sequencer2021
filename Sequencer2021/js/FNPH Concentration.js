// Required
var PHW207A = {
    name: "PHW207A: PH Maternal & Child Health Nutrition",
    term: ["Summer 2"],
    units: 3, //doesn't have a unit yet
    color: "Blue",
    type: "PHN Concentration"
};

var PHW206A = {
    name: "PHW206A: Nutrition Assessment",
    term: ["Spring 1"],
    units: 3, //doesn't have a unit yet
    color: "Blue",
    type: "PHN Concentration"
}

var PHW205 = {
    name: "PHW205: Program Planning",
    term: ["Summer 2"],
    units: 3,
    color: "Blue",
    type: "PHN Concentration"
};

var PHW206B = {
    name: "PHW206B: Food & Nutrition Policy",
    term: ["Fall 2"],
    units: 3,
    color: "Blue",
    type: "PHN Concentration"
}

var PHW218 = {
    name: "PHW218: Evaluation of Health & Social Programs",
    term: ["Spring 2"],
    units: 3,
    color: "Blue",
    type: "PHN Concentration"
}

var phnRequirements = [PHW206, PHW205, PHW206A, PHW206A, PHW218];

//
// ----------------------------ELECTIVES-------------------------------------------
//

var PHW204 = {
    name: "PHW204: Mass Communication in Public Health",
    term: ["Summer 2"],
    units: 3,
    color: "Tan",
    type: "Elective"
};

var PHW212 = {
    name: "PHW212: Foundations of Global Health",
    term: ["Fall 1"],
    units: 3,
    color: "Tan",
    type: "Elective"
};

var PHW213 = {
    name: "PHW213: Global Health Ethics",
    term: ["Fall 2"],
    units: 3,
    color: "Tan",
    type: "Electives"
};

var PHW219 = {
    name: "PHW219: Social and Behavioral Research: Intro to Survey Methods",
    term: ["Spring 1"],
    units: 3,
    color: "Tan",
    type: "Electives"
};

var PHW220M = {
    name: "PHW220M: Health Policy Methods",
    term: ["Fall 1"],
    units: 3,
    color: "Tan",
    type: "Elective"
};

var PHW241 = {
    name: "PHW241: Statistical Analysis of Categorical Data",
    term: ["Spring 15"],
    units: 4,
    color: "Tan",
    type: "Electives"
};

var PHW277 = {
    name: "PHW277: GIS for Public Health",
    term: ["Spring 2"],
    units: 3,
    color: "Tan",
    type: "Elective"
};


var fnphElectives = [PHW204, PHW212, PHW213, PHW219, PHW220M, PHW241, PHW277]; 

var fnphConcentration = [PHW289, PHW206, PHW205, PHW206A, PHW206B, PHW218, PHW204, PHW212, PHW213, PHW219,
PHW220M, PHW241R, PHW277];

var fnphRecommendation = [PHW200G, PHW250, PHW200F, PHW142, PHW200E, PHW205, PHW212, PHW206B, PHW206A, PHW218, PHW289, PHW206, PHW220M, PHW213];

var fnphRecommendationFall = [PHW200G, PHW250, PHW200F, PHW142, PHW200E, PHW205, PHW212, PHW206B, PHW206A, PHW218, PHW289, PHW206, PHW220M, PHW213];

var fnphRecommendationFallMap = new Map([
    [PHW200G, ["Fall 15"]],
    [PHW250, ["Fall 15"]], 
    [PHW200F, ["Spring 15"]],
    [PHW142, ["Spring 15"]],
    [PHW200E, ["Summer 1"]],
    [PHW205, ["Summer 2"]],
    [PHW212, ["Fall 1"]],
    [PHW206B, ["Fall 2"]],
    [PHW206A, ["Spring 1"]],
    [PHW218, ["Spring 2"]],
    [PHW289, ["Summer 1"]], 
    [PHW206, ["Summer 2"]], 
    [PHW220M, ["Fall 1"]],
    [PHW213, ["Fall 2"]]
])

var fnphRecommendationSpring = [PHW200G, PHW250, PHW200E, PHW205, PHW200F, PHW142, PHW206A, PHW218, PHW289, PHW206, PHW220M, PHW206B, PHW219, PHW277];

var fnphRecommendationSpringMap = new Map([
    [PHW200G, ["Spring 15"]], 
    [PHW250, ["Spring 15"]],
    [PHW200E, ["Summer 1"]],
    [PHW205, ["Summer 2"]],
    [PHW200F, ["Fall 15"]],
    [PHW142, ["Fall 15"]],
    [PHW206A, ["Spring 1"]],
    [PHW218, ["Spring 2"]],
    [PHW289, ["Summer 1"]],
    [PHW206, ["Summer 2"]],
    [PHW220M, ["Fall 1"]],
    [PHW206B, ["Fall 2"]],
    [PHW219, ["Spring 1"]],
    [PHW277, ["Spring 2"]]
])
