const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


mongoose.connection.on("error", err => {
    console.error(err);
    console.log(
        "%s MongoDB connection error. Please make sure MongoDB is running.",
        // chalk.red("✗")
    );
    process.exit();
});



