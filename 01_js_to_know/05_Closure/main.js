debugger
function outerFunc() {
  let number = 20;
  let course = 'Javascript nâng cao - ZendVn';
  console.log('[scope outerFunc]', course);

  function innerFunc() {
    let number2 = 50;
    let total = number2 + number;
    console.log('[scope outeinnerFuncrFunc]', total);
    return total;
  }

  return innerFunc;
}

const func = outerFunc();
const result = func();
