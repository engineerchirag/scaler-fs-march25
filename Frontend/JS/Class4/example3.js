const arr = ["Somya", "Suman", "Arunava"];


function generateUserName(email) {
    const name = email.trim().split("@")[0].toLowerCase();
    const firstChar = name.charAt(0).toUpperCase();
    const restChar = name.slice(1);

    console.log(firstChar + restChar);
    return firstChar + restChar;
}

generateUserName("chirag@gmail.com"); // Chirag
generateUserName(" Arati@gmail.com "); // Arati
generateUserName("SALEEM@gmail.com "); // Saleem
generateUserName("chirag.goel@gmail.com"); // Chirag.goel

// Enhance above function to support below cases
generateUserName("chirag.goel@gmail.com"); // Chirag Goel
generateUserName("chirag_goel@gmail.com"); // Chirag Goel

