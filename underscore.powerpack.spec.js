define(["underscore", "underscore.powerpack"], function (_) {

  describe("underscore.powerpack", function () {
    describe("_.format(str)", function () {
      it("should return '' in case str not set", function(){
        expect(_.format()).to.be.equal("");
      });
      it("should return string correctly in general case", function(){
        expect(_.format("<h1>%s - %s</h1>", "23", "30")).to.be.equal("<h1>23 - 30</h1>");
        expect(_.format("hello %s %s", 2, "world")).to.be.equal("hello 2 world");
      });
      it("should return string correctly in case where %s and arguments number not match", function(){
        expect(_.format("<h1>%s</h1>", "23", "30")).to.be.equal("<h1>23</h1>");
        expect(_.format("<h1>%s-%s</h1>", "23")).to.be.equal("<h1>23-</h1>");
      });
    });
  });

});
