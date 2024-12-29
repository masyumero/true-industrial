ServerEvents.recipes(e=>{
    e.remove({not:{input:"minecraft:coal"},output:'minecraft:charcoal'})
    e.remove({id:"cookingforblockheads:sink"})
    e.remove({output:"quarryplus:adv_quarry"})
    e.shaped(
        "minecraft:crafting_table",
        [
            "AA",
            "BB"
        ],
        {
            A:"minecraft:flint",
            B:"minecraft:oak_log"
        }
    )
    e.recipes.extendedcrafting.compressor(
        "draconicadditions:chaos_heart",
        "hostilenetworks:prediction_matrix",
        Item.of('hostilenetworks:prediction','{data_model:{id:"hostilenetworks:draconicevolution/draconic_guardian"}}').weakNBT(),
        1000,
        10000000
    )
    e.recipes.minecraft.crafting_shaped(
        "pipez:infinity_upgrade",
        [
            "AAA",
            "BCB",
            "AAA"
        ],
        {
            A:"minecraft:nether_star",
            B:"#forge:circuits/infinite",
            C:"pipez:ultimate_upgrade"
        }
    )
    e.recipes.minecraft.crafting_shaped(
        "thermal:steel_dust",
        [
            "AAA",
            "   ",
            "   "
        ],
        {
            A:"mysticalagriculture:steel_essence"
        }
    )
    e.recipes.extendedcrafting.shaped_table(
        "mysticalagradditions:creative_essence",
        [
            "  A  ",
            " ABA ",
            "ABCBA",
            " ABA ",
            "  A  "
        ],
        {
            A:"mysticalexpansion:divinium_essence",
            B:"draconicevolution:chaos_shard",
            C:"draconicevolution:dragon_heart"
        }
    )
    e.recipes.minecraft.crafting_shaped(
        "rftoolsdim:legendary_essence",
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            A:"rftoolsdim:rare_essence",
            B:"nether_star"
        }
    )
    e.recipes.minecraft.crafting_shaped(
        "rftoolsdim:rare_essence",
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            A:"rftoolsdim:common_essence",
            B:"nether_star"
        }
    )
    e.recipes.minecraft.crafting_shaped(
        "rftoolsdim:common_essence",
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            A:"emerald_block",
            B:"nether_star"
        }
    )
    e.remove({id:'cyclic:uncrafter'})
    let hatchtype = (io,type,cat) => {
        e.recipes.minecraft.crafting_shaped(
            `trueindustrial:${type}_${io}_hatch`,
            [
                "AAA",
                "ABA",
                "AAA"
            ],
            {
                A:"minecraft:iron_block",
                B:`${cat}`
            }
        )
    }
    hatchtype("input","fluid",'integratedtunnels:part_importer_fluid')
    hatchtype("output","fluid",'integratedtunnels:part_exporter_fluid')
    hatchtype("input","energy",'integratedtunnels:part_importer_energy')
    hatchtype("output","energy",'integratedtunnels:part_exporter_energy')
    hatchtype("input","item",'integratedtunnels:part_importer_item')
    hatchtype("output","item",'integratedtunnels:part_exporter_item')
})
