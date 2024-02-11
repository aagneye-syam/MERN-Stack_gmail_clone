import mongoose from 'mongoose';

const Connection = async () => {
  const DB_URI = `mongodb://saagneye2003:4J3LRIWfiRw8SyrS@ac-cs0bkpn-shard-00-00.qdjztxe.mongodb.net:27017,ac-cs0bkpn-shard-00-01.qdjztxe.mongodb.net:27017,ac-cs0bkpn-shard-00-02.qdjztxe.mongodb.net:27017/?ssl=true&replicaSet=atlas-9ewhro-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(DB_URI, { useNewUrlParser: true }, { useUnifiedTopology: true });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error while connecting to the database:', error.message);
  }
};

export default Connection;
