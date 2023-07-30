describe('coffee wait time', function () {
  it('should calculate the wait time', () => {
    // arrange
    
    // act
    
    // assert
    expect(coffeeWaitTime(1)).toEqual('2 - 5 minutes')
    expect(coffeeWaitTime(6)).toEqual('5 - 9 minutes')
    expect(coffeeWaitTime(8)).toEqual('10 - 15 minutes')
    
  });

  it("should call appendWaitTime when coffeeWaitTime is called", function () {
    spyOn(window, "appendWaitTime");
    
    // Create the input element and set its value
    const coffeeNumInput = document.createElement("input");
    coffeeNumInput.type = "number";
    coffeeNumInput.value = 5;
    
    // Create the submit button and add the event listener
    const submitButton = document.createElement("button");
    submitButton.addEventListener("click", function (event) {
      event.preventDefault();
      coffeeWaitTime(coffeeNumInput.value);
      appendWaitTime();
    });
    
    // Append the input and button to the document body
    document.body.appendChild(coffeeNumInput);
    document.body.appendChild(submitButton);
    
    // Trigger the "click" event on the submit button
    submitButton.dispatchEvent(new Event("click"));
    
    // Check if the appendWaitTime function was called
    expect(appendWaitTime).toHaveBeenCalled();
  });
});
