export default (sequelize, DataTypes) => {
  const image = sequelize.define('image', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the name'
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the type'
      }
    },
    data: {
      type: DataTypes.BLOB('long')
    }
  }, {});
  return image;
};