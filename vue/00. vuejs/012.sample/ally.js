 var ally = new Vue({
     el:"#vue-ally",
     data:{
         health: 100,
         attackMin: 5,
         attackMax:15,
         attackSMin:10,
         attackSMax:25,
         attackSWait:3,
         attackSElapsed:0,
         healMin:10,
         healMax:15,
     },
     computed: {
         healthBar(){
            var bgColor= 'green';
            if(this.health<70)
            {
                bgColor= 'yellow'
            }
            else if(this.health<30)
            {
                bgColor= 'red'
            }
             return [
                 {width:this.health+"%"},
                 {height:50},
                 {background: bgColor}
             ]
         },
         slaughterEnable()
         {
             var result = this.attackSElapsed >= this.attackSWait;
             return !result;
         }
     },
     methods:{
        attack(){
            this.attackSElapsed +=1;
            var allyAttack = getRandomInt(this.attackMin,this.attackMax);
            enemy.$data.health -= allyAttack;
            var movement={side:"ally",type:"attack",damage:allyAttack}
            situation.addMovement(movement);
            enemy.attack();
        },
        slaughter(){
            this.attackSElapsed = 0;
            var allyAttack = getRandomInt(this.attackSMin,this.attackSMax);
            enemy.$data.health -= allyAttack;
            var movement={side:"ally",type:"slaughter",damage:allyAttack}
            situation.addMovement(movement);
            enemy.attack();
        },
        heal(){
            this.attackSElapsed +=1;
            var allyHeal = getRandomInt(this.healMin,this.healMax);
            this.health = this.health + allyHeal > 100 ? 100 : this.health+allyHeal;
            var movement={side:"ally",type:"heal",damage:allyHeal}
            situation.addMovement(movement);
            enemy.attack();
        },
        retreat(){
            if(confirm("Are you sure?"))
            {
                alert("Defeat")
                if(confirm("Do you want to play again?"))
                {
                    situation.again();
                }
            }
        },
     },
     watch:{
        health(value){
            this.health = value <= 0 ? 0 : this.health;
        }
    }
 })