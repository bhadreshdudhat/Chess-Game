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


///////////////////////////////////////////
//Piece Object
function Piece(c,t,l){
    this.color=c;
    this.type=t;
    this.location=l;//this.location is of type Tile
    this.location.Piece=this;// location object's piece having same piece obj created
    //set up is done in Piece constructor and not in Tile constructor
};

Piece.prototype.print=function(){
    console.log("------")
    console.log("color: "+this.color);
    console.log("type: "+this.type);
    this.location.print();//this.location is of type Tile
};
Piece.prototype.corrupted=function(){
    if(this.type=="rook" ||this.type=="queen" ||this.type=="bishop" ||this.type=="pawn" ||this.type=="knight" ||this.type=="king"){
        return true;
    }
    return false;
};

var l1=new Tile('a',5);
var l2=new Tile('g',3);

var p1=new Piece('black','q',l1);
var p2=new Piece('white','p',l2);

p1.print();
p2.print();
