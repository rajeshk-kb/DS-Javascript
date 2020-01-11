
// var str = 'Flipkart';
// var pattern = 'lipk?t';

// var str = 'Flipkart';
// var pattern = 'Flip?t';


var str = 'Phonepe';
var pattern = '-h*p?';

if (pattern.charAt(0) == '-') {
    console.log('Invalid String..')
    return false;
} else if (pattern.indexOf('*') !== -1 && pattern.indexOf('?') !== -1) {
    if (pattern.indexOf('*') < pattern.indexOf('?')) {
        var strBefore = pattern.split('*')[0];
        var strAfter = pattern.split('*')[1].split('?')[0];
        var veryLast = pattern.split('*')[1].split('?')[1];

        if (str.indexOf(strBefore) !== -1) {
            var getIndex = str.indexOf(strBefore);
            var lastIndex = strBefore.length + getIndex - 1;

            var firstDone = false;

            strBefore = strBefore + str.substring(lastIndex + 1, lastIndex + 4);
            var joinStrings = '';
            lastIndex = strBefore.length + getIndex - 1;
            for (var i = 1; i <= str.length - strAfter.length; i++) {
                joinStrings = strBefore + strAfter;
                if (str.indexOf(joinStrings) !== -1) {
                    firstDone = true;
                    console.log('matched', joinStrings)
                    break;
                } else {
                    strBefore = strBefore + str.charAt(lastIndex + i);
                }
            }

            if (firstDone) {
                var substr = joinStrings
                var strBefore = joinStrings;
                var strAfter = veryLast;
                if (str.indexOf(substr) !== -1) {
                    var getIndex = str.indexOf(substr);
                    var lastIndex = substr.length + getIndex - 1;
                    //make string..
                    for (var i = 1; i <= 3; i++) {
                        var joinStrings = strBefore + strAfter;
                        if (str.indexOf(joinStrings) === str) {
                            console.log('matched', joinStrings)
                            break;
                        } else {
                            strBefore = strBefore + str.charAt(lastIndex + i);
                        }

                    }
                }
            } else {
                console.log('Not Matched')
                return false;
            }

        } else {
            console.log('Not Matched')
            return false;
        }
    } else {
        console.log('Not Matched')
        return false;
    }
} else if (pattern.indexOf('*') !== -1) {
    var strBefore = pattern.split('*')[0];
    var strAfter = pattern.split('*')[1];

    if (str.indexOf(strBefore) !== -1) {
        var getIndex = str.indexOf(strBefore);
        var lastIndex = strBefore.length + getIndex - 1;
        //make string..
        strBefore = strBefore + str.substring(lastIndex + 1, lastIndex + 4);

        lastIndex = strBefore.length + getIndex - 1;
        var found = false;
        for (var i = 1; i <= str.length - strAfter.length; i++) {
            var joinStrings = strBefore + strAfter;
            if (str.indexOf(joinStrings) !== -1) {
                found = true;
                break;
            } else {
                strBefore = strBefore + str.charAt(lastIndex + i);
            }
        }
        if (found) {
            console.log('matched', joinStrings)
            return;
        } else {
            console.log('Not Matched')
            return false;
        }
    } else {
        console.log('Not Matched')
        return false;
    }
} else if (pattern.indexOf('?') !== -1) {
    var strBefore = pattern.split('?')[0];
    var strAfter = pattern.split('?')[1];
    if (str.indexOf(strBefore) !== -1) {
        var getIndex = str.indexOf(strBefore);
        var lastIndex = strBefore.length + getIndex - 1;
        //make string..
        var found = false;
        for (var i = 1; i <= 3; i++) {
            var joinStrings = strBefore + strAfter;
            if (str.indexOf(joinStrings) !== -1) {
                found = true;
                break;
            } else {
                strBefore = strBefore + str.charAt(lastIndex + i);
            }
        }
        if (found) {
            console.log('matched', joinStrings)
            return;
        } else {
            console.log('Not Matched')
            return false;
        }
    } else {
        console.log('Not Matched')
        return false;
    }
} else if (str.indexOf(pattern) !== -1) {
    console.log('matched', pattern);
    return false;
} else {
    console.log('Not Matched')
    return false;


}








// Amazon ----
// https://www.geeksforgeeks.org/add-two-numbers-represented-by-linked-lists/







