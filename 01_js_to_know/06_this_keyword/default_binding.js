var john = {
    year: 1990,
    calAge: function() {
        console.log('calAge', this);
    }
}

var func = john.calAge;

func();