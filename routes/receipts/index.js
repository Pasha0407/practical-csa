const { getReceipt } = require("./getReceipt");

module.exports.receiptsRouter = async function (fastify, opts) {
  fastify.route(getReceipt);
};
