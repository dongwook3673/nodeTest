new Vue({
  el: '#exercise',
  data: {
  	energy_p: 100,
    energy_m: 100,
    items: []
  },
  methods: {
  	attack : function(){
    	var damage_p = Math.floor(Math.random() * 13 + 1);
      var damage_m = 10;
    	this.energy_p -= damage_p;
      this.energy_m -= damage_m;
      if( this.energy_m <= 0){
      	alert("you win!");
        this.reset();
      } else if( this.energy_p <= 0){
      	alert("you lose!");
        this.reset();
      }
      this.update(damage_p, damage_m);
    },
    s_attack : function(){
  	  var damage_p = Math.floor(Math.random() * 13 + 1);
      var damage_m = 17;
    	this.energy_p -= damage_p;
      this.energy_m -= damage_m;
      if( this.energy_m <= 0){
      	alert("you win!");
        this.reset();
      } else if( this.energy_p <= 0){
      	alert("you lose!");
        this.reset();
      }
      this.update(damage_p, damage_m);
    },
    heal : function(){
      var damage_p = Math.floor(Math.random() * 13 + 1);
    	this.energy_p -= damage_p;
      this.energy_p += 10;
      this.items.push({ message:"Monster hits " + damage_p + " damage for player"});
      this.items.push({ message:"Player heal 10 energy himself"});
      if(this.energy_p > 100){
       this.energy_p = 100;
      }
    },
    reset : function(){
    	this.energy_p = 100;
      this.energy_m = 100;
    },
    update : function(damage_p, damage_m){
    	this.items.push({ message:"Monster hits " + damage_p + " damage for player"});
      this.items.push({ message:"Player hits" + damage_m + " damage for monster"});
    }
  }
});
	