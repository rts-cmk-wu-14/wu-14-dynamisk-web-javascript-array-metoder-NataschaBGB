document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 
    //opgave 1: Med udgangspunkt i numbersArray, skal du oprette et nyt array, som indeholder alle de tal som er større end 20.
    console.log("Opgave 1")
    const res1 = numbersArray.filter((numb) => numb > 20)
    console.log(res1);

    
    
    // Opgave 2
    // Tilføj katten "Sniffles" til catsArray.
    // Udskriv arrayet i konsollen.
    console.log("Opgave 2")
    const newCat = "Sniffles"
    catsArray.push(newCat)
    console.log(catsArray);

    
    
    // Opgave 3a
    // Check om der i dogsArray er en hund som hedder "Trixie".
    // Udskriv "true" eller "false" i konsollen afhængig af svaret.
    console.log("Opgave 3a")
    const trixie = "Trixie"
    let boolA = true
    // if array contains string       if true        if false
    dogsArray.includes(trixie) ? boolA = true : boolA = false;
    console.log(boolA);
    
    // Opgave 3b
    // Check om der i dogsArray er en hund som hedder "Baxter".
    // Udskriv "true" eller "false" i konsollen afhængig af svaret.
    console.log("Opgave 3b")
    const baxter = "Baxter"
    let boolB = true
    // if array contains string       if true        if false
    dogsArray.includes(baxter) ? boolB = true : boolB = false;
    console.log(boolB);

    
    
    //     Opgave 4a
    // Check om der i catsArray er en kat som hedder "Bagheera".
    // Udskriv katten i konsollen hvis den findes og ellers "undefined".
    // console.log("Opgave 4a", ...)
    console.log("Opgave 4a")
    const bagheera = "Bagheera"
    // if array contains string      if true               if false
    catsArray.includes(bagheera) ? console.log(bagheera) : console.log(undefined);

    // Opgave 4b
    // Check om der i catsArray er en kat som hedder "Salem".
    // Udskriv katten i konsollen hvis den findes og ellers "undefined".
    console.log("Opgave 4b")
    const salem = "Salem"
    // if array contains string      if true               if false
    catsArray.includes(salem) ? console.log(salem) : console.log(undefined);

    
    
    //     Opgave 5
    // Med udgangspunkt i numbersArray, skal du oprette et nyt array, som indeholder alle tallene i arrayet ganget med 3.
    // Udskriv det nye array i konsollen:
    console.log("Opgave 5")
    // use the function to multiply every value with 3 on elemnents in numbersArray
    const newArray = numbersArray.map(multiply);
    // multiply every value with 3
    function multiply(value) {
        return value * 3;
    }
    console.log(newArray);
    

    
    //     Opgave 6
    // Udskriv alle hundene i dogsArray i én lang streng.
    // (Sådan her: BarneyMollyBaxter...)
    // Udskriv strengen konsollen:
    console.log("Opgave 6")
    const dogsString = dogsArray.toString()
    console.log(dogsString);
    console.log("Opgave 6 med mellemrum:");
    const dogsSpace = dogsArray.join(", ")
    console.log(dogsSpace);
    
    

    
    
    //     Opgave 7a
    // Find ud af hvilket index "Mango" har i fruitsArray.
    // Udskriv indexet i konsollen.

    // Opgave 7b
    // Find ud af hvilket index "Blåbær" har i fruitsArray.
    // Udskriv indexet i konsollen.

    
    
    // Opgave 8
    // Lad os forestille os, at dogsArray er en liste af tilmeldte hunde til en udstilling.
    // Den familie der har hunden "Polly" er desværre blevet forhindret i at deltage i udstillingen.
    // Fjern hunden "Polly" fra dogsArray og udskriv det nye array i konsollen
    //  ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    
    // console.log("Opgave 8", dogsArray);

}) // ends DOMContentLoaded

