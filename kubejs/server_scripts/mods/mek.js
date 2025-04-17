ServerEvents.recipes(e=>{
e.shaped(
  'mekanism:advanced_control_circuit',
  [
    "DCD",
    "CBC",
    "AAA"
  ],
  {
    "D":'mekanism:alloy_reinforced',
    "C":'mekanism:basic_control_circuit',
    "B":'nuclearcraft:plate_basic',
    "A":'pneumaticcraft:empty_pcb'
  }
)
e.replaceInput({id:"mekanism:metallurgic_infuser"},"mekanism:steel_casing","mekanism:basic_unit")
e.replaceInput({id:"mekanism:precision_sawmill"},"mekanism:steel_casing","mekanism:basic_unit")
e.replaceInput({id:"mekanism:crusher"},"mekanism:steel_casing","mekanism:basic_unit")
e.replaceInput({id:"mekanism:crusher"},"redstone","mekanism:alloy_infused")
e.replaceInput({id:"mekanism:energized_smelter"},"mekanism:steel_casing","mekanism:basic_unit")
e.replaceInput({id:"mekanism:energized_smelter"},"redstone","mekanism:alloy_infused")
e.remove({id: /mekanism:factory/ })
e.replaceInput({id:"mekanism:transmitter/universal_cable/basic"},"#forge:dusts/redstone","#mekanism:alloys/infused")
e.remove({id:"mekanism:metallurgic_infusing"})
e.custom({
  "type": "thermal_extra:component_assembly",
  "energy": 5000,
  "ingredients": [
    {
      "count": 1,
      "item": 'create_connected:control_chip'
    },
    {
      "count": 1,
      "item": 'tfmg:capacitor_'
    },
    {
      "count": 2,
      "item": 'tfmg:fuse'
    },
    {
      "amount": 288,
      "fluid": "nuclearcraft:electrum"
    }
  ],
  "result": [
    {
      "item": 'mekanism:basic_control_circuit'
    }
  ]
})
e.remove({output:'mekanism_extras:absolute_control_circuit'})
e.remove({output:'mekanism_extras:supreme_control_circuit'})
e.remove({output:'mekanism_extras:cosmic_control_circuit'})
e.remove({output:'mekanism_extras:infinite_control_circuit'})
e.remove({output:'mekanism:basic_control_circuit'})
e.remove({output:'mekanism:advanced_control_circuit'})
e.remove({output:'mekanism:elite_control_circuit'})
e.remove({output:'mekanism:ultimate_control_circuit'})
e.shaped(
  'mekanism:basic_control_circuit',
  [
    "ABA",
    "CDC",
    "EEE"
  ],
  {
    "A":"create_new_age:overcharged_diamond_wire",
    "B":"tfmg:capacitor_",
    "C":"tfmg:fuse",
    "D":"create_connected:control_chip",
    "E":"createaddition:electrum_spool"
  }
)
e.shapeless(
  'mekanism:energy_crystal_9_1',
  ['9x mekanismmoremachine:crystal_energy']
)
global.energycompression.forEach(comp => {
  let EnergyAmount = (5400000*comp.count)
  e.recipes.mekanism.energy_conversion(`mekanism:energy_crystal_${comp.tier}`, EnergyAmount)
  if(comp.lesser != "none")
    e.recipes.minecraft.crafting_shapeless(`mekanism:energy_crystal_${comp.tier}`,[`9x mekanism:energy_crystal_${comp.lesser}`])
})
e.recipes.mekanism.energy_conversion("minecraft:bedrock",1)
global.unittier.forEach(tier => {
  e.shaped(`mekanism:${tier.tier}_item_output_bus`,[  " B ",  " C ",  "   "],{  B:`mekanism:${tier.tier}_unit`,  C:"minecraft:chest"})
  e.shaped(`mekanism:${tier.tier}_item_input_bus`,[  " C ",  " B ",  "   "],{  B:`mekanism:${tier.tier}_unit`,  C:"minecraft:chest"})
  e.shaped(`mekanism:${tier.tier}_fluid_output_hatch`,[  " B ",  " C ",  "   "],{  B:`mekanism:${tier.tier}_unit`,  C:"minecraft:bucket"})
  e.shaped(`mekanism:${tier.tier}_fluid_input_hatch`,[  " C ",  " B ",  "   "],{  B:`mekanism:${tier.tier}_unit`,  C:"minecraft:bucket"})
  e.shaped(`mekanism:${tier.tier}_energy_output_hatch`,[  " B ",  " C ",  "   "],{  B:`mekanism:${tier.tier}_unit`,  C:tier.circuit})
  e.shaped(`mekanism:${tier.tier}_energy_input_hatch`,[  " C ",  " B ",  "   "],{  B:`mekanism:${tier.tier}_unit`,  C:tier.circuit})
});
e.recipes.minecraft.crafting_shaped(
  "mekanism:digital_assembly_table",
  [
    "ABA",
    "BCB",
    "DBD"
  ],
  {
    A:'chemlib:iridium_plate',
    B:"mekanism:steel_casing",
    C:"ae2:crafting_monitor",
    D:"mekanism:basic_control_circuit"
  }
)
e.recipes.minecraft.crafting_shaped(
  'mekanism:basic_unit',
  [
    "ABA",
    "BCB",
    "ABA"
  ],
  {
    A:'create:andesite_alloy',
    B:'mekanism:basic_control_circuit',
    C:'mekanism:steel_casing'
  }
)
e.remove({id:"mekanism:digital_miner"})
e.recipes.mekanism.metallurgic_infusing(
  'kubejs:cosmic_ingot',
  "thermal_extra:abyssal_ingot",
  {
    infuse_type:"mekanism_extras:spectrum",
    amount:1000
  }
  )
e.custom({
  "type": "mekanism:nucleosynthesizing",
  "itemInput":{
      "ingredient":{
          item:"mekanism:sps_casing"
      }
  },
  "gasInput": {
      amount:1000,
      gas:"mekanism:antimatter"
  },
  "output": {
      item:"mekanism:super_sps_casing"
  },
  "duration": 1000
})
e.recipes.minecraft.crafting_shaped(
  "mekanism:super_sps",
  [
    " A ",
    "ABA",
    " A "
  ],
  {
    A:"mekanism:super_sps_casing",
    B:"mekanism_extras:infinite_control_circuit"
  }
)
e.recipes.minecraft.crafting_shaped(
  "mekanism:super_sps_energy_input",
  [
    " A ",
    "ABA",
    " A "
  ],
  {
    A:"mekanism:super_sps_casing",
    B:"mekanism:ultimate_control_circuit"
  }
)
e.recipes.minecraft.crafting_shaped(
  "mekanism:super_sps_output",
  [
    " A ",
    "ABA",
    " A "
  ],
  {
    A:"mekanism:super_sps_casing",
    B:"mekanism_extras:infinite_chemical_tank"
  }
)
e.recipes.minecraft.crafting_shaped(
  "mekanism:super_sps_input",
  [
    " A ",
    "ABA",
    " A "
  ],
  {
    A:"mekanism:super_sps_casing",
    B:"mekanism_extras:infinite_fluid_tank"
  }
)
if (isNormalMode){
e.recipes.mekanism.chemical_infusing(
  {
    gas:'mekanism_plus:neutron_enriched_gas',
    amount: 1
  },
  {
    gas:"mekanism:lithium",
    amount: 10
  },
  {
    gas:"mekanismgenerators:deuterium",
    amount: 10
  }
)
e.custom({
  "type": "mekanism:activating",
  "input": {
    gas:'mekanism_plus:neutron_enriched_gas',
    amount: 1
  },
  "output": {
    gas:"mekanismgenerators:fusion_fuel",
    amount: 1000
  }
})
}
e.replaceInput({
  output:"mekanism:alloy_infused"
},"minecraft:iron_ingot",
"create:andesite_alloy"
)
e.replaceInput({
  output:"mekanism:steel_casing"
},"mekanism:ingot_osmium",
"tfmg:steel_casing"
)
//matter
e.custom({
  "type": "mekanism:centrifuging",
  "input": {
    "gas": "mekanism:antimatter",
    "amount": 100
  },
  "output": {
    "gas": "mekanism_matter:gases_universal_matter",
    "amount": 1
  }
})
e.custom({
  "type": "mekanism:rotary",
  "fluidInput": {
    "fluid": "mekanism_matter:flowing_universal_matter",
    "amount": 1
  },
  "gasOutput": {
    "gas": "mekanism_matter:gases_universal_matter",
    "amount": 1
  },
  "gasInput": {
    "gas": "mekanism_matter:gases_universal_matter",
    "amount": 1
  },
  "fluidOutput": {
    "fluid": "mekanism_matter:flowing_universal_matter",
    "amount": 1
  }
})
//meka suit
e.remove({id: 'mekanism:mekasuit_boots'})
e.remove({id: 'mekanism:mekasuit_pants'})
e.remove({id: 'mekanism:mekasuit_bodyarmor'})
e.remove({id: 'mekanism:mekasuit_helmet'})
e.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": 'projecte:gem_boots'
  },
  "ingredients": [
    Item.of('mekanism:pellet_antimatter'),
    Item.of('mekanism:pellet_antimatter'),
    Item.of('mekanism:pellet_antimatter'),
    Item.of('mekanism:pellet_antimatter'),
    Item.of('mekanism:pellet_antimatter'),
    Item.of('mekanism:teleportation_core'),
    Item.of('mekanism_extras:infinite_control_circuit'),
    Item.of('mekanism_extras:infinite_control_circuit'),
    Item.of('solarpanels:photonic_energy_tablet'),
    Item.of('jaopca:processors.beryllium'),
    Item.of('avaritia:neutron_ingot'),
    Item.of('create:precision_mechanism'),
    Item.of('thermalendergy:endergy_upgrade_3'),
    Item.of('avaritia:crystal_matrix_ingot'),
    Item.of('thermalendergy:vibrating_core'),
    Item.of('pneumaticcraft:module_expansion_card'),
    Item.of('mysticalexpansion:divinium_ingot'),
    Item.of('fluxnetworks:flux_core'),
    Item.of('minecraft:netherite_ingot'),
    Item.of('minecraft:netherite_ingot'),
    Item.of('minecraft:netherite_ingot'),
    Item.of('minecraft:netherite_ingot'),
    Item.of('minecraft:netherite_ingot'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('botania:terrasteel_boots'),
    Item.of('mekanismtools:refined_obsidian_boots')
  ],
  "result": {
    "item": 'mekanism:mekasuit_boots'
  },
  "tier": "CHAOTIC",
  "total_energy": 2147483647
})
e.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": 'projecte:gem_leggings'
  },
  "ingredients": [
    Item.of('mekanism:pellet_antimatter'),
    Item.of('mekanism:pellet_antimatter'),
    Item.of('mekanism:pellet_antimatter'),
    Item.of('mekanism:pellet_antimatter'),
    Item.of('mekanism:pellet_antimatter'),
    Item.of('mekanism:teleportation_core'),
    Item.of('mekanism_extras:infinite_control_circuit'),
    Item.of('mekanism_extras:infinite_control_circuit'),
    Item.of('solarpanels:photonic_energy_tablet'),
    Item.of('jaopca:processors.beryllium'),
    Item.of('avaritia:neutron_ingot'),
    Item.of('create:precision_mechanism'),
    Item.of('thermalendergy:endergy_upgrade_3'),
    Item.of('avaritia:crystal_matrix_ingot'),
    Item.of('thermalendergy:vibrating_core'),
    Item.of('pneumaticcraft:module_expansion_card'),
    Item.of('mysticalexpansion:divinium_ingot'),
    Item.of('fluxnetworks:flux_core'),
    Item.of('minecraft:netherite_ingot'),
    Item.of('minecraft:netherite_ingot'),
    Item.of('minecraft:netherite_ingot'),
    Item.of('minecraft:netherite_ingot'),
    Item.of('minecraft:netherite_ingot'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('botania:terrasteel_leggings'),
    Item.of('mekanismtools:refined_obsidian_leggings')
  ],
  "result": {
    "item": 'mekanism:mekasuit_pants'
  },
  "tier": "CHAOTIC",
  "total_energy": 2147483647
})
e.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": 'projecte:gem_chestplate'
  },
  "ingredients": [
    Item.of('mekanism:pellet_antimatter'),
    Item.of('mekanism:pellet_antimatter'),
    Item.of('mekanism:pellet_antimatter'),
    Item.of('mekanism:pellet_antimatter'),
    Item.of('mekanism:pellet_antimatter'),
    Item.of('mekanism:teleportation_core'),
    Item.of('mekanism_extras:infinite_control_circuit'),
    Item.of('mekanism_extras:infinite_control_circuit'),
    Item.of('solarpanels:photonic_energy_tablet'),
    Item.of('jaopca:processors.beryllium'),
    Item.of('avaritia:neutron_ingot'),
    Item.of('create:precision_mechanism'),
    Item.of('thermalendergy:endergy_upgrade_3'),
    Item.of('avaritia:crystal_matrix_ingot'),
    Item.of('thermalendergy:vibrating_core'),
    Item.of('pneumaticcraft:module_expansion_card'),
    Item.of('mysticalexpansion:divinium_ingot'),
    Item.of('fluxnetworks:flux_core'),
    Item.of('minecraft:netherite_ingot'),
    Item.of('minecraft:netherite_ingot'),
    Item.of('minecraft:netherite_ingot'),
    Item.of('minecraft:netherite_ingot'),
    Item.of('minecraft:netherite_ingot'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('botania:terrasteel_chestplate'),
    Item.of('mekanismtools:refined_obsidian_chestplate')
  ],
  "result": {
    "item": 'mekanism:mekasuit_bodyarmor'
  },
  "tier": "CHAOTIC",
  "total_energy": 2147483647
})
e.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": 'projecte:gem_helmet'
  },
  "ingredients": [
    Item.of('mekanism:pellet_antimatter'),
    Item.of('mekanism:pellet_antimatter'),
    Item.of('mekanism:pellet_antimatter'),
    Item.of('mekanism:pellet_antimatter'),
    Item.of('mekanism:pellet_antimatter'),
    Item.of('mekanism:teleportation_core'),
    Item.of('mekanism_extras:infinite_control_circuit'),
    Item.of('mekanism_extras:infinite_control_circuit'),
    Item.of('solarpanels:photonic_energy_tablet'),
    Item.of('jaopca:processors.beryllium'),
    Item.of('avaritia:neutron_ingot'),
    Item.of('create:precision_mechanism'),
    Item.of('thermalendergy:endergy_upgrade_3'),
    Item.of('avaritia:crystal_matrix_ingot'),
    Item.of('thermalendergy:vibrating_core'),
    Item.of('pneumaticcraft:module_expansion_card'),
    Item.of('mysticalexpansion:divinium_ingot'),
    Item.of('fluxnetworks:flux_core'),
    Item.of('minecraft:netherite_ingot'),
    Item.of('minecraft:netherite_ingot'),
    Item.of('minecraft:netherite_ingot'),
    Item.of('minecraft:netherite_ingot'),
    Item.of('minecraft:netherite_ingot'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('ae2:fluix_pearl'),
    Item.of('botania:terrasteel_helmet'),
    Item.of('mekanismtools:refined_obsidian_helmet')
  ],
  "result": {
    "item": 'mekanism:mekasuit_helmet'
  },
  "tier": "CHAOTIC",
  "total_energy": 2147483647
})
e.custom({
  "type":"mekanismscience:radiation_irradiating",
  "gasInput":
  {
    "amount":4,
    "gas":"mekanism_extras:polonium-208"
  },
  "itemInput":
  {
    "ingredient":
    {
      "item":"mekanismscience:pellet_neutron_source"
    }
  },
  "output":
  {
    "amount":500,
    "chemicalType":"gas",
    "gas":"mekanism:polonium"
  }
})
//fissile fuel line
      //curium
      e.custom({
        "type": "mekanism:activating",
        "input": {
          "gas": "mekanismscience:americium",
          "amount": 1
        },
        "output": {
          "gas": 'mekanism_plus:curium',
          "amount": 1
        }
      })
      e.custom({
        "type":"mekanismscience:radiation_irradiating",
        "gasInput":
        {
          "amount":100,
          "gas":"mekanismscience:americium"
        },
        "itemInput":
        {
          "ingredient":
          {
            "item":"mekanismscience:pellet_neutron_source"
          }
        },
        "output":
        {
          "amount":500,
          "chemicalType":"gas",
          "gas":"mekanism_plus:curium"
        }
      })
      //californium
      e.custom({
        "type": "mekanism:reaction",
        "itemInput": {
          "amount": 1,
          "ingredient": {
            "tag": "forge:dusts/fluorite"
          }
        },
        "fluidInput": {
          "amount": 1000,
          "fluid": "mekanismscience:helium"
        },
        "gasInput": {
          "amount": 1000,
          "gas": 'mekanism_plus:curium'
        },
        "duration": 100,
        "gasOutput": {
          "gas": 'mekanism_plus:californium',
          "amount": 100
        }
      })
      //fissile fuel
      e.custom({
        "type": "mekanism:centrifuging",
        "input": {
          "amount":10,
          "gas": 'mekanism_plus:californium'
        },
        "output": {
          "gas": "mekanism:fissile_fuel",
          "amount": 10000
        }
      })
      
})