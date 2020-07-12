var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext('2d');
ctx.translate(canvas.width / 2, canvas.height / 2);
ctx.scale(1, -1);
function point(st) {
    ctx.beginPath();
    ctx.arc(st[0], st[1], 2, 0, 2 * Math.PI);
    ctx.fillStyle = "Black";
    ctx.fill();
    ctx.stroke();
    return ("point was sketched");
}
function mul(a = [], b = [], row1, col1, col2) {
    var c = [];
    if (col2 == 1) {
        for (let i = 0; i < row1; i++) {
            let sum = 0;
            for (let j = 0; j < col1; j++) {
                sum = sum + a[i][j] * b[j];
                //console.log(sum);
            }
            c[i] = sum;
        }
        //return c;
    }
    else {
        for (let i = 0; i < row1; i++) {
            c[i] = [];
            for (let k = 0; k < col2; k++) {
                let sum = 0;
                for (let j = 0; j < col1; j++) {
                    sum = sum + a[i][j] * b[j][k];
                }
                c[i][k] = sum;
            }
        }
    }
    return (c);
}
function createTranslationMatrix(xtrans, ytrans) {
    var trans;
    trans = [[1, 0, xtrans],
        [0, 1, ytrans],
        [0, 0, 1]];
    return trans;
}
function createRotationMatrix(theta, clockwise, relative, xrel, yrel) {
    var ang, transtemp, transneg, rotate;
    if (clockwise) {
        ang = -theta * Math.PI / 180;
    }
    else {
        ang = theta * Math.PI / 180;
    }
    if (relative) {
        transtemp = [[1, 0, xrel],
            [0, 1, yrel],
            [0, 0, 1]];
        rotate = [[Math.cos(ang), -Math.sin(ang), 0],
            [Math.sin(ang), Math.cos(ang), 0],
            [0, 0, 1]];
        transneg = [[1, 0, -xrel],
            [0, 1, -yrel],
            [0, 0, 1]];
        rotate = mul(transtemp, rotate, 3, 3, 3);
        rotate = mul(rotate, transneg, 3, 3, 3);
    }
    else {
        rotate = [[Math.cos(ang), -Math.sin(ang), 0],
            [Math.sin(ang), Math.cos(ang), 0],
            [0, 0, 1]];
    }
    return rotate;
}
function createScaleMatrix(scalex, scaley, relative, xrel, yrel) {
    var scale, transtemp, transneg;
    scale = [[scalex, 0, 0],
        [0, scaley, 0],
        [0, 0, 1]];
    if (relative) {
        transtemp = [[1, 0, xrel],
            [0, 1, yrel],
            [0, 0, 1]];
        transneg = [[1, 0, -xrel],
            [0, 1, -yrel],
            [0, 0, 1]];
        scale = mul(transtemp, scale, 3, 3, 3);
        scale = mul(scale, transneg, 3, 3, 3);
    }
    return scale;
}
// function Homogenous(x:number,y:number,xr:number,yr:number,theta:number,clockwise:boolean,order:string)
// {
//     var coordmat=[x,y,1]
//     var hmat=creatematrices(xr,yr,theta,clockwise)
//     if(order=="RT")
//     {
//         var mulmat=mul(hmat.Translate,hmat.Rotate,3,3,3)
//     }
//     else if(order=="TR")   
//     {
//         var mulmat=mul(hmat.Rotate,hmat.Translate,3,3,3)
//     }
//     var result=mul(mulmat,coordmat,3,3,1)
//     return result
// }
//# sourceMappingURL=cadRes.js.map