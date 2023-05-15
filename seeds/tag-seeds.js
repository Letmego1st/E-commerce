const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'rap gods',
  },
  {
    tag_name: 'hip hop culture',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'R&B culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
