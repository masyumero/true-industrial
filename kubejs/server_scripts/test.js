ItemEvents.rightClicked("kubejs:random_debug",e=>{
    let result = ListsKu.getEntryBasedOnWeight([
        { weight: 1.0, entry: "Iron Ore" },
        { weight: 3.0, entry: "Gold Ore" },
        { weight: 5.0, entry: "Diamond" }
    ]);
    console.log("You got:", result);
})
//ItemEvents.crafted('create:andesite_casing',e=>{
//    let aaa = e.getItem().
//    if(aaa = 0) e.addGameStage("test")
//})