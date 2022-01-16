// https://www.geeksforgeeks.org/find-excel-column-name-given-number/
let alphaChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getExcelColumn(num){
    if (num < 26){
        return alphaChars.charAt(num-1);
    }else{
        let r = num%26;
        let p = Math.floor(num/26);
        if (r == 0) {
            if (p == 1) {
                return alphaChars.charAt(25);
            }else{
                return getExcelColumn(p-1) +""+ alphaChars.charAt(25);
            }
        }else {
            return getExcelColumn(p) +""+alphaChars.charAt(r-1);
        }
    }
}
            
let result = getExcelColumn(705);

console.log("CSV columns : ",result);


// Input          Output
//  26             Z
//  51             AY
//  52             AZ
//  80             CB
//  676            YZ
//  702            ZZ
//  705            AAC
