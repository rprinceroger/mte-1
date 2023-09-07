//1st function
function countLetter(letter, sentence) {
    // Check if the letter is a single character
    if (letter.length === 1) {
        let count = 0;
        // Loop through each character in the sentence
        for (let i = 0; i < sentence.length; i++) {
            // Compare the current character with the letter
            if (sentence[i] === letter) {
                count++;
            }
        }
        return count;
    } else {
        // If the letter is not a single character, return undefined
        return undefined;
    }
}




//2nd function
function isIsogram(text) {
    // Convert the text to lowercase to disregard text casing
    text = text.toLowerCase();

    // Create an object to store seen characters
    const seen = {};

    // Loop through each character in the text
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        // Check if the character is already seen
        if (seen[char]) {
            return false; // If seen, it's not an isogram
        }
        // Mark the character as seen
        seen[char] = true;
    }

    // If no repeating character is found, it's an isogram
    return true;
}



//3rd function
function purchase(age, price) {
    if (age < 13) {
        return undefined; // For people aged below 13, return undefined
    }

    if ((age >= 13 && age <= 21) || age >= 65) {
        // For students aged 13 to 21 and senior citizens, apply a 20% discount
        const discountedPrice = price * 0.8;
        return discountedPrice.toFixed(2); // Return the discounted price rounded to 2 decimal places
    }

    // For people aged 22 to 64, return the price rounded to 2 decimal places
    return price.toFixed(2);
}





//4th function
function findHotCategories(items) {
    // Create an object to store unique categories with no stocks
    const hotCategories = {};

    // Iterate through the items array
    for (const item of items) {
        // Check if the category is already in hotCategories and stocks are zero
        if (item.stocks === 0) {
            hotCategories[item.category] = true; // Add the category to the object
        }
    }

    // Convert the object keys to an array to get unique categories
    const uniqueHotCategories = Object.keys(hotCategories);

    return uniqueHotCategories;
}

const items = [
    { id: 'tltry001', name: 'soap', stocks: 14, category: 'toiletries' },
    { id: 'tltry002', name: 'shampoo', stocks: 8, category: 'toiletries' },
    { id: 'tltry003', name: 'tissues', stocks: 0, category: 'toiletries' },
    { id: 'gdgt001', name: 'phone', stocks: 0, category: 'gadgets' },
    { id: 'gdgt002', name: 'monitor', stocks: 0, category: 'gadgets' }
];




//5th function
function findFlyingVoters(candidateA, candidateB) {
    // Create an array to store voters who voted for both candidates
    const flyingVoters = [];

    // Iterate through the candidateA array
    for (const voter of candidateA) {
        // Check if the voter also exists in candidateB
        if (candidateB.includes(voter)) {
            flyingVoters.push(voter); // Add the voter to the flyingVoters array
        }
    }

    return flyingVoters;
}


module.exports = {
    countLetter,
    isIsogram,
    purchase,
    findHotCategories,
    findFlyingVoters
};
