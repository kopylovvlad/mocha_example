const chai = require('chai')
const _ = require('lodash')
const assert = chai.assert

/*
https://lodash.com/docs/4.17.5#camelCase
*/

it('should ignore spaces', () => {
  const answer = _.camelCase('  Foo    Bar  ')

  assert.equal(answer, 'fooBar')
})

it('should ignore -', () => {
  const answer = _.camelCase('---Foo--Bar-')

  assert.equal(answer, 'fooBar')
})

it('should ignore _', () => {
  const answer = _.camelCase('_Foo__Bar___')

  assert.equal(answer, 'fooBar')
})

it('should ignore symbols', () => {
  const answer = _.camelCase('#@Foo/\\\\Bar{}[]')

  assert.equal(answer, 'fooBar')
})

it('returns the camel cased examples', () => {
  assert.equal(_.camelCase('foo bar'), 'fooBar')
  assert.equal(_.camelCase('foo bar zoo'), 'fooBarZoo')
})
