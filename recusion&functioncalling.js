let count  = 3;
function example() {
    console.log(count);
    count = count - 1;
    if (count == 0) return; {
         example()
        
    }
}


example()
