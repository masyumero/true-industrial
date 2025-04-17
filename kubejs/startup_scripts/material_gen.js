//priority: 1
StartupEvents.registry("block", e =>{
    global.MaterialList.forEach(block => {
        if(block.hasFrame == true){
        e.create(`${block.name}_frame`)
                .color(0,block.color)
                .hardness(block.hardness)
                .renderType('cutout')
                .defaultCutout()
                .material('metal')
                .textureAll(`kubejs:block/material/${block.name}/frame`)
                .resistance(3)
                .opaque(false)
                .tagBlock('minecraft:mineable/pickaxe')
                .tagBlock('minecraft:needs_iron_tool')
                .item(itemForm => {itemForm.color(0, block.color)})
        }
        if(block.hasFrame == "customcolor"){
            e.create(`${block.name}_frame`)
                    .hardness(block.hardness)
                    .renderType('cutout')
                    .defaultCutout()
                    .material('metal')
                    .textureAll(`kubejs:block/material/${block.name}/frame`)
                    .resistance(3)
                    .opaque(false)
                    .tagBlock('minecraft:mineable/pickaxe')
                    .tagBlock('minecraft:needs_iron_tool')
                    .item(itemForm => {itemForm.color(0, block.color)})
        }
    })
})
StartupEvents.registry("item", e =>{
    global.MaterialList.forEach(item => {
        if(item.hasIngot == true || item.hasRod == true || item.hasFrame == true){
            e.create(`${item.name}_ingot`)
                .color(0,item.color)
                .texture(`kubejs:item/material/${item.name}/ingots`)
                .tag("forge:ingots")
                .tag(`kubejs:ingots/${item.name}`)
            e.create(`${item.name}_rod`)
                .color(0,item.color)
                .texture(`kubejs:item/material/${item.name}/rods`)
                .tag("forge:rods")
                .tag(`kubejs:rods/${item.name}`)
        }
        //if(item.hasRod == "customcolor"){
        //    e.create(`${item.name}_rod`)
        //        .texture(`kubejs:item/material/${item.name}/rods`)
        //        .tag("forge:rods")
        //        .tag(`kubejs:rods/${item.name}`)
        //}
        //if(item.hasIngot == "customcolor"){
        //    e.create(`${item.name}_ingot`)
        //        .texture(`kubejs:item/material/${item.name}/ingots`)
        //        .tag("forge:ingots")
        //        .tag(`kubejs:ingots/${item.name}`)
        //}
    })    
})