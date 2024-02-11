Damage.GetContext().FriendlyFire.Value = true;

// ��������� ��������� �������� �������
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");
Build.GetContext().FloodFill.Value =  GameMode.Parameters.GetBool("FloodFill");
Build.GetContext().FillQuad.Value =  GameMode.Parameters.GetBool("FillQuad");
Build.GetContext().RemoveQuad.Value =  GameMode.Parameters.GetBool("RemoveQuad");
Build.GetContext().FlyEnable.Value =  GameMode.Parameters.GetBool("Fly");
// задаем что выводить в лидербордах
LeaderBoard.PlayerLeaderBoardValues = [
 {
  Value: "Kills",
  DisplayName: "Убийства",
  ShortDisplayName: "Убийства"
 },
 {
  Value: "Deaths",
  DisplayName: "Смерти",
  ShortDisplayName: "Смерти"
 },
{
  Value: "Status",
  DisplayName: "Статус",
  ShortDisplayName: "Статус"
 },
 {
  Value: "Scores",
  DisplayName: "Очки",
  ShortDisplayName: "Очки"
 }
];
LeaderBoard.TeamLeaderBoardValue = {
 Value: "Deaths",
 DisplayName: "Statistics\Deaths",
 ShortDisplayName: "Statistics\Deaths"
};




// ������ ��������� ������ ��� �����
BreackGraph.BreackAll = true;
// ���������� ���������� ������
Ui.GetContext().QuadsCount.Value = true;
// ��� ������������ �����
Build.GetContext().Pipette.Value = true;
Build.GetContext().BalkLenChange.Value = true;
Build.GetContext().SetSkyEnable.Value = true;
Build.GetContext().GenMapEnable.Value = true;
Build.GetContext().ChangeCameraPointsEnable.Value = true;
Build.GetContext().QuadChangeEnable.Value = true;
Build.GetContext().BuildModeEnable.Value = true;
Build.GetContext().CollapseChangeEnable.Value = true;
Build.GetContext().RenameMapEnable.Value = true;
Build.GetContext().ChangeMapAuthorsEnable.Value = true;
Build.GetContext().LoadMapEnable.Value = true;
Build.GetContext().ChangeSpawnsEnable.Value = true;

// ��������� ����
Properties.GetContext().GameModeName.Value = "GameModes/Peace";
// ������� �������
red = GameMode.Parameters.GetBool("RedTeam");
blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) {
 Teams.Add("Red", "<color=red>АДМИНЫ</a>", { r
: 80 });
 Teams.Get("Red").Spawns.SpawnPointsGroups.Add
(1);
}

// ������ ���������  
Ui.GetContext().Hint.Value = "прив"; 
  
des = "@Vanhek34";  
sed = "@Vanhek34";  
Teams.Get("Blue").Properties.Get("Des").Value = des;  
Ui.GetContext().TeamProp1.Value = { Team: "Red", Prop: "sed" };  
Teams.Get("Red").Properties.Get("sed").Value = sed; 
 
Ui.GetContext().TeamProp2.Value = { Team: "Blue", Prop: "Des" };
var maxDeaths = Players.MaxCount * 6;
Teams.Get("Red").Properties.Get("Deaths").Value = maxDeaths;
Teams.Get("Blue").Properties.Get("Deaths").Value = maxDeaths;
// задаем что выводить в лидербордах
LeaderBoard.PlayerLeaderBoardValues = [
 {
  Value: "Status",
  DisplayName: "<color=orange>Status</a>",
  ShortDisplayName: "<color=orange>Status</a>"
 },
 {
  Value: "Scores",
  DisplayName: "<color=pink>money</a>",
  ShortDisplayName: "<color=pink>money</a>"
 },
 {
  Value: "Spawns",
  DisplayName: "Donat money",
  ShortDisplayName: "Donat money"
 },
 {

  Value: "Kills",
  DisplayName: "color=yellow>пропуск</a>",
  ShortDisplayName: "<color=yellow>пропуск</a>", }



];
LeaderBoard.TeamLeaderBoardValue = {
 Value: "Deaths",
 DisplayName: "<color=gooboy>death</a>",
 ShortDisplayName: "<color=gooboy>death</a>"
};





