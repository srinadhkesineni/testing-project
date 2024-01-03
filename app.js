let result = document.querySelector(".result");
// let result_ = document.getElementById("result_");
// result_.style.display="none";
function getNames() {
    let boyName = document.getElementById("boy").value.trim();
    let girlName = document.getElementById("girl").value.trim();
    return { boyName, girlName };
}

function countOccurrences(name) {
    let nameObject = {};
    for (let i = 0; i < name.length; i++) {
        if (checkAlphabets(name[i])) {
            if (name[i] === ' ') {
                continue; // Skip spaces
            } else if (nameObject[name[i]] >= 1) {
                nameObject[name[i]]++;
            } else {
                nameObject[name[i]] = 1;
            }
        } else {
            alert("Numbers or special characters are not allowed in the names. Please enter only alphabetic characters.");
            return null; // Return null to indicate an error
        }
    }
    console.log(nameObject)
    return nameObject;
}

function countOccurrences_(name,boyObj) {
    let nameObject = {};
    for (let i = 0; i < name.length; i++) {
        if (checkAlphabets(name[i])) {
            if (name[i] === ' ') {
                continue; // Skip spaces
            } else if (boyObj[name[i]] >= 1) {
                boyObj[name[i]]--;
            } 
            else {
                if (nameObject[name[i]] >= 1) {
                    nameObject[name[i]]++;
                } 
                else {
                    nameObject[name[i]] = 1;
                }
            }
        } else {
            alert("Numbers or special characters are not allowed in the names. Please enter only alphabetic characters.");
            return null; // Return null to indicate an error
        }
    }
    console.log(nameObject)
    return nameObject;
}

function calculateFlames(boyObject, girlObject) {
    let count = 0;
    for (let key in boyObject) {
        if (boyObject.hasOwnProperty(key) && typeof boyObject[key] === 'number') {
            count += boyObject[key];
        }
    }
    if(girlObject !== null)
    {
        for (let key in girlObject) {
            if (girlObject.hasOwnProperty(key) && typeof girlObject[key] === 'number') {
                count += girlObject[key];
            }
        }
    }

    let flames = "flames";
    if(count !==0)
    {
    while (flames.length > 1) {
        let index = (count - 1) % flames.length;
        flames = flames.substring(index + 1) + flames.substring(0, index);
    }
}
    else
    {
        flames="f";
    }
    result.classList.add("result1");
    let flames_ = {
        "f": "Friendship", "l": "Love", "a": "Attraction", "m": "Marriage", "e": "enemies", "s": "Sibblings"
    };
    const para = document.createElement("p");
    const node = document.createTextNode(flames_[flames]);
    para.appendChild(node);
    result.innerHTML = ""; // Clear previous result
    result.appendChild(para);
}

function checkAlphabets(char) {
    return /^[a-zA-Z\s]*$/.test(char); // Regex to check if character is alphabetic or a space
}


function onBtnClick() {
    let { boyName, girlName } = getNames();
    if (boyName.length === 0 || girlName.length === 0) {
        alert("Please enter both names.");
    } else {
        let boyObject = countOccurrences(boyName);
        let girlObject = countOccurrences_(girlName,boyObject);
        // if (boyObject !== null|| girlObject !== null) {
            console.log(boyObject)
            console.log(girlObject)
            calculateFlames(boyObject, girlObject);
        // }
    }
}

let btn = document.getElementById("btn");
btn.addEventListener("click", onBtnClick);