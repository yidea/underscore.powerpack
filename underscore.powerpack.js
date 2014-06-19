define(["underscore"], function (_) {
  /*
   * @ Underscore.powerpack
   * ----------------------------------
   * - https://github.com/yidea/underscore.powerpack
   * - TODO: extendClass, deepClone, deepExtend, trim, string natural sort
   */
  _.mixin({
    /***************** String helper *********************/
    /**
     * @method _.format (str)
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
    },

    /**
     * @method _.trim (str)
     * @description trim string, polyfill for IE8-
     * @param {string} str
     * @returns {string} str being trimmed
     * @example
     */
    trim: function (str) {
      if (str == null) throw new Error("{str} not set");
      return str.replace(/^\s+|\s+$/g, "");
    },

    ltrim: function (str) {
      if (str == null) throw new Error("{str} not set");
      return str.replace(/^\s+/, "");
    },

    rtrim: function (str) {
      if (str == null) throw new Error("{str} not set");
      return str.replace(/\s+$/, "");
    },

    /***************** Number helper *********************/
    /**
     * @method _convertNumBase
     * @description covert number from one base to another
     * @param {num}
     * @example
     * _.convertNumBase(0xDB7F)(16)(10); //352657
     *  inspired and credit to https://gist.github.com/faisalman/4213592
     */
    convertNumBase: function (num) {
      return function from(fromBase) {
        return function to(toBase) {
          return parseInt(num, fromBase).toString(toBase);
        };
      };
    },

    hex2decimal: function (hex) { //16->10
      if (hex == null) throw new Error("{hex} is not set");
//      return parseInt(hex, 16);
      return +this.convertNumBase(hex)(16)(10);
    },

    decimal2hex: function (decimal) { //10->16
      if (decimal == null) throw new Error("{decimal} is not set");
//      return Number(decimal).toString(16).toUpperCase();
      return this.convertNumBase(decimal)(10)(16).toUpperCase();
    },

    binary2decimal: function (binary) { //2->10
      if (binary == null) throw new Error("{binary} is not set");
      return +this.convertNumBase(binary)(2)(10);
    },

    decimal2binary: function (decimal) {
      if (decimal == null) throw new Error("{decimal} is not set");
      return this.convertNumBase(decimal)(10)(2);
    }

    //rgb2hex, hex2rgb
  });

});
