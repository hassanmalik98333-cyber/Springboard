// there are attributes that you can get direct access to and modify instead of using getAttribute or setAttribute.

// you can have direct access to id(not done much or at all). 

// you can do this by const form = document.querySelector(#muffin-form), then type  form.id, this is the same as form.getAttribute('id')

// can change it without setAttribute by doing form.id = "new-id"

// the next example is a direct access attribute that is used a lot. It is the value attribute.

// if you have an input and you want to know the value of the input(what the user has entered into the input), can access the value attribute. Ex bellow

const input = document.querySelector('form input');//will give the input inside of the first form.

// with this you can check what the uder wrote in the input by using input.value. It will update when the user writes something.

// can also manipulate the value by doing input.value='HELLO', this will change it without typing in the actual box.

// can store the value: const userInput = input.value, this stores the current value and does not change even if the actual input value does change.

// can reset the input value by doing: input.value=""

// value is not just limited to text inputs can also work with range inputs.

const range = document.querySelector('input[type="range"]')

// to get the current value do range.value and can change it, range.value = 5

// can store this value and it will not change even if the uder changes it:          let userRange = range.value