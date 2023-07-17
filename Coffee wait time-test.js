it('should calculate the wait time', () => {
    // arrange

    // act

    // assert
    expect(coffeeWaitTime(1)).toEqual('2 - 5 minutes')
    expect(coffeeWaitTime(6)).toEqual('5 - 9 minutes')
    expect(coffeeWaitTime(8)).toEqual('10 - 15 minutes')

});