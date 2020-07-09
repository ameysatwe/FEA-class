var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext('2d');
function point(st) {
    ctx.beginPath();
    ctx.arc(st[0], st[1], 2, 0, 2 * Math.PI);
    ctx.fillStyle = "Black";
    ctx.fill();
    ctx.stroke();
    return ("point was sketched");
}
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
    return { "Translate": trans, "Rotate": rotate };
    //return(result)
}
function Homogenous(x, y, xr, yr, theta, clockwise, order) {
    var coordmat = [x, y, 1];
    var hmat = creatematrices(xr, yr, theta, clockwise);
    if (order == "RT") {
        var mulmat = mul(hmat.Translate, hmat.Rotate, 3, 3, 3);
    }
    else if (order == "TR") {
        var mulmat = mul(hmat.Rotate, hmat.Translate, 3, 3, 3);
    }
    var result = mul(mulmat, coordmat, 3, 3, 1);
    return result;
}
//# sourceMappingURL=cadRes.js.map