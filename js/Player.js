class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }
  // getCount references and gives playerCount
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }
  // updateCount updates the playerCount to a number specified in count argument
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
  // update creates playerIndex, which is set to "players/player" and player index in players, and updates name and distance
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  // getPlayerInfo references to node players, and gives allPlayers
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
