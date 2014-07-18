var pageMod = require("sdk/page-mod");
var self = require("sdk/self"); 

pageMod.PageMod({
  include: "*.google.com/calendar/*",
  contentScriptFile: [self.data.url("jquery-2.1.0.min.js"), self.data.url("events.js")]
});