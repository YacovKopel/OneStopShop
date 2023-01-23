const sequelize = require('../config/connection');
const { newitem} = require('../models/newitem');

const newItemData = require('./newItemData.json');
const marketPlaceData = require('./projectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const newitem = await newitem.bulkCreate(newItemData, {
    individualHooks: true,
    returning: true,
  });

  for (const marketplace of marketPlaceData) {
    await marketplace.create({
      ...marketplace,
      newitem_id: newitem[Math.floor(Math.random() * newitem.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
