const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(
      "mongodb+srv://jamil:Jamil@mongodb@cluster0.9qtun.mongodb.net/users?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    console.log(`MongoDB connected : ${con.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
