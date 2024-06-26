const calculateWeight = (earthWeight, planet) => {
    if (planet === "Mercury") {
      return earthWeight * 0.378;
    } else if (planet === "Venus") {
      return earthWeight * 0.907;
    } else if (planet === "Mars") {
      return earthWeight * 0.377;
    } else if (planet === "Jupiter") {
      return earthWeight * 2.36;
    } else if (planet === "Saturn") {
      return earthWeight * 0.916;
    } else {
      return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
    }
  };
  
  //Uncomment to test:
  //console.log(calculateWeight(100, "Jupiter"))
  
  // We encourage you to add more function calls of your own to test your code!

  const compareEarthGravity = (planet) => {
    if (planet === "Mercury") {
      return "Mercury's gravity is 0.71 of Earth's gravity";
    } else if (planet === "Venus") {
      return "Mercury's gravity is 0.71 of Earth's gravity";
    } else if (planet === "Mars") {
      return "Mercury's gravity is 0.71 of Earth's gravity";
    } else if (planet === "Jupiter") {
      return "Mercury's gravity is 0.71 of Earth's gravity";
    } else if (planet === "Saturn") {
      return "Mercury's gravity is 0.71 of Earth's gravity";
    } else {
      return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
    }
  };
  
  //console.log(compareEarthGravity("Jupiter"));
  