/**
 * Horse racing duals: During a dual, only two horses will participate in the race.
 In order for the race to be interesting, it is necessary to try to select two horses
 with similar strength.
 Write a program which, using a given number of strengths, identifies the two closest strengths
 and shows their difference with an integer (≥ 0).

 Constraints
 1 < N  < 100000
 0 < Pi ≤ 10000000
 */

var N = parseInt(readline()); // N - number of horses
var horses = [];
var D = Number.MAX_SAFE_INTEGER; //The difference D between the two closest strengths.


for (var i = 0; i < N; i++) {
    var pi = parseInt(readline()); // pi - strenth of each horse
    horses.push(pi);
}

horses.sort(function (a, b) {
    return a - b;
});

for (var i = 0; i < N - 1; i++) {
    var d = horses[i + 1] - horses[i];

    if (d < D)
        D = d;
}


print(D);

