module.exports = () => require(`./webpack.config.${process.env.NODE_ENV}`);
