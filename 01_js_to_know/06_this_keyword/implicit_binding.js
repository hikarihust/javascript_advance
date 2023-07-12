var john = {
    year: 1990,
    calAge: function() {
        console.log('calAge', this);
    }
}

// Alias
john.calAge();