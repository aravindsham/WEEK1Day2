const browserVersion = "Chrome";
function getBrowserVersion() {
    if (browserVersion === "Chrome") {
        var browserVersionVar = "Chrome using var";
        let browserVersionLet = "Chrome using let";
        console.log(browserVersionVar,typeof browserVersionVar); // var is function-scoped.It is accessible.
        console.log(browserVersionLet,typeof browserVersionLet); // Let  is block -scoped.It is accessible.
    }
    console.log(browserVersionVar,typeof browserVersionVar);
   // console.log(browserVersionLet,typeof browserVersionLet); //let is block-scoped. It is accessible only inside the { } where it was declared
}
getBrowserVersion();
