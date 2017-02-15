var tgdb = require("../tgdb-api"),
    download = require("download"),
    ls = require ("ls")

// Test
tgdb.GetGamesList({name: "Castlevania"}, (err, r) => { console.log(r) })
