function mul(a=[],b=[],m:number,n:number,p:number):number[]
        {   
            var c=[];
            if(p==1)
            {
                for(var i=0;i<m;i++)
                {
                let sum:number=0;
                for(var j=0;j<n;j++)
                    {
                    sum=sum+a[i][j]*b[j];
                    //console.log(sum);
                    }
                c[i]=sum;
                }
            //return c;
            }
            else
            {
                for(i=0;i<m;i++)
                {   
                    c[i]=[];
                    for(var k=0;k<p;k++)
                    {
                        let sum:number=0;
                        for(j=0;j<n;j++)
                        {
                            sum=sum+a[i][j]*b[j][k];
                        }
                        c[i][k]=sum;
                    }
                }
            }
            return (c);
        }