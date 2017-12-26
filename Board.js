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
    console.log("File: "+this.file);
    console.log("Row: "+this.row);
};
Tile.prototype.corrupted=function(){
    if(this.row>8 || this.row<1||this.file<'a'||this.file>'h'){
        return true;
    }
    return false;
};

///////////////
var a=new Array(8);
a[1]='a';
a[2]='b';
a[3]='c';
a[4]='d';
a[5]='e';
a[6]='f';
a[7]='g';
a[8]='h';

function Board()
{
    //this.b=new Array(64);
    var i=0;
    for (var r = 1; r <=8; r++)
    {
        for (var f = 1; f <=8; f++)
        {
            //this.b[i]=new Tile(a[f],r);
            this[i]=new Tile(a[f],r);//this array means --> board object is an array of 64 tiles
                                    //using board Object directly as an array
            i++;
        }
    }
}

    Board.prototype.print=function() {
    for (var i = 0; i<64; i++) {
        this[i].print();//tile printing
    }};



var board=new Board();
board.print();


