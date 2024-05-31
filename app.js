const express = require('express');
const routes = require('./routes');
const { sequelize } = require('./models');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Received ${req.method} request at ${req.url}`);
  next();
});

app.use('/api', routes);

const PORT = process.env.PORT || 8080;

sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.log('Error: ' + err));
