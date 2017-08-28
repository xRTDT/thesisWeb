const Sequelize = require('sequelize');
const db = require('./config');

const User = db.define('user', {
  nickname: {
    type: Sequelize.STRING,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true
  },
  profilePicture: {
    type: Sequelize.TEXT,
    allowNull: true
  }
}, {
  timestamps: false
});

User.sync();

module.exports = {
  User
};