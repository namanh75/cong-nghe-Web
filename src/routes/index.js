const bookRoute = require("./bookRoutes")
const infoRoute = require("./infoRoutes")
const feedbackRoute = require("./feedbackRoutes")
const siteRoute = require("./siteRoutes")


function route(app){
    
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