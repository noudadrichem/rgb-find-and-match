function difference(a, b) {
    return Math.abs(a - b);
}
function getMatches(r, g, b, list, range) {
    if (range === void 0) { range = 20; }
    var minr = r - range < 0 ? 0 : r - range;
    var ming = g - range < 0 ? 0 : g - range;
    var minb = b - range < 0 ? 0 : b - range;
    var maxr = r + range > 255 ? 255 : r + range;
    var maxg = g + range > 255 ? 255 : g + range;
    var maxb = b + range > 255 ? 255 : b + range;
    var matches = [];
    for (var i = 0; i < list.length; i++) {
        var target = list[i];
        var rin = target.r > minr && target.r < maxr;
        var gin = target.g > ming && target.g < maxg;
        var bin = target.b > minb && target.b < maxb;
        var sorted = [target.r, target.g, target.b].sort();
        if (difference(sorted[0], sorted[2]) <= range) ;
        if (rin && gin && bin) {
            matches.push(target);
        }
    }
    return matches;
}

export { getMatches };
