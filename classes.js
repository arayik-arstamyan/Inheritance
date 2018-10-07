class LivingCreature {
    constructor(x, y, index){
        this.x=x;
        this.y=y;
        this.multiplay=0;
        this.index=index;
        this.disdirection=[
            [thix.x-1, this.y-1],
            [thix.x, this.y-1],
            [thix.x+1, this.y-1],
            [thix.x-1, this.y],
            [thix.x+1, this.y],
            [thix.x-1, this.y+1],
            [thix.x, this.y+1],
            [thix.x+1, this.y+1],
        ];
        
    }
    choosCell(ch){
        var found=[];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }   
        }
        return found;
    }
}

class Grass extends LivingCreature{

    mul(){
        this.multiplay++;
        var newCell=random(this.ynterlVandak(0));
        if(this.multiplay>=8 && newCell){
            var newGrass=new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.multiply = 0;
        }
    }
}
