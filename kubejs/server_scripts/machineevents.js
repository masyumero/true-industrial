MBDMachineEvents.onAfterRecipeWorking("mekanism:dyson_system_controller",e=>{
    let recipeID
    recipeID = e.event.getRecipe().getId().toString()
    if (recipeID == "mbd2:dyson_system/recipe_1"){
        e.event.machine.setCustomData({active:true})
    }
})

//MBDMachineEvents.onTick("mekanism:dyson_system_controller",e=>{
//    isactive = e.event.getMachine().getCustomData().getBoolean("active")
//    time = e.event.machine.getLevel().dayTime()
//    if(isactive == true && time != 18000){
//        e.event.machine.getLevel().runCommandSilent("time set midnight")
//    }
//})
