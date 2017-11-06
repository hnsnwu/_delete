var foo1 = 10;

function test1() {
    foo2 = 5;
}

function test2() {
    var valu = 0;

    if (typeof foo1 != "undefined") {
        valu += foo1;
    }

    if (typeof foo2 != "undefined") {
        valu += foo2;
    }

    console.log("valu: ", valu);
    console.log("foo2: ", foo2);
}

test1();
test2();