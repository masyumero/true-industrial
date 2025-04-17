WorldgenEvents.remove(e=>{
    if(isHardMode == true){
        e.removeOres(ore=>{
            ore.blocks = ['#forge:ores/dimensional_shard']
        })
    }
})