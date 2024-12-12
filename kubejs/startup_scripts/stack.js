ItemEvents.modification( event => {
    event.modify("mekanism:energy_tablet", item => {
        item.maxStackSize = 16
    })
    event.modify("minecraft:elytra",item =>{
        item.maxStackSize = 32
    })
})