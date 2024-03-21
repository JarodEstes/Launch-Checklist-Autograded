// Write your JavaScript code here!


window.addEventListener("load", function() {



    const form = document.querySelector("form");
    //formSubmission
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById('faultyItems');
        formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel);
        // create these variables, pull from the html, and assign the value that was entered in the form.
    });


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
        //pulling planet data and storing the result in listedPlanets
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let planet = pickPlanet(listedPlanets);
    let name = planet.name;
    let diameter = planet.diameter;
    let star = planet.star;
    let distance = planet.distance;
    let moons = planet.moons;
    let image = planet.image;
    addDestinationInfo(document, name, diameter, star, distance, moons, image);
    })
    //created planet to receive a random planet from our pickPlanet function. Then we create variables to assign the info to.
    //Then we pass all our variables into addDestinationInfo
    
    });