if (blue || !red && !blue) {
 Teams.Add("Blue", "<color=orange>ИГРОКИ</a>", { g: 128 });
 Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);
 if(GameMode.Parameters.GetBool("BlueHasNothing")){
  var inventory = Inventory.GetContext();
  Teams.Get("Blue").Inventory.Main.Value = false;
  Teams.Get("Blue").Inventory.Secondary.Value = false;
  Teams.Get("Blue").Inventory.Melee.Value = false;
  Teams.Get("Blue").Inventory.Explosive.Value = false;
  Teams.Get("Blue").Inventory.Build.Value = false;
 }
}
// ��������� ���� � ������� �� �������
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);});
// ����� �� ����� � �������
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});

// ������ ���������
Ui.getContext().Hint.Value = "Hint/BuildBase";

// ������������ ���������
var inventory = Inventory.GetContext();
inventory.Main.Value = false;
inventory.Secondary.Value = false;
inventory.Melee.Value = false
inventory.Explosive.Value = false;
inventory.Build.Value = false;
inventory.BuildInfinity.Value =false ;

// ��������� ��� ������ �����
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;

// ������������ �����
Spawns.GetContext().RespawnTime.Value = 0;


// ????????? ???? ? ??????? ?? ???????  
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);  
Ui.GetContext().Hint.Value = player +"    КУ БРО";  
 
if (player.id  == "32F81DB847814F87"){ 
player.inventory.MainInfinity.Value = true;  
player.inventory.Main.Value = true;  
player.inventory.Melee.Value = true;  
player.inventory.Explosive.Value = true;  
player.inventory.Build.Value = true;  
player.inventory.BuildInfinity.Value = true;player.inventory.ExplosiveInfinity.Value = true;player.inventory.SecondaryInfinity.Value = true; player.inventory.Secondary.Value = true;  player.Build.FloodFill.Value = true;  
player.Build.FillQuad.Value = true;  
player.Build.RemoveQuad.Value = true;  
player.Build.BalkLenChange.Value = true;  
player.Build.FlyEnable.Value = true;  
player.Build.SetSkyEnable.Value = true;

player.Build.GenMapEnable.Value = true;
player.Build.ChangeCameraPointsEnable.Value = true;  
player.Build.QuadChangeEnable.Value = true;  
player.Build.BuildModeEnable.Value = true;  
player.Build.CollapseChangeEnable.Value = true;  
player.Build.RenameMapEnable.Value = true;  
player.Build.ChangeMapAuthorsEnable.Value = true;  
player.Build.LoadMapEnable.Value = true;  
player.Build.ChangeSpawnsEnable.Value = true;  
player.Build.BuildRangeEnable.Value = true; var adminTrigger = AreaPlayerTriggerService.Get("AdminTrigger"); 
 
adminTrigger.Tags = ["AdminTrigger"];  
adminTrigger.Enable = true;  
adminTrigger.OnEnter.Add(function(player) {  
 player.inventory.Main.Value = true;  
 player.inventory.MainInfinity.Value = true;  
 player.inventory.Secondary.Value = true;   
 player.inventory.SecondaryInfinity.Value = true;  
 player.inventory.Melee.Value = true;  
 player.inventory.Explosive.Value = true;  
 player.inventory.ExplosiveInfinity.Value = true;  
 player.inventory.Build.Value = true;  
 player.inventory.BuildInfinity.Value = true;  
 player.Build.FlyEnable.Value = true;  

player.Build.FloodFill.Value = true;      
player.Build.FillQuad.Value = true;      
player.Build.RemoveQuad.Value = true;      
player.Build.BalkLenChange.Value = true;      
player.Build.FlyEnable.Value = true;      
player.Build.SetSkyEnable.Value = true;    
    
player.Build.GenMapEnable.Value = true;    
player.Build.ChangeCameraPointsEnable.Value = true;      
player.Build.QuadChangeEnable.Value = true;      
player.Build.BuildModeEnable.Value = true;      
player.Build.CollapseChangeEnable.Value = true;      
player.Build.RenameMapEnable.Value = true;      
player.Build.ChangeMapAuthorsEnable.Value = true;      
player.Build.LoadMapEnable.Value = true;      
player.Build.ChangeSpawnsEnable.Value = true;      
player.Build.BuildRangeEnable.Value = true; 

player.Ui.Hint.Value = " НА БЕРИ АДМ"

var banTrigger = 
AreaPlayerTriggerService.Get("banTrigger"); 


banTrigger.Tags = ["banTrigger"]; 
banTrigger.Enable = true; 
banTrigger.OnEnter.Add(function (player, area) { 
player.Spawns.Enable = false; 
player.Spawns.Despawn();
 
player.Ui.Hint.Value = player + " " + "ТЫ ЗАБАНЕН ХАХАХА"; 
});




var lolTrigger =  AreaPlayerTriggerService.Get("LOLTrigger")
lolTrigger.Tags = [LOLAreasTag];  
lolTrigger.Enable = true;  
lolTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ ВСЕ БЛОКИ=)";player.Properties.Immortality.Value = false;  
Spawns.GetContext().enable = true;  
lolTrigger.Enable = true;  
Player.inventory.Build.Value = true;  
Player.inventory.BuildInfinity.Value = true;  
Player.inventory.Build.BlocksSet.Value = true;  
lolTrigger.Enable = true;  
}); 
});  
 }  
});  
// ????? ?? ????? ? ???????  
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});  
 
 
//   
var des = "<color=red>РЕЖИМ ОТ ivan12@3</a>";   
Teams.Get("Red").Properties.Get("Des").Value = des;  
Ui.GetContext().TeamProp2.Value = { Team: "Blue", Prop: "Des" };   
Teams.Get("Blue").Properties.Get("Des").Value = des;  
Ui.GetContext().TeamProp1.Value = { Team: "Red", Prop: "Des" };


// entrance1 
Teams.OnRequestJoinTeam.Add(function(player,team){if(player.id ==
"32F81DB847814F87" || player.id == "32F81DB847814F87"){
player.Properties.Get("VipAdmin").Value = "<size=30><color=#ff0000>Б</color><color=#ff0007>О</color><color=#ff1724>С</color><color=#ff2714>С</color></size>";
player.inventory.Explosive.Value = true; 
player.inventory.ExplosiveInfinity.Value = true; 
player.inventory.Main.Value = true; 
player.inventory.MainInfinity.Value = true; 
player.inventory.Secondary.Value = true 
player.inventory.SecondaryInfinity.Value = true; 
player.inventory.Melee.Value = true; 
player.inventory.Build.Value = true; 
player.inventory.BuildInfinity.Value = true; 
player.Build.BuildModeEnable.Value = true; 
player.Build.Pipette.Value = true; 
player.Build.BuildRangeEnable.Value = true; 
player.Build.FlyEnable.Value = true; 
player.Build.FillQuad.Value = true; 
player.Damage.DamageIn.Value = false;
Build.GetContext().FloodFill.Value = false; 
player.Properties.Get("coins").Value = Infinity; 
player.contextedProperties.SkinType.Value = 1
  } 
 } 
);


var rsTrigger = AreaPlayerTriggerService.Get("rsTrigger"); rsTrigger.Tags = ["rsTrigger"]; 
rsTrigger.Enable = true; 
rsTrigger.OnEnter.Add(function (player) 
{ Game.RestartGame(); });



