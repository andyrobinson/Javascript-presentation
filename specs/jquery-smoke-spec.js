describe("JQuery smoke test", function() {
  beforeEach(function () {
    $('#fixture').remove();
    $('body').append('<div id="fixture">smoke</div>');
  });

  it("should add an element to the DOM and interrogate it", function() {
    expect($("#fixture").text()).toBe("smoke");
  });
});