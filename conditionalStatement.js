function launchBrowser(browserName) {
    if (browserName == "Chrome") { // Check whether the browserName is "chrome"
        console.log("Launch brower", browserName);// Print the message if the browser is chrome
    } else {
        console.log("Launch Other browser"); // Print the message if the browser is other than chrome
    }
}
launchBrowser("Other"); // Call the launchBrowser function and pass chrome as an argument


function runTest(tesType) {
    switch (tesType) { // Use switch to check the testType value
        case "Smoke": // Execute this case when testType is smoke
            console.log("Smoke Test performed");
            break;
        case "sanity": // Execute this case when testType is sanity
            console.log("Sanity Test performed");
            break;
        case "regression": // Execute this case when testType is regression
            console.log("regression Test performed");
            break;
        default:  // Execute this case when testType doesn't match any case
            console.log("Smoke Test performed");
            break;
    }
}
runTest("regression") // Call the runTests function and pass regression as an argument
runTest("sanity") // Call the runTests function and pass sanity as an argument