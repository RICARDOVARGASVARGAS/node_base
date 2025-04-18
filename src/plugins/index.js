const { getAgeBirthday } = require("../plugins/get-age.plugin");
const { getUUID } = require("../plugins/get-uuid.plugin");
const { httpClientPlugin: http } = require("../plugins/http-client.plugin");
module.exports = {
  getAgeBirthday,
  getUUID,
  http,
};
