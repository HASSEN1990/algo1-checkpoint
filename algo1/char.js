var c
var nb_v=0
var nb_es=0
var nb_c=0
var str=""

do{
    c=prompt('ecrire un caracter')
    if (c.toLowerCase =='a' || c.toLowerCase()=='e' || c.toLowerCase()=='u'|| c.toLowerCase()=='i' || c.toLowerCase()=='o' || c.toLowerCase=='y')

    {
        nb_v++
    }
    if(c===" "){
        nb_es++
    }
    else{
        nb_c++
    }
str=str+c
}while(c!=='.')
var maChaine = 'aprendre algorythme'
console.log('la chaine est :',str)
console.log('voyelle:',nb_v)
console.log('mot:',nb_es+1)
console.log('caracter:',nb_c)