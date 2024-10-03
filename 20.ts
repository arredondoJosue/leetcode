// Submission: July 18, 2024
// Status: Wrong Answer

function isValid(s: string): boolean {
    if(s.length == 0) return true;
    let bracketCounter = {
        "(": 0,
        ")": 0,
        "{": 0,
        "}": 0,
        "[": 0,
        "]": 0
    };

    const bracketMap = new Map();
    bracketMap.set("(", ")");
    bracketMap.set(")", "(");
    bracketMap.set("{", "}");
    bracketMap.set("}", "{");
    bracketMap.set("[", "]");
    bracketMap.set("]", "[");
    
    let previousBracket = "";

    for (let i = 0; i < s.length; i++){
        console.log("current:", s[i], "prev:", previousBracket)
        if(previousBracket === "") {
            previousBracket = s[i];
        } else if (bracketMap.get(s[i]) !== previousBracket) {
            return false;
        }

        if (i !== 0 && i % 2 !== 0) previousBracket = "";
        
        bracketCounter[s[i]] += 1
    }

    if(bracketCounter["("] == bracketCounter[")"]
        && bracketCounter["{"] == bracketCounter["}"]
        && bracketCounter["["] == bracketCounter["]"]) {
            return true;
    }

    return false;
};