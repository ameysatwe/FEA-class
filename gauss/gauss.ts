let t,k;
function gauss(a:number[],c:number[])
{

}
function pivot(a:number[],c?:number[])
{
    var n=a.length
    for(let i=0;i<n;i++)
    {
        for(let j=0;j<n;j++)
        {
            t[i][j]=a[j][i]/a[i][i]
            for(k=0;k<n;k++)
            {
                a[j][k]=a[j][k]-t*a[i][k];
            }
        }
    }
}
function back(a,c)
{
    
}