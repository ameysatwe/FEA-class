function mul(a=[],b=[],m:number,n:number,p:number):number[]
        {   
            var c=[];
            if(p==1)
            {
                for(let i=0;i<m;i++)
                {
                let sum:number=0;
                for(let j=0;j<n;j++)
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
                for(let i=0;i<m;i++)
                {   
                    c[i]=[];
                    for(let k=0;k<p;k++)
                    {
                        let sum:number=0;
                        for(let j=0;j<n;j++)
                        {
                            sum=sum+a[i][j]*b[j][k];
                        }
                        c[i][k]=sum;
                    }
                }
            }
            return (c);
        }
function creatematrices(xr:number,yr:number,theta:number,clockwise:boolean)
{
    var ang:number
    var trans:number[][],rotate:number[][]
    var result=[]
    if(clockwise)
    {
         ang=-theta*Math.PI/180
    }
    else
    {
        ang=theta*Math.PI/180
    }
    trans=[[1,0,xr],
            [0,1,yr],
            [0,0,1]]
    rotate=[[Math.cos(ang),-Math.sin(ang),0],
            [Math.sin(ang),Math.cos(ang),0],
            [0,0,1]]
    return {"Translate":trans,"Rotate":rotate}
    //return(result)
}
function resultant(x:number,y:number,xr:number,yr:number,theta:number,clockwise:boolean,order:string)
{
    var coordmat=[x,y,1]
    var hmat=creatematrices(xr,yr,theta,clockwise)
    if(order=="RT")
    {
        var mulmat=mul(hmat.Translate,hmat.Rotate,3,3,3)
    }
    else if(order=="TR")   
    {
        var mulmat=mul(hmat.Rotate,hmat.Translate,3,3,3)
    }
    var result=mul(mulmat,coordmat,3,3,1)
    return result
}