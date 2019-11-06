/**
 * prints out strings to the console based on the multiples of 3 and 5.
 * @param {None} 
 * @return {None}
 */
function zeroCool(){
    for (var x=1; x <= 100; x++){
        if( x % 3 == 0 && x % 5 == 0 ) {
            console.log("ZeroCool");
        } 
        else if( x % 3 == 0 ) {
            console.log("Zero");
            }
        else  if( x % 5 == 0 ) {
            console.log("Cool");
            }
        else {
            
            console.log(x);
    } 
}
}

zeroCool();