let hospitals = [
  {
    id: 1,
    name: "Hospital A",
    location: "Delhi",
    noOfBeds: 450,
    availability: "Yes",
  },
  {
    id: 2,
    name: "Hospital B",
    location: "Pune",
    noOfBeds: 150,
    availability: "No",
  },
  {
    id: 3,
    name: "Hospital C",
    location: "Pune",
    noOfBeds: 350,
    availability: "Yes",
  },
];

// a) Number of Beds > 200
console.log(hospitals.filter((e) => e.noOfBeds > 200));

// b) Availability of Beds = Yes
console.log(hospitals.filter((e) => e.availability == "Yes"));

// c) Location = Pune
console.log(hospitals.filter((e) => e.location == "Pune"));
