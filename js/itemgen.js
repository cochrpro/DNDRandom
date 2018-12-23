//Program to generate items for DND shop
//Program should require input for amount of shop items to offer
//Program should include all possible item types, a range of item damage, and effects
//Program should randomize weapons on button click
//Add arrays for data types AND / OR find .json files for all available items?
//Check boxes for "must include" item types
//Options to allow / disallow things

//http://www.dnd5eapi.co/docs/#equipment-section <--- APIS AVAILABLE FOR EACH
    // CALL API BY USING "http://www.dnd5eapi.co/api/<type>
    //Type can be equipment, spells, skills

// https://github.com/jcquinlan/dnd5-weapons-json
let generateButton = document.getElementById("generate_item");
let successArea = document.getElementById("success");
// itemList.push each unique item to this array to be accessed by other functions
let itemList = [];
let weaponList = [];

let testItem = {"_id":"5bce91275b7768e792017da3",
  "index":1, 
  "name":"Club",
  "equipment_category":"Weapon",
  "weapon_category:":"Simple",
  "weapon_range":"Melee",
  "category_range":"Simple Melee",
  "cost":{"quantity":1,"unit":"sp"},
  "damage":{"dice_count":1,"dice_value":4,"damage_type":{"url":"http://www.dnd5eapi.co/api/damage-types/2","name":"Bludgeoning"}},
  "range":{"normal":5,"long":null},
  "weight":2,
  "properties":[
    {"name":"Light","url":"http://www.dnd5eapi.co/api/weapon-properties/4"},
    {"name":"Monk","url":"http://www.dnd5eapi.co/api/weapon-properties/11"}],
    "url":"http://www.dnd5eapi.co/api/equipment/1"};

//Function to sort each item with equipment_category weapon to new weapon array
function loadAvailableWeapons() {
  //array for weapons, filtered from all items
  let availableWeapons;
  
  for(var index = 0; index < 256; index++) {
    if (itemList[index].equipment_category != "weapon") {
      console.log(itemList);
    } else {
      weaponList.push(itemList[index]);
    }
  }
}

generateButton.addEventListener("click", 
  function(event){
      //There are 256 possible items, loops through each adding 1-256 to the url. 
      //Also define a place to keep the info
    for(var counter = 1; counter <= 256; counter++){
      let itemAPI = new XMLHttpRequest();
      itemAPI.open('GET', "http://www.dnd5eapi.co/api/equipment/" + counter + ".json");
      itemAPI.onload = function() {
            let uniqueItemJSON;
            uniqueItemJSON = JSON.parse(itemAPI.responseText);
            console.log(uniqueItemJSON.name); //Logs null to console - why?
            itemList.push(uniqueItemJSON);
        }
      itemAPI.send();
    }
});

//Need a function that generates reasonable stats

//Need a function that formats the item





