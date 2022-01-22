#include<stdio.h>
#include<string.h>
struct masinhvien{
    char mssv[1001];
    char bt[1001];
}; struct masinhvien a[10001];
void swap(struct masinhvien *c, struct masinhvien *b){
    struct masinhvien t = *c;
    *c = *b;
    *b = t;
}
void quicksort(struct masinhvien arr[],int dau,int cuoi){
    int i;
    if (dau>=cuoi) return;
    
    else if(dau+1==cuoi){
        if(strcmp(arr[dau].mssv,arr[cuoi].mssv)>0) swap(&arr[dau],&arr[cuoi]);
    }
    else{
        //char chot[1001]=arr[cuoi].mssv;
        int L=dau-1;
        for ( i=dau;i<cuoi;i++){
            if(strcmp(arr[i].mssv,arr[cuoi].mssv)<=0){
                L++;
                swap(&arr[L],&arr[i]);
            }
        }
        swap(&arr[L+1],&arr[cuoi]);
        quicksort(arr,dau,L);
        quicksort(arr,L+2,cuoi);
    }
}
int main(){
    int n,i;
    scanf("%d",&n);
    for ( i=0;i<n;i++){
        scanf("%s",a[i].mssv);
        scanf("%s",a[i].bt);
    }
    quicksort(a,0,n-1);
    int s=0;
    int kcc=0;
    while(kcc<n){
        int i=kcc;
        int dem=0;
        if(i>kcc){
        while(strcmp(a[i].mssv,a[kcc].mssv)==0){
            int abc=0,j;
            for (j=kcc;j<i;j++){
                if(strcmp(a[i].bt,a[kcc].bt)==0){
                    abc=1;
                    break;
                }
            }
            if(abc==0) dem++;
            i++;
        }
        } else {
            i++;
            dem++;
        }
        if(dem>=2) s++;
        kcc=i;
    }
    printf("%d",s);
    return 0;
}