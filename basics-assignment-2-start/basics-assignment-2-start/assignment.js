const task3Element = document.getElementById('task-3');

function alertMessage() {
    alert('Hello World!');
};

function alertName(name) {
    alert(name);
};

alertMessage();
alertName('John');

task3Element.addEventListener('click', alertMessage);

function combineStrings(string1, string2, string3) {
      const combinedString = string1 + string2 + string3;
      return combinedString;
      };

const combinedStrings = combineStrings('Hello ', 'World ', '!');
alert(combinedStrings);

