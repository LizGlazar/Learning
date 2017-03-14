/**
 * Created by Elżbieta Glazar on 14.03.2017.
 *
 *
 * Write a program that prints the temperature closest to 0 among input data.
 * If two numbers are equally close to zero, positive integer has to be considered closest to zero
 * (for instance, if the temperatures are -5 and 5, then display 5).*/

var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline().split(" "); // the n temperatures expressed as integers ranging from -273 to 5526

// Write an action using print()
if (n == 0) {
    print(0);
} else {
    var closestTo0 = parseInt(temps[0]);

    for (var i = 0; i < temps.length; i++) {
        var e = parseInt(temps[i]);
        if (Math.abs(e) < Math.abs(closestTo0)) {
            closestTo0 = e;
        }
        else if (Math.abs(e) == Math.abs(closestTo0) && e > 0) {
            closestTo0 = e;
        }
    }

    print(closestTo0);
}

