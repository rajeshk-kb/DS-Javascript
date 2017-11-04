
'use strict';


// Input: A string like {"a":"1", "b":"2","a":"foo"}
// Output: A JSON string: {"a":["1","foo"], "b":"2"}  


function stringToJson(str) {
    console.log(str)
    var arr = str.slice(1, -1).split(', ')
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var key = arr[i].split(':')[0].slice(1, -1);
        var value = arr[i].split(':')[1].slice(1, -1);
        if (obj.hasOwnProperty(key)) {
            if (obj[key].length > 1) {
                obj[key].push(value)
            } else {
                var arr2 = [];
                arr2.push(obj[key])
                arr2.push(value)
                obj[key] = arr2;
            }
        } else {
            obj[key] = value;
        }
    }
    console.log(obj)
}

var Input = '{"a":"1", "b":"2", "a":"foo", "a":"ram", "c":"10", "b":"4"}'
stringToJson(Input)