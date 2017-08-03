var expect= require('chai').expect;
console.log('execute...')
describe('here it is',function(){
    it('it should be passed...',function(){
        var answer=43;
        expect(answer, 'topic [answer]').to.equal(43);
    })

})