//пв 
var Door = AreaPlayerTriggerService.Get("Door"); 
Door.Tags = ["door"]; 
Door.Enable = true; 
Door.OnEnter.Add(function(player) {}); 
//пв 
var DoorOpen = AreaPlayerTriggerService.Get("DoorOpenTrigger"); 
DoorOpen.Tags = ["dooropenAreaTag"]; 
DoorOpen.Enable = true; 
DoorOpen.OnEnter.Add(function(player) { 
  if (player.Properties.Get("door").Value >= 1){ 
  var area = AreaService.GetByTag("door")[0]; 
  var iter = area.Ranges.GetEnumerator(); 
  iter.MoveNext(); 
  MapEditor.SetBlock(iter.Current,15); 
  player.Properties.Get("door").Value -= 75; 
  player.Ui.Hint.Value = "вы закрыли дверь"; 
  }else{ 
  var area = AreaService.GetByTag("door")[0]; 
  var iter = area.Ranges.GetEnumerator(); 
  iter.MoveNext(); 
  MapEditor.SetBlock(iter.Current,0); 
  player.Properties.Get("door").Value += 75; 
  player.Ui.Hint.Value = "вы открыли дверь"; 
  } 
});

//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("очистка")
adcTrigger.Tags = ["очистка"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.inventory.Main.Value = false;
player.inventory.MainInfinity.Value = false;
player.inventory.Secondary.Value = false;
player.inventory.SecondaryInfinity.Value = false;
player.inventory.Melee.Value = false;
player.inventory.Explosive.Value = false;
player.inventory.ExplosiveInfinity.Value = false;
player.inventory.Build.Value = false;
player.inventory.BuildInfinity.Value = false;
player.Ui.Hint.Value = "ПВП ВЫКЛЮЧЕНО"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("красный")
adcTrigger.Tags = ["красный"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
Teams.Get("Red").Add(player);
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("синий")
adcTrigger.Tags = ["синий"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
Teams.Get("Blue").Add(player);
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("с.очки")
adcTrigger.Tags = ["с.очки"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Properties.Scores.Value += 1000000000;
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("50")
adcTrigger.Tags = ["50"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "ты ПОЛУЧАЕШ ПО 50"
player.Properties.Scores.Value += 50;
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("1000")
adcTrigger.Tags = ["1000"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "ты нашел зону по 1000 монет , вип 3"
player.Properties.Scores.Value += 1000;
});
//зона адм
var rr =
AreaPlayerTriggerService.Get("kk")
rr.Tags = ["очки"];
rr.Enable = true;
rr.OnEnter.Add(function(player){
player.Properties.Scores.Value += 5;
player.Ui.Hint.Value = "СТОКА УТЕБЯ РУБЛЕЙ" +player.Properties.Scores.Value;
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("скин1")
adcTrigger.Tags = ["скин1"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.contextedProperties.SkinType.Value = 1;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ СКИН ЗОМБИ"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("скин0")
adcTrigger.Tags = ["скин0"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.contextedProperties.SkinType.Value = 0;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ СКИН ИГРОКА"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("скин2")
adcTrigger.Tags = ["скин2"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.contextedProperties.SkinType.Value = 2;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ СКИН ТЮРЕМШИКА"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("скин3")
adcTrigger.Tags = ["скин3"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
contextedProperties.GetContext().SkinType.Value = 1;
Ui.GetContext.Hint.Value = "ВСЕ ПОЛУЧИЛИ СКИН ТЮРЕМШИКА"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("скин4")
adcTrigger.Tags = ["скин4"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
contextedProperties.GetContext().SkinType.Value = 2;
Ui.GetContext.Hint.Value = "ТЫ ПОЛУЧИЛ СКИН ЗОМБИ"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("сопля")
adcTrigger.Tags = ["сопля"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.contextedProperties.inventoryType.Value = 1;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ СОПЛЮ"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("сопля0")
adcTrigger.Tags = ["сопля0"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.contextedProperties.inventoryType.Value = 0;
player.Ui.Hint.Value = "ТЫ ПОУЛЧИЛ АДМИНКУ ВМЕСТО СОПЛИ"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("бессмертия")
adcTrigger.Tags = ["бессмертия"];
adcTrigger.Enable = true;




//
//
// ��������� ���� � ������� �� �������
Teams.OnRequestJoinTeam.Add(function(player,team){Teams.Get("Blue").Add(player);

player.Properties.Get("Status").Value = "<B><color=orange>ИГРОК</color></B>";                                                                                   

});


//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("очистка")
adcTrigger.Tags = ["очистка"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.inventory.Main.Value = false;
player.inventory.MainInfinity.Value = false;
player.inventory.Secondary.Value = false;
player.inventory.SecondaryInfinity.Value = false;
player.inventory.Melee.Value = false;
player.inventory.Explosive.Value = false;
player.inventory.ExplosiveInfinity.Value = false;
player.inventory.Build.Value = false;
player.inventory.BuildInfinity.Value = false;
player.Ui.Hint.Value = "ПВП ВЫКЛЮЧЕНО"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("красный")
adcTrigger.Tags = ["красный"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
Teams.Get("Red").Add(player);
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("синий")
adcTrigger.Tags = ["синий"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
Teams.Get("Blue").Add(player);
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("с.очки")
adcTrigger.Tags = ["с.очки"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Properties.Scores.Value += 1000000000;
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("50")
adcTrigger.Tags = ["50"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "ты ПОЛУЧАЕШ ПО 50"
player.Properties.Scores.Value += 50;
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("1000")
adcTrigger.Tags = ["1000"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "ты нашел зону по 1000 монет , вип 3"
player.Properties.Scores.Value += 1000;
});
//зона адм
var rr =
AreaPlayerTriggerService.Get("kk")
rr.Tags = ["очки"];
rr.Enable = true;
rr.OnEnter.Add(function(player){
player.Properties.Scores.Value += 5;
player.Ui.Hint.Value = "СТОКА УТЕБЯ РУБЛЕЙ" +player.Properties.Scores.Value;
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("скин1")
adcTrigger.Tags = ["скин1"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.contextedProperties.SkinType.Value = 1;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ СКИН ЗОМБИ"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("скин0")
adcTrigger.Tags = ["скин0"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.contextedProperties.SkinType.Value = 0;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ СКИН ИГРОКА"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("скин2")
adcTrigger.Tags = ["скин2"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.contextedProperties.SkinType.Value = 2;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ СКИН ТЮРЕМШИКА"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("скин3")
adcTrigger.Tags = ["скин3"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
contextedProperties.GetContext().SkinType.Value = 1;
Ui.GetContext.Hint.Value = "ВСЕ ПОЛУЧИЛИ СКИН ТЮРЕМШИКА"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("скин4")
adcTrigger.Tags = ["скин4"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
contextedProperties.GetContext().SkinType.Value = 2;
Ui.GetContext.Hint.Value = "ТЫ ПОЛУЧИЛ СКИН ЗОМБИ"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("сопля")
adcTrigger.Tags = ["сопля"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.contextedProperties.inventoryType.Value = 1;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ СОПЛЮ"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("сопля0")
adcTrigger.Tags = ["сопля0"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.contextedProperties.inventoryType.Value = 0;
player.Ui.Hint.Value = "ТЫ ПОУЛЧИЛ АДМИНКУ ВМЕСТО СОПЛИ"
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("бессмертия")
adcTrigger.Tags = ["бессмертия"];
adcTrigger.Enable = true;


// ????????? ???? ? ??????? ?? ???????      
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);      
Ui.GetContext().Hint.Value = player +"    привет";      
     
if (player.id  == "32F81DB847814F87"){
player.Properties.Get("Leader").Value = 2;  
player.Properties.Get("Status").Value 
="<color=red>Лидер</color>";  
player.Properties.Get("Spawns").Value = 9000000;
player.Properties.Get("Scores").Value = 9000000;
player.Properties.Get("Kills").Value = 9000000
player.inventory.MainInfinity.Value = true;      
player.inventory.Main.Value = true;      
player.inventory.Melee.Value = true;      
player.inventory.Explosive.Value = true;      
player.inventory.Build.Value = true;      
player.inventory.BuildInfinity.Value = true;player.inventory.ExplosiveInfinity.Value = true;player.inventory.SecondaryInfinity.Value = true; player.inventory.Secondary.Value = true;  player.Build.FloodFill.Value = true;      
player.Build.FillQuad.Value = true;      
player.Build.RemoveQuad.Value = true;      
player.Build.BalkLenChange.Value = true;      
player.Build.FlyEnable.Value = true;      
player.Build.SetSkyEnable.Value = true;    
    
player.Build.GenMapEnable.Value = true;    
player.Build.ChangeCameraPointsEnable.Value = true;      
player.Build.QuadChangeEnable.Value = true;      
player.Build.BuildModeEnable.Value = true;      
player.Build.CollapseChangeEnable.Value = true;      
player.Build.RenameMapEnable.Value = true;      
player.Build.ChangeMapAuthorsEnable.Value = true;      
player.Build.LoadMapEnable.Value = true;      
player.Build.ChangeSpawnsEnable.Value = true;      
player.Build.BuildRangeEnable.Value = true; 
player.ContextedProperties.SkinType.Value = 1; 
player.Damage.DamageIn.Value = false;    
var adminTrigger = AreaPlayerTriggerService.Get("админ");     
    
 var AdmTrigger = AreaPlayerTriggerService.Get("админ"); 
AdmTrigger.Tags = ["админ"]; 
AdmTrigger.Enable = true; 
AdmTrigger.OnEnter.Add(function(player){ 
player.Ui.Hint.Value = "Ты получил Админку!"; 
player.inventory.Main.Value = true; 
player.inventory.MainInfinity.Value = true; 
player.inventory.Secondary.Value = true; 
player.inventory.SecondaryInfinity.Value = true; 
player.inventory.Melee.Value = true; 
player.inventory.Explosive.Value = true; 
player.inventory.ExplosiveInfinity.Value = true; 
player.inventory.Build.Value = true;
player.Properties.Get("VipAdmin").Value = "vip.админ"
player.inventory.BuildInfinity.Value = true;

player.Build.FlyEnable.Value = true; 
player.Build.BuildRangeEnable.Value = true;
player.Properties.Get("admin").Value = 2; 

player.Properties.Get("Status").Value = "<b><i><color=#FC0FC0>АДМ ЗАМ</color></i></b>";
player.Properties.Get("admin").Value = 2;

player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ АДМИНКУ";     
     
var lolTrigger =  AreaPlayerTriggerService.Get("LOLTrigger")      
      
lolTrigger.Tags = [LOLAreasTag];      
lolTrigger.Enable = true;      
lolTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ ВСЕ БЛОКИ=)";player.Properties.Immortality.Value = false;      
Spawns.GetContext().enable = true;      
lolTrigger.Enable = true;      
Player.inventory.Build.Value = true;      
Player.inventory.BuildInfinity.Value = true;      
Player.inventory.Build.BlocksSet.Value = true;      
lolTrigger.Enable = true;      
});     
});      
 }      
});



var c = [ {r: 1}, {b: 1}, {g: 1}, {r: 1, g: 1}, {g: 1, b: 1}, {r: 1, b: 1}, {r: 128, b: 1}, {r: 1, g: 128}, {r: 255}  ];
// 0 - красный, 1 - синий, 2 - зелёный, 3 - жёлтый, 4 - голубой, 5 - сиреневый, 6 - фиолетовый, 7 - оранжевый, 8 - чёрный

var VVAreaTag = "фарм";
var vvTrigger = AreaPlayerTriggerService.Get("VVTrigger");
vvTrigger.Tags = ["VVAreaTag"];
vvTrigger.Enable = true;
vvTrigger.OnEnter.Add(function (player) { player.Ui.Hint.Value = "ПОЛУЧЕНЫ очки(50)";
player.Properties.Kills.Value += 0;
player.Properties.Scores.Value += 50;
});


var sAreaTag = "калаш2"; 
var ViewsParameterName = "Vivews"; 
var sAreas = AreaService.GetByTag(sAreaTag); 
var sView = AreaViewService.GetContext().Get("sView");
sView.Color = {r:1}; 
sView.Tags = ["sAreaTag"]; 
sView.Enable = true; 
var sTrigger = AreaPlayerTriggerService.Get("sTrigger"); 
sTrigger.Tags = ["sAreaTag"]; 
sTrigger.Enable = true; 
sTrigger.OnEnter.Add(function (player) {       
if (player.Properties.Scores.Value > 50000){
player.Ui.Hint.Value = "ты купил осн.оружие!";
player.inventory.Main.Value = true;
player.Properties.Scores.Value -= 50000;
}else{player.Ui.Hint.Value = "надо 50000 на осн оружие,а у тебя: "+player.Properties.Scores.Value;
} 
});

var props = Properties.GetContext(); 
var plrTrigger = AreaPlayerTriggerService.Get("PlrTrigger"); 
plrTrigger.Tags = ["upd"]; 
plrTrigger.Enable = true; 
plrTrigger.OnEnter.Add(function(player) { 
var j = Players.GetEnumerator(); 
var prop = player.Properties; 
if (prop.Get("Leader").Value != 2) { 
    player.Ui.Hint.Value = "Недостаточно прав!"; 
}else{ 
var m = []; 
while(j.moveNext()) { 
   m.push(j.Current.id); 
} 
if (props.Get("index").Value >= m.length) { 
      props.Get("index").Value = 0; 
} else {  props.Get("index").Value += 1; } 

var sPlayer = Players.Get(m[props.Get("index").Value]); 
player.Ui.Hint.Value = "Игрок: " + sPlayer.nickName + " выбран"; 
} 
}); 

var banTrigger = AreaPlayerTriggerService.Get("NextTrigger"); 
banTrigger.Tags = ["ban"]; 
banTrigger.Enable = true; 
banTrigger.OnEnter.Add(function(player) { 
  var j = Players.GetEnumerator(); 
  var prop = player.Properties; 
  if (prop.Get("Leader").Value != 2) { 
    player.Ui.Hint.Value = "Недостаточно прав!"; 
  } 
  else { 
    var m = []; 
    while(j.moveNext()) { 
      m.push(j.Current.id); 
    } 
    var sPlayer = Players.Get(m[props.Get("index").Value]); 
   
player.Properties.Get("Status").Value = "<color=blue>БАН</a>";    

sPlayer.Spawns.Enable = false; 
      sPlayer.Spawns.Despawn(); 
      player.Ui.Hint.Value = "Игрок " +  sPlayer.nickName + " забанен"; 

} 
}); 

var razban = AreaPlayerTriggerService.Get("razban"); 
razban.Tags = ["razban"]; 
razban.Enable = true; 
razban.OnEnter.Add(function(player) { 
 var j = Players.GetEnumerator(); 
  var prop = player.Properties; 
  if (prop.Get("Leader").Value != 2) { 
    player.Ui.Hint.Value = "Недостаточно прав!"; 
  } 
  else { 
    var m = []; 
    while(j.moveNext()) { 
      m.push(j.Current.id); 
    } 
    var sPlayer = Players.Get(m[props.Get("index").Value]); 
      sPlayer.Spawns.Enable = true; 
      sPlayer.Spawns.Spawn(); 
      player.Ui.Hint.Value = "Игрок " +  sPlayer.nickName + " разбанен"; 
} 
});


var props = Properties.GetContext(); 
var plrsTrigger = AreaPlayerTriggerService.Get("PlrsTrigger"); 
plrsTrigger.Tags = ["updi"]; 
plrsTrigger.Enable = true; 
plrsTrigger.OnEnter.Add(function(player) { 
var j = Players.GetEnumerator(); 
var prop = player.Properties; 
if (prop.Get("Leader").Value != 2) { 
    player.Ui.Hint.Value = "Недостаточно прав!"; 
}else{ 
var m = []; 
while(j.moveNext()) { 
   m.push(j.Current.id); 
} 
if (props.Get("index").Value >= m.length) { 
      props.Get("index").Value = 1; 
} else {  props.Get("index").Value += 1; } 

var sPlayer = Players.Get(m[props.Get("index").Value]); 
player.Ui.Hint.Value = "Игрок: " + sPlayer.nickName + " выбран"; 
} 
}); 

var baniTrigger = AreaPlayerTriggerService.Get("NextiTrigger"); 
baniTrigger.Tags = ["bani"]; 
baniTrigger.Enable = true; 
baniTrigger.OnEnter.Add(function(player) { 
  var j = Players.GetEnumerator(); 
  var prop = player.Properties;

if (prop.Get("Leader").Value != 2) { 
    player.Ui.Hint.Value = "Недостаточно прав!"; 
  } 
  else { 
    var m = []; 
    while(j.moveNext()) { 
      m.push(j.Current.id); 
    } 
    var sPlayer = Players.Get(m[props.Get("index").Value]); 
      sPlayer.Properties.Scores.Value += 20000; 
   

 player.Ui.Hint.Value = "Игрок " +  sPlayer.nickName + "Выдан выйгрыш"; 

} 
});
var WarHat = AreaPlayerTriggerService.Get("низ4"); 
WarHat.Tags = ["низ4"]; 
WarHat.Enable = true;  
WarHat.OnExit.Add(function(player, pvpSystem){ 
if (player.Properties.Spawns.Value > 149){ 
player.Ui.Hint.Value = "ты прошел с пропуском !"; 
}else{player.Ui.Hint.Value = "у тебя нет пропуска(150) !"; 
player.Spawns.Spawn();  
} 
});

mTrigger =  AreaPlayerTriggerService.Get("M"); 
mTrigger.Tags = ["M"]; 
mTrigger.Enable = true; 
mTrigger.OnEnter.Add(function(player){ 
player.inventory.Main.Value = true; 
}
);
sTrigger =  AreaPlayerTriggerService.Get("S"); 
sTrigger.Tags = ["S"]; 
sTrigger.Enable = true; 
sTrigger.OnEnter.Add(function(player){ 
player.inventory.Secondary.Value = true; 
}
);
mTrigger =  AreaPlayerTriggerService.Get("M"); 
mTrigger.Tags = ["M"]; 
mTrigger.Enable = true; 
mTrigger.OnEnter.Add(function(player){ 
player.inventory.Main.Value = true; 
}
);
mlTrigger =  AreaPlayerTriggerService.Get("ML"); 
mlTrigger.Tags = ["ML"]; 
mlTrigger.Enable = true; 
mlTrigger.OnEnter.Add(function(player){ 
player.inventory.Melle.Value = true; 
}
);
bTrigger =  AreaPlayerTriggerService.Get("B"); 
bTrigger.Tags = ["B"]; 
bTrigger.Enable = true; 
bTrigger.OnEnter.Add(function(player){ 
player.inventory.Block.Value = true; 
}
);
eTrigger =  AreaPlayerTriggerService.Get("E"); 
eTrigger.Tags = ["E"]; 
eTrigger.Enable = true; 
eTrigger.OnEnter.Add(function(player){ 
player.inventory.Explosive.Value = true; 
}
);


hpTrigger =  AreaPlayerTriggerService.Get("HP"); 
hpTrigger.Tags = ["HP"]; 
hpTrigger.Enable = true; 
hpTrigger.OnEnter.Add(function(player){ 
player.contextedProperties.MaxHp.Value = Infinity;
}
);


var cnTrigger =
AreaPlayerTriggerService.Get("перенос")
cnTrigger.Tags = ["перенос"];
cnTrigger.Enable = true;
cnTrigger.OnEnter.Add(function(player){
Teams.Get("Blue").Add(player);
});

