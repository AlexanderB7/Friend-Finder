// ==============================================================================
// DEPENDENCIES
// ==============================================================================
var express = require("express");
var path = require("path");

// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================
var app = express();
var PORT = process.env.PORT || 3500;
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// ================================================================================
// ROUTER
// ================================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});