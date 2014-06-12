define(["underscore"], function (_) {
  _.mixin({
    /**
     * @method .format(str)
     * @description similar to printf or nodejs util.format("%s - %s", str1, str2)
     * @param {string} str
     * @returns {string}
     * @example .format("<h1> %s, %s</h1>", "name", "test");
     */
    format: function (str) {
      var result = "",
        args = arguments,
        i = 0;
      if (str == null) return result;
      result = str.replace(/%s/gi, function (match) {
        if (args[++i] == null) return "";
        return args[i];
      });
      return result;
    }
  });
});
