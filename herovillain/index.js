var superheroes=require("superheroes")
var supervillains=require("supervillains")
var mySuperHero=superheroes.random();
var mySuperVillain=supervillains.random();
if(mySuperHero>mySuperVillain){
    console.log(mySuperHero+" beats "+mySuperVillain);
}
else{
    console.log(mySuperVillain+" beats "+mySuperHero);
}