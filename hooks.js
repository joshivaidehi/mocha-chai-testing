describe('introducton to hooks', function(){

    before('Execute before all tests', function(){
        console.log('Execute before each test');
    });

    beforeEach('Execute before Each tests', function(){
        console.log('Execute before each test');
    });

    after('Execute After all tests', function(){
        console.log('Execute before each test');
    });

    afterEach('Execute after each tests', function(){
        console.log('Execute before each test');
    });

    it('Mocha hooks test', function(){
        console.log('Mocha - this is test')
    })
})