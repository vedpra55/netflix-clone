import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState > 1) {
    return;
  }
  mongoose
    .connect(process.env.NEXT_PUBLIC_MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => console.log("connected successfully"));
};

export default dbConnect;
