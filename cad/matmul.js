function mul(a = [], b = [], m, n, p) {
    var c = [];
    if (p == 1) {
        for (let i = 0; i < m; i++) {
            let sum = 0;
            for (let j = 0; j < n; j++) {
                sum = sum + a[i][j] * b[j];
                //console.log(sum);
            }
            c[i] = sum;
        }
        //return c;
    }
    else {
        for (let i = 0; i < m; i++) {
            c[i] = [];
            for (let k = 0; k < p; k++) {
                let sum = 0;
                for (let j = 0; j < n; j++) {
                    sum = sum + a[i][j] * b[j][k];
                }
                c[i][k] = sum;
            }
        }
    }
    return (c);
}
function creatematrices(xr, yr, theta, clockwise) {
    var ang;
    var trans, rotate;
    var result = [];
    if (clockwise) {
        ang = -theta * Math.PI / 180;
    }
    else {
        ang = theta * Math.PI / 180;
    }
    trans = [[1, 0, xr],
        [0, 1, yr],
        [0, 0, 1]];
    rotate = [[Math.cos(ang), -Math.sin(ang), 0],
        [Math.sin(ang), Math.cos(ang), 0],
        [0, 0, 1]];
    result.push(trans, rotate);
    return (result);
}
function resultant(x, y, xr, yr, theta, clockwise, order) {
    var coordmat = [x, y, 1];
    var hmat = creatematrices(xr, yr, theta, clockwise);
    if (order == "RT") {
        var mulmat = mul(hmat[0], hmat[1], 3, 3, 3);
    }
    else if (order == "TR") {
        var mulmat = mul(hmat[1], hmat[0], 3, 3, 3);
    }
    var result = mul(mulmat, coordmat, 3, 3, 1);
    return result;
}
//# sourceMappingURL=matmul.js.map