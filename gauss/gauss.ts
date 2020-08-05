
function gauss(a,c)
        {
            upper(a,c);
            var x = back(a,c);
            return(x);
        }
        function upper(a,c)
        {
            var n = a.length;
            for(let i=0;i<n-1;i++)
            {
                for(let k=i+1;k<n;k++)
                {
                    var m = a[k][i]/a[i][i]
                    console.log(m);
                    for(let j=0;j<n;j++)
                    {
                        a[k][j] = a[k][j] - m*a[i][j];
                        console.log("my position is k= " +k +"j= "+j+"value = "+a[k][j]);
                    }
                    c[k] = c[k] - m*c[i];
                    
                }
            }
        }
        function back(a,c)
        {
            var n = a.length;
            for(let i=n-1;i>=0;i--)
            {
                var sum = c[i];
                var x=[];
                for(let j=i+1;j<n;j++)
                {
                    sum = sum - a[i][j]*x[j]
                }
                x[i] = sum/a[i][i];
            }
            return(x);
        }
let K;
var n=+prompt("Enter no of Nodes")
var ne=n-1;
initStiff(n)
let sigma=[]
for(let i=0;i<ne;i++)
{
    var A=+prompt('Enter Area')
    var E=+prompt('Enter E:')
    var le=+prompt('Enter length of element')
    K[i][i]=K[i][i]+A*E/le
    K[i][i+1]-= A*E/le
    K[i+1][i]-= A*E/le
    K[i+1][i+1]+=   A*E/le
    sigma[i]=E/le
}

var fixed1=1
var fixedn=1

var fixed1=+prompt('Enter 0 for fixed 1 for free')
var fixedn=+prompt('Enter 0 for fixed 1 for free')
var c=10e10
if(fixed1==0){
    K[0][0]+=c
}
if(fixedn==0){
    K[n-1][n-1]+=c
}


var F=[]
for(let i=0;i<n;i++){
    F[i]=+prompt("Enter force node:"+i)
}

let Q=gauss(K,F)
console.log(Q)

for (let i = 0; i < ne; i++) {
    sigma[i] = sigma[i]*(Q[i+1]-Q[i]);
    
}

function initStiff(n:number){
    K=[]
    for(let i=0;i<n;i++){
        K[i]=[]
        for(let j=0;j<n;j++){
            K[i][j]=0;
        }
    }

}