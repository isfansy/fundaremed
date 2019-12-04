

//soalno 1
const berapatahun=(awal,persen,pendatang,target)=>{
    var penduduk=awal
    var tahun=0
    do{
        penduduk+=pendatang+(penduduk*(persen/100))
        tahun++
    }while(penduduk<target)
    return tahun+' tahun'
}
console.log(berapatahun(1000,20,50,1200))

//soalno 3
var deposit=0
var hargatiket=25
var output=''
tiket=bayar=>{
    for(i=0;i<bayar.length;i++){
        if(bayar[i]==25){
            deposit+=25
        }else if(bayar[i]==50){
            deposit+=50
        }else if(bayar[i]==100){
            deposit+=100
            return 'yes'
        }else{
            return 'no'
        }
    }return output
}
console.log(tiket([25,25]))


//soalno 2

const segitigaangka=(as)=>{
    var z = ''
    var angka = 1
    for(x=0;x<as;x++){
        for(y=as;y>x;y--){
            z+=' '
        }
        for(a=0;a<=x;a++){
            if(angka%2==0){
            z+=` `
            }else
            z+=`${angka}`
            angka++
        }
        for(b=1;b<=x;b++){
            if(angka%2==0){
            z+=` `
            }else
            z+=`${angka}`
            angka++
        }
        z+='\n'
        angka+=1
    }
    return z
    }
    console.log(segitigaangka(10))
