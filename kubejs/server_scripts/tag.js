ServerEvents.tags("item",e=>{
    let item = (itemname) => {
    e.add("pack:craftable_creative_item",`${itemname}`)
    }
    item("create:creative_blaze_cake")
    item("create:creative_crate")
    item("create:creative_motor")
    item("create:creative_fluid_tank")
    item("createaddition:creative_energy")
    item("mekanism:creative_bin")
    item("mekanism:creative_chemical_tank")
    item("mekanism:creative_energy_cube")
    item("mekanism:creative_fluid_tank")
    item("storagedrawers:creative_vending_upgrade")
    item('storagedrawers:creative_storage_upgrade')
    item('ae2:creative_energy_cell')
    item('draconicevolution:creative_capacitor')
    item('solarpanels:creative_solar_panel')
    item('solarpanels:creative_solar_element')
    item('botania:creative_pool')
    item('pneumaticcraft:creative_compressor')
    item('pneumaticcraft:creative_compressed_iron_block')
})