const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { Op } = require('sequelize');
const { Entry } = require('./db/models');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.post('/entry', async (req, res) => {
  const { input } = req.body;
  const entries = await Entry.findAll({
    where: {
      body: {
        [Op.like]: `%${input}%`,
      },
    },
  });
  //   const all = await Entry.findAll();
  //   console.log(JSON.parse(JSON.stringify(all)));
  res.json(entries);
});

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
