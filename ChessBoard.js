//Tile object
function Tile(f,r){
    this.file=f;
    this.row=r;
    if(this.corrupted()){
        this.file='a';
        this.row=1;
    }
};
Tile.prototype.print=function(){
    console.log("------")
    console.log("File "+this.file);
    console.log("Row "+this.row);
};
Tile.prototype.corrupted=function(){
    if(this.row>8 || this.row<1||this.file<'a'||this.file>'h'){
        return true;
    }
    return false;
};

var t1=new Tile('b',5);
var t2=new Tile('k',3);


t1.print();
t2.print();
console.log("T1 is corrupt - "+t1.corrupted());
console.log("T2 is corrupt - "+t2.corrupted());

//////////////////////////////////////////