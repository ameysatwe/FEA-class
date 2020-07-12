
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