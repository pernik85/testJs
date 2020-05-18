function attempt(availabel, allowed, preferred){
    var result = new Array();
    if(preferred.indexOf('any') != -1 ){
        for(var i = 0; i < allowed.length; i++){
            if(availabel.indexOf(allowed[i]) != -1 || allowed[i] == 'any'){
                result[result.length] = allowed[i];
            } else if(allowed[i] == 'any'){
                result[result.length] = allowed[0];
            }
        }
    } else {
        for(var i = 0; i < preferred.length; i++){
            if(availabel.indexOf(preferred[i]) != -1 && (allowed.indexOf(preferred[i])  != -1 || allowed.indexOf('any')  != -1 )) {
                result[result.length] = preferred[i];
            } else if((allowedVal = getAllowedValueIfNotReferred(availabel, allowed, preferred[i])) !== null){
                result[result.length] = allowedVal;
            }
        }
    }


    return result.filter( onlyUnique );
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}


function getAllowedValueIfNotReferred(availabel, allowed, preferredValue) {
    var result = null;

    for(var i = 0; i < allowed.length; i++){
        if(availabel.indexOf(allowed[i]) != -1 && (allowed[i] > preferredValue || result === null) && !(result !== null && result > allowed[i])){
            result = allowed[i];
        }
    }

    return result;
}

console.log(attempt(
    [240, 360, 720],
    [360, 720],
    [1080]
));

console.log(attempt(
    [240, 720],
    [360, 720],
    [1080]
));

console.log(attempt(
    [240],
    [360, 720],
    [1080]
));

console.log(attempt(
    [240, 360, 720],
    [240, 360, 720, 1080],
    [240, 360]
));

console.log(attempt(
    [240, 720],
    [240, 360, 720, 1080],
    [240, 360]
));

console.log(attempt(
    [240, 720],
    [240, 360, 1080],
    [240, 720]
));

console.log(attempt(
    [720],
    [240, 360, 1080],
    [240, 360]
));

console.log(attempt(
    [240, 360],
    [240, 360],
    [720, 1080]
));

console.log(attempt(
    [240, 360, 720],
    [360, 'any'],
    [360, 720]
));

console.log(attempt(
    [240, 360, 720],
    [240, 360, 720],
    ['any', 720]
));

console.log(attempt(
    [240, 360, 720],
    [360, 1080],
    ['any', 720]
));

console.log(attempt(
    [240, 360, 720],
    [1080],
    ['any', 720]
));