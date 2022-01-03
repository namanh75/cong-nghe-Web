const bookRoute = require("./bookRoutes")
const infoRoute = require("./infoRoutes")
const feedbackRoute = require("./feedbackRoutes")
const siteRoute = require("./siteRoutes")
const doctorRoute = require("./doctorRoutes")

function route(app){
    
    //book
    app.use("/schedule", bookRoute)

    //doctor
    app.use("/doctor", doctorRoute)

    //info
    app.use("/information", infoRoute)

    //feedback
    app.use("/feedback", feedbackRoute)

    //home
    app.use("/", siteRoute)

}

module.exports = route