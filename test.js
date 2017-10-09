console.log( !(function() {
    for(var i = 0; i < 3; i++) {
        // i++;
        console.log(i);
    }
})() );

// result:
// 0
// 1
// 2
// true

// test();