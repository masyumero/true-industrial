ServerEvents.recipes(e=>{
e.recipes.mekanism.metallurgic_infusing(
  'trueindustrial:cosmilite',
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
//e.recipes.mekanism.crystallizing(
//  "gas",
//  'techreborn:uu_matter',
//  {
//    gas:"mekanism_matter:gases_universal_matter",
//    amount:1000
//  }
//)
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
    Item.of('avaritia:neutronium_ingot'),
    Item.of('vintageimprovements:fiery_sheet'),
    Item.of('create:precision_mechanism'),
    Item.of('thermalendergy:endergy_upgrade_3'),
    Item.of('avaritia:crystal_matrix_ingot'),
    Item.of('thermalendergy:vibrating_core'),
    Item.of('pneumaticcraft:module_expansion_card'),
    Item.of('mysticalexpansion:divinium_ingot'),
    Item.of('fluxnetworks:flux_core'),
    Item.of('electrodynamics:wiresuperconductive'),
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
    Item.of('avaritia:neutronium_ingot'),
    Item.of('vintageimprovements:fiery_sheet'),
    Item.of('create:precision_mechanism'),
    Item.of('thermalendergy:endergy_upgrade_3'),
    Item.of('avaritia:crystal_matrix_ingot'),
    Item.of('thermalendergy:vibrating_core'),
    Item.of('pneumaticcraft:module_expansion_card'),
    Item.of('mysticalexpansion:divinium_ingot'),
    Item.of('fluxnetworks:flux_core'),
    Item.of('electrodynamics:wiresuperconductive'),
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
    Item.of('avaritia:neutronium_ingot'),
    Item.of('vintageimprovements:fiery_sheet'),
    Item.of('create:precision_mechanism'),
    Item.of('thermalendergy:endergy_upgrade_3'),
    Item.of('avaritia:crystal_matrix_ingot'),
    Item.of('thermalendergy:vibrating_core'),
    Item.of('pneumaticcraft:module_expansion_card'),
    Item.of('mysticalexpansion:divinium_ingot'),
    Item.of('fluxnetworks:flux_core'),
    Item.of('electrodynamics:wiresuperconductive'),
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
    Item.of('avaritia:neutronium_ingot'),
    Item.of('vintageimprovements:fiery_sheet'),
    Item.of('create:precision_mechanism'),
    Item.of('thermalendergy:endergy_upgrade_3'),
    Item.of('avaritia:crystal_matrix_ingot'),
    Item.of('thermalendergy:vibrating_core'),
    Item.of('pneumaticcraft:module_expansion_card'),
    Item.of('mysticalexpansion:divinium_ingot'),
    Item.of('fluxnetworks:flux_core'),
    Item.of('electrodynamics:wiresuperconductive'),
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
        "type":"mekanism:reaction",
        "duration":5,
        "energyRequired":1000,
        "fluidInput":
        {
          "amount":100,
          "fluid":"minecraft:water"
        },
        "gasInput":
        {
          "amount":100,
          "gas":"mekanism_extras:polonium-208"
        },
        "gasOutput":
        {
          "amount":5000,
          "gas":"mekanism:polonium"
        },
        "itemInput":
        {
          "ingredient":
          {
            "item":"mekanismscience:pellet_neutron_source"
          }
        },
        "itemOutput":
        {
          "item":"thermal:steel_dust"
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
        "type":"mekanism:reaction",
        "duration":5,
        "energyRequired":1000,
        "fluidInput":
        {
          "amount":100,
          "fluid":"minecraft:water"
        },
        "gasInput":
        {
          "amount":100,
          "gas":"mekanismscience:americium"
        },
        "gasOutput":
        {
          "amount":500,
          "gas":'mekanism_plus:curium'
        },
        "itemInput":
        {
          "ingredient":
          {
            "item":"mekanismscience:pellet_neutron_source"
          }
        },
        "itemOutput":
        {
          "item":"thermal:steel_dust"
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