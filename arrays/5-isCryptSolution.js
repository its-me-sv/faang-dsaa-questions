// My Solution
const isCryptSolution = (crypt, solution) => {
    // Converting solution array to object
    const solutionObject = solution.reduce((acc, val) => {
        acc[val[0]] = val[1];
        return acc;
    }, {});
    
    // Mapping each letter to respective key
    let decryptedCrypt = crypt.map(word => [...word].map(letter => solutionObject[letter]));

    for (let i = 0; i < decryptedCrypt.length; i += 1) {
        // Checking for trailing zeros for word length > 1
        if (decryptedCrypt[i][0] === "0" && decryptedCrypt[i].length > 1)
            return false;
        // Joining array elements and converting into number
        decryptedCrypt[i] = Number(decryptedCrypt[i].join(""));
    }

    // Checking for valid arithmetic equation
    return decryptedCrypt[0] + decryptedCrypt[1] == decryptedCrypt[2];
};

// Most Voted Solution (JAVA)
/*
boolean isCryptSolution(String[] crypt, char[][] solution) {
    for(char[] arr : solution){
        for(int i = 0; i < crypt.length; i++){
            crypt[i]=crypt[i].replace(arr[0],arr[1]);
        }
        System.out.println(Arrays.toString(crypt));
    }

    for(int i = 0; i < crypt.length; i++){
        if(!crypt[i].equals("0")&&crypt[i].startsWith("0"))
            return false;
    }

    return Long.parseLong(crypt[0])+Long.parseLong(crypt[1])==Long.parseLong(crypt[2]);
}
*/