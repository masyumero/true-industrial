ServerEvents.tags("block",e=>{
    global.unittier.forEach(tier => {
        e.add("mekanism:machine_unit",`mekanism:${tier.tier}\_unit`)
        e.add("mekanism:item_output_bus",`mekanism:${tier.tier}_item_output_bus`)
        e.add("mekanism:item_input_bus",`mekanism:${tier.tier}_item_input_bus` )
        e.add("mekanism:fluid_output_hatch",`mekanism:${tier.tier}_fluid_output_hatch`)
        e.add("mekanism:fluid_input_hatch",`mekanism:${tier.tier}_fluid_input_hatch`)
        e.add("mekanism:energy_output_hatch",`mekanism:${tier.tier}_energy_output_hatch`)
        e.add("mekanism:energy_input_hatch",`mekanism:${tier.tier}_energy_input_hatch`)
    });
})




