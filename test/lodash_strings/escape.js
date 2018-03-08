const chai = require('chai')
const _ = require('lodash')
const assert = chai.assert

/*
https://lodash.com/docs/4.17.5#escape
"&",  &amp;
"<",    &lt;
">",  &gt;
'"', &quot;
"'", &#39;
*/

it('converts & to &amp;', () => {
  const answer = _.escape('Tom & Jerry')
  assert.equal(answer, 'Tom &amp; Jerry')
})

it('converts < to &lt;', () => {
  const answer = _.escape('1 < 2')
  assert.equal(answer, '1 &lt; 2')
})

it('converts > to &gt;', () => {
  const answer = _.escape('5 > 2')
  assert.equal(answer, '5 &gt; 2')
})

it('converts " to &quot;', () => {
  const answer = _.escape('I said "Hello"')
  assert.equal(answer, 'I said &quot;Hello&quot;')
})

it("converts ' to &apos;", () => {
  const answer = _.escape("I said 'Hello'")
  assert.equal(answer, 'I said &#39;Hello&#39;')
})
