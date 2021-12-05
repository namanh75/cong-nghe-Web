const registerRoute = require("./registerRoutes")
const loginRoute = require("./loginRoutes")
const bookRoute = require("./bookRoutes")
const infoRoute = require("./infoRoutes")
const feedbackRoute = require("./feedbackRoutes")
const siteRoute = require("./siteRoutes")


function route(app){
    
    //register
    app.use("/register", registerRoute)

    //login
    app.use("/login", loginRoute)

    //book
    app.use("/book", bookRoute)

    //info
    app.use("/info", infoRoute)

    //feedback
    app.use("/feedback", feedbackRoute)

    //home
    app.use("/", siteRoute)

}

module.exports = route