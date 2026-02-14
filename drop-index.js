const mongoose = require('mongoose');
const config = require('./src/config/config');
const logger = require('./src/config/logger');

// Connect to MongoDB
mongoose
  .connect(config.mongoose.url, config.mongoose.options)
  .then(async () => {
    logger.info('Connected to MongoDB');
    try {
      const collection = mongoose.connection.collection('questions');

      // Check if index exists
      const indexes = await collection.indexes();
      const indexExists = indexes.some((index) => index.name === 'id_1');

      if (indexExists) {
        await collection.dropIndex('id_1');
        logger.info('Successfully dropped index "id_1" from "questions" collection.');
      } else {
        logger.info('Index "id_1" does not exist in "questions" collection.');
      }
    } catch (error) {
      logger.error(`Error dropping index: ${error.message}`);
    } finally {
      await mongoose.disconnect();
      logger.info('Disconnected from MongoDB');
      process.exit(0);
    }
  })
  .catch((err) => {
    logger.error(`Could not connect to MongoDB: ${err}`);
    process.exit(1);
  });
