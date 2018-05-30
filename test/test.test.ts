import addSelf from '../src/test';
import 'mocha';
import should from 'should';

describe('测试测试', () => {
  it('自增测试输入1应该等于2', () => {
    const result = addSelf(1);

    should(result).be.equal(2);
  })
})