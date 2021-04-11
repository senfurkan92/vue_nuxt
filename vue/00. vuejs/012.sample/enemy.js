var enemy = new Vue({
    el:"#vue-enemy",
    data:{
        health: 100,
        attackMin:10,
        attackMax:15,
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
        }
    },
    methods:{
        attack(){
            var enemyAttack = getRandomInt(this.attackMin,this.attackMax);
            ally.$data.health -= enemyAttack;
            var movement={side:"enemy",type:"attack",damage:enemyAttack}
            situation.addMovement(movement)
        }
    },
    watch:{
        health(value){
            this.health = value <= 0 ? 0 : this.health;
        }
    }
})