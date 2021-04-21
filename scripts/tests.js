
QUnit.test("Increment skal øke counter med 1", function (assert) {
    let oldCounter=counter
    let myValue=increment()
    assert.equal(myValue, oldCounter+1);
});

QUnit.test("Decrement skal redusere counter med 1", function (assert) {
    counter=1
    let oldCounter=counter
    let myValue=decrement()
    assert.equal(myValue, oldCounter-1);
});

QUnit.test("Decrement skal ikke la counter gå til negative tall", function (assert) {
    counter=0
    let myValue=decrement()
    assert.equal(myValue, 0);
});