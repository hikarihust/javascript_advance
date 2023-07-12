var john = {
  year: 1990,
  calAge: function() {
      console.log('calAge', this);
  }
}

john.calAge();
john.calAge.bind({ age: 28 })();
john.calAge.bind({ zend: 'vn' })();