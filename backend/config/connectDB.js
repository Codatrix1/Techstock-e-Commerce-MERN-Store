import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  // For getting rid of Deprecation warnings in Mongoose V5 or previous versions
  // const conn = await mongoose.connect(process.env.MONGO_URI, {
  //   useNewUrlParser: true,
  //   useCreateIndex: true,
  //   useFindAndModify: false,
  //   useUnifiedTopology: true,
  // });

  // For Mongoose V6.2.1: Latest as of today
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.error(`ERROR 🔥: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
