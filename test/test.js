const chai = require('chai')
const phoneNumber = require('./../src/phone_number.js')
const assert = chai.assert

describe('phoneNumber', () => {
  /* text 01 */
  describe('validate', () => {
    it('works', () => {
      assert.isFalse(phoneNumber.validate('1234567890123'))
      assert.isFalse(phoneNumber.validate('1234567'))
      assert.isTrue(phoneNumber.validate('12345678'))
    })
  })

  /* text 02 */
  describe('validate', () => {
    it('returns false if number is to long', () => {
      // arrange
      const len13 = '1234567891111';
      assert.equal(len13.length, 13)

      // action
      assert.isFalse(phoneNumber.validate(len13))
    })

    it('returns false if number is to short', () => {
      // arrange
      const len7 = '1234567';
      assert.equal(len7.length, 7)

      // action
      assert.isFalse(phoneNumber.validate(len7))
    })

    it('returns true if number is OK', () => {
      // arrange
      const len8 = '12345678';
      assert.equal(len8.length, 8)

      // action
      assert.isTrue(phoneNumber.validate(len8))
    })
  })

  /* text 03 */
  describe('phoneNumber.validate()', () => {
    describe('null', () => {
      it('returns false', () => {
        assert.isFalse(phoneNumber.validate(null))
      })
    })

    describe('undefined', () => {
      it('returns false', () => {
        assert.isFalse(phoneNumber.validate(undefined))
      })
    })

    describe('number is long then 8', () => {
      it('return false', () => {
        const len9 = '123456789';
        assert.equal(len9.length, 9)

        assert.isFalse(phoneNumber.validate(len9))
      })
    })

    describe('number is short then 8', () => {
      it('return false', () => {
        const len7 = '1234567';
        assert.equal(len7.length, 7)

        assert.isFalse(phoneNumber.validate(len7))
      })
    })

    describe('number contains letters or symbols', () => {
      it('returns false', () => {
        assert.isFalse(phoneNumber.validate('1234567a'))
        assert.isFalse(phoneNumber.validate('abcdefgh'))
        assert.isFalse(phoneNumber.validate('--------'))
        assert.isFalse(phoneNumber.validate('        '))
      })
    })

    describe('valid numbers', () => {
      it('returns true', () => {
        assert.isTrue(phoneNumber.validate('12345678'))
        assert.isTrue(phoneNumber.validate('01234567'))
      })
    })
  })
  /* text 04 */

  /* real BDD */
  describe('phoneNumber.validate()', () => {
    it('should be not null', () => {
      assert.isFalse(phoneNumber.validate(null))
    })

    it('should be not indefined', () => {
      assert.isFalse(phoneNumber.validate(undefined))
    })

    it('should be shorter than 9', () => {
      assert.isFalse(phoneNumber.validate('123456789'))
    })

    it('should be long than 7', () => {
      assert.isFalse(phoneNumber.validate('1234567'))
    })

    it('should contain only numbers', () => {
      assert.isFalse(phoneNumber.validate('1234567a'))
      assert.isFalse(phoneNumber.validate('abcdefgh'))
      assert.isFalse(phoneNumber.validate('--------'))
      assert.isFalse(phoneNumber.validate('        '))
    })

    it('valid reference number examples', () => {
      assert.isTrue(phoneNumber.validate('12345678'))
      assert.isTrue(phoneNumber.validate('01234567'))
    })
  })

  /* text 05 */
})


/* text 06 */
