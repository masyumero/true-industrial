ServerEvents.recipes(e=>{
    let machineList = ['thermal:machine_furnace','thermal:machine_sawmill','thermal:machine_pulverizer','thermal:machine_smelter','thermal:machine_centrifuge','thermal:machine_press','thermal:machine_chiller','thermal:machine_refinery','thermal:machine_pyrolyzer','thermal:machine_crystallizer','thermal:machine_bottler','thermal:machine_brewer','thermal_extra:endothermic_dehydrator','thermal_extra:fluid_mixer','thermal_extra:nitratic_igniter','thermal_extra:advanced_refinery','thermal_extra:component_assembly']
    machineList.forEach(m=>{
        e.replaceInput({output:m},"thermal:rf_coil",'kubejs:enderium_flux_coil')
    })
    e.shaped(
        'rftoolsbase:machine_frame',
        [
            "ABA",
            "CDC",
            "ABA"
        ],
        {
            A:'minecraft:iron_ingot',
            B:'minecraft:blue_dye',
            C:'minecraft:gold_nugget',
            D:'mekanism:elite_control_circuit'
        }
    )
    e.replaceOutput({id:"thermal:machines/pulverizer/pulverizer_enderium_plate_to_dust"},'thermal:enderium_dust',Item.of('thermal:enderium_dust',4))
    e.replaceOutput({id:"thermal:machines/pulverizer/pulverizer_enderium_ingot_to_dust"},'thermal:enderium_dust',Item.of('thermal:enderium_dust',4))
    e.replaceOutput({id:"jaopca:mekanism.material_to_dust.enderium"},'thermal:enderium_dust',Item.of('thermal:enderium_dust',4))
    e.replaceInput({output:'alchemistry:combiner'},"minecraft:redstone","rftoolsbase:infused_diamond")
    e.replaceInput({output:'alchemistry:liquifier'},"minecraft:redstone","rftoolsbase:infused_enderpearl")
    e.replaceInput({output:'alchemistry:dissolver'},"minecraft:redstone","rftoolsbase:infused_enderpearl")
    e.replaceInput({output:'alchemistry:combiner'},"minecraft:redstone","rftoolsbase:infused_enderpearl")
    e.replaceInput({output:'alchemistry:compactor'},"minecraft:redstone","rftoolsbase:infused_enderpearl")
    e.replaceInput({output:'alchemistry:atomizer'},"minecraft:redstone","rftoolsbase:infused_enderpearl")
    e.remove({id:"rftoolsbase:machine_frame"})
    e.replaceInput({output:"mekanism:alloy_reinforced"},"mekanism:alloy_infused",Item.of("mekanism:alloy_infused",2))
    e.replaceInput({output:'rftoolsbase:dimensionalshard'},"minecraft:redstone","nuclearcraft:dimensional_blend_dust")
    e.remove({id:"thermal:smelting/enderium_ingot_from_dust_smelting"})
    e.remove({id:"thermal:smelting/enderium_ingot_from_dust_blasting"})
    e.remove({id:"thermal:fire_charge/enderium_ingot_2"})
    e.remove({id:"thermal:enderium_dust_2"})
    e.remove({id:"nuclearcraft:alloy_smelter/ingots_ferroboron-ingots_lithium"})
    e.replaceInput({id:"nuclearcraft:plate_advanced"},"nuclearcraft:tough_alloy_ingot","nuclearcraft:tough_alloy_plate")
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          " AB",
          "ACA",
          "DA "
        ],
        "key": {
          "A": {
            "item": "thermal:enderium_plate"
          },
          "B": {
            "item": "vintageimprovements:enderium_spring"
          },
          "C": {
            "item": "thermal:rf_coil"
          },
          "D": {
            "item": "vintageimprovements:enderium_rod"
          }
        },
        "result": {
          "item": "kubejs:enderium_flux_coil"
        }
      })
    e.remove({id:"ad_astra:compressor"})
    e.remove({id:"jaopca:create.material_to_plate.plastic"})
    e.remove('thermal:rf_coil')
    e.shaped(
        'thermal:rf_coil',
        [
            " AB",
            "ACA",
            "BA "
        ],
        {
            "A":'mekanism:basic_control_circuit',
            "B":'minecraft:redstone',
            "C":'minecraft:gold_ingot'
        }
    )
    e.remove({id:/botanypots/})
    e.remove({id:/botanypotstiers/})
    e.shapeless(
        'botanypots:terracotta_hopper_botany_pot',
        [
            'minecraft:hopper',
            'botanypots:terracotta_botany_pot'
        ]
    )
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
})
