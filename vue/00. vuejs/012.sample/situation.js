var situation = new Vue({
    el:"#vue-situation",
    data:{
        movements:[]
    },
    methods:{
        addMovement(movement){
            this.movements.push(movement);
            if((this.movements.length%2==0) && (enemy.$data.health<=0 || ally.$data.health<=0)){
                this.checkkGame();
            }
        },
        checkkGame()
        {
            if(enemy.$data.health<=0 && ally.$data.health<=0)
            {
                alert("Drawn");
            }
            else if(enemy.$data.health<=0)
            {
                alert("Won");
            }
            else if(ally.$data.health<=0)
            {
                alert("Defeat");
            }
            if(confirm("Do you want to play again"))
            {
                this.again();
            }
        },
        again()
        {
            this.movements = this.movements.splice(0,this.movements.lenght-1);
            ally.$data.health=100;
            enemy.$data.health=100;
        }
    }
})