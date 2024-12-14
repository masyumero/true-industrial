ServerEvents.recipes(e=>{
  e.recipes.extendedcrafting.shapeless_table(
    'mekanism_plus:creative_ingot',
    [
      'extendedcrafting:enhanced_redstone_ingot',
      'techreborn:iridium_alloy_ingot',
      'megacells:sky_steel_ingot',
      'advanced_ae:quantum_alloy',
      'twilightforest:fiery_ingot',
      'thermalendergy:stellarium_ingot',
      'powah:steel_energized',
      'draconicevolution:awakened_draconium_ingot',
      'mekanism_extras:ingot_naquadah',
      'nuclearcraft:potassium_ingot',
      'nuclearcraft:lithium_manganese_dioxide_ingot',
      'nuclearcraft:extreme_ingot',
      'vintageimprovements:vanadium_ingot',
      'mekanism:ingot_refined_glowstone',
      'electrodynamics:ingotsuperconductive',
      'thermal:rose_gold_ingot',
      'pneumaticcraft:ingot_iron_compressed',
      "trueindustrial:cosmilite"
    ]
  )
  e.recipes.minecraft.crafting_shaped(
    'solarpanels:creative_energy_tablet',
    [
      "ABA",
      "DCD",
      "ABA"
    ],
    {
      A:"mekanism_extras:infinite_control_circuit",
      B:"mekanism_extras:alloy_spectrum",
      C:'solarpanels:photonic_energy_tablet',
      D:"mekanismscience:pellet_neutron_source"
    }
  )
  e.recipes.minecraft.crafting_shaped(
    'solarpanels:creative_solar_element',
    [
      "AAA",
      "BBB",
      "CCC"
    ],
    {
      A:'mekanism_plus:creative_ingot',
      B:'solarpanels:photonic_solar_element',
      C:'mysticalagradditions:creative_essence'
    }
  )
  if(isNormalMode){
  e.recipes.minecraft.crafting_shaped(
    "solarpanels:creative_solar_panel",
    [
      "AAA",
      "BCB",
      "DED"
    ],
    {
      A:'solarpanels:creative_solar_element',
      B:'mekanism_plus:creative_ingot',
      C:'solarpanels:photonic_solar_panel',
      D:'draconicevolution:reactor_core',
      E:'solarpanels:creative_energy_tablet'
    }
  )
  }
  if(isHardMode){
    e.recipes.extendedcrafting.shaped_table(
      "solarpanels:creative_solar_panel",
      [
        "AAAAA",
        "BBCBB",
        "BCCCB",
        "BBCBB",
        "DEEED"
      ],
      {
        A:'solarpanels:creative_solar_element',
        B:'mekanism_plus:creative_ingot',
        C:'solarpanels:photonic_solar_panel',
        D:'draconicevolution:reactor_core',
        E:'solarpanels:creative_energy_tablet'
      }
    )
  }
  e.recipes.minecraft.crafting_shaped(
      "mekanism_lasers:creative_toggleable_laser",
      [
        ' R ',
        'RNR',
        ' R '
      ],{
        R: "redstone",
        N: "mekanism_lasers:creative_laser"
      }
    )
  e.recipes.extendedcrafting.shaped_table(
      "mekanism_lasers:creative_laser",
      [
  'ABCDDEDDCBA',
  'BFFGGHGGIIB',
  'CFJKKKKKJIC',
  'DGKLMMMLKGD',
  'DGKMNONMKGD',
  'EHKMOPOMKHE',
  'DGKMNONMKGD',
  'DGKLMMMLKGD',
  'CIJKKKKKJFC',
  'BIIGGHGGFFB',
  'ABCDDEDDCBA'
],
  {
  A:{item:'trueindustrial:not_matter'},
  B:{item:'thermal_extra:twinite_glass'},
  C:{item:'mekanismadditions:red_glow_panel'},
  D:{item:'mekanism:pellet_antimatter'},
  E:{item:'mekanism_extras:lead_coated_laser_focus_matrix'},
  F:{item:'mekanism_extras:infinite_induction_provider'},
  G:{item:'mekanismscience:pellet_neutron_source'},
  H:{item:'nuclearcraft:californium_252'},
  I:{item:'mekanism_extras:infinite_induction_cell'},
  J:{item:'mekanism_extras:alloy_spectrum'},
  K:{item:'extendedcrafting:nether_star_block'},
  L:'createaddition:electric_motor',
  M:{item:'mekanism_extras:naquadah_reactor_casing'},
  N:{item:'mekanism:supercharged_coil'},
  O:{item:'mekanism_extras:infinite_control_circuit'},
  P:{item:'mekanism_lasers:ultimate_laser'}
  }
)

  e.recipes.extendedcrafting.shaped_table(
    "mekanism:creative_chemical_tank",
    [
      "ABBCCDCCBBA",
      "BEFGGGGGFEB",
      "BFGHIJIHGFB",
      "CGHKLMLKHGC",
      "CGILNONLIGC",
      "DGJMOPOMJGD",
      "CGILNONLIGC",
      "CGHKLMLKHGC",
      "BFGHIJIHGFB",
      "BEFGGGGGFEB",
      "ABBCCDCCBBA"
    ],
    {
      A:{item:"projectexpansion:fading_matter"},
      B:{item:"rftoolsdim:legendary_essence"},
      C:{item:"rftoolsbase:dimensionalshard"},
      D:{item:"thermalendergy:stellarium_ingot"},
      E:{item:"jaopca:plates.blutonium"},
      F:{item:"jaopca:processors.magnesium_diboride"},
      G:{item:"mysticalagradditions:creative_essence"},
      H:{item:"mekanism:pellet_antimatter"},
      I:{item:"jaopca:processors.osmium"},
      J:{item:"avaritia:endest_pearl"},
      K:{item:"mekanismscience:pellet_neutron_source"},
      L:{item:"mekanism_extras:infinite_control_circuit"},
      M:Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:philosophes_stone"}').weakNBT(),
      N:{item:"draconicevolution:chaotic_core"},
      O:{item:"draconicevolution:dragon_heart"},
      P:{item:"mekanism_extras:infinite_chemical_tank"}
    }
  )
  e.recipes.extendedcrafting.shaped_table(
    'mekanism:creative_energy_cube',
    [
      "ABBCCDCCBBA",
      "BEFGGGGGFEB",
      "BFGHIJIHGFB",
      "CGHKLMLKHGC",
      "CGILNONLIGC",
      "DGJMOPOMJGD",
      "CGILNONLIGC",
      "CGHKLMLKHGC",
      "BFGHIJIHGFB",
      "BEFGGGGGFEB",
      "ABBCCDCCBBA"
    ],
    {
      A:{item:"projectexpansion:fading_matter"},
      B:{item:"rftoolsdim:legendary_essence"},
      C:{item:"rftoolsbase:dimensionalshard"},
      D:{item:"thermalendergy:stellarium_ingot"},
      E:{item:"jaopca:plates.blutonium"},
      F:{item:"jaopca:processors.magnesium_diboride"},
      G:{item:"mysticalagradditions:creative_essence"},
      H:{item:"mekanism:pellet_antimatter"},
      I:{item:"jaopca:processors.osmium"},
      J:{item:"avaritia:endest_pearl"},
      K:{item:"mekanismscience:pellet_neutron_source"},
      L:{item:"mekanism_extras:infinite_control_circuit"},
      M:Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:philosophes_stone"}').weakNBT(),
      N:{item:"draconicevolution:chaotic_core"},
      O:{item:"draconicevolution:dragon_heart"},
      P:{item:'mekanism_extras:infinite_energy_cube'}
    }
  )
  e.recipes.extendedcrafting.shaped_table(
    'mekanism:creative_fluid_tank',
    [
      "ABBCCDCCBBA",
      "BEFGGGGGFEB",
      "BFGHIJIHGFB",
      "CGHKLMLKHGC",
      "CGILNONLIGC",
      "DGJMOPOMJGD",
      "CGILNONLIGC",
      "CGHKLMLKHGC",
      "BFGHIJIHGFB",
      "BEFGGGGGFEB",
      "ABBCCDCCBBA"
    ],
    {
      A:{item:"projectexpansion:fading_matter"},
      B:{item:"rftoolsdim:legendary_essence"},
      C:{item:"rftoolsbase:dimensionalshard"},
      D:{item:"thermalendergy:stellarium_ingot"},
      E:{item:"jaopca:plates.blutonium"},
      F:{item:"jaopca:processors.magnesium_diboride"},
      G:{item:"mysticalagradditions:creative_essence"},
      H:{item:"mekanism:pellet_antimatter"},
      I:{item:"jaopca:processors.osmium"},
      J:{item:"avaritia:endest_pearl"},
      K:{item:"mekanismscience:pellet_neutron_source"},
      L:{item:"mekanism_extras:infinite_control_circuit"},
      M:Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:philosophes_stone"}').weakNBT(),
      N:{item:"draconicevolution:chaotic_core"},
      O:{item:"draconicevolution:dragon_heart"},
      P:{item:'mekanism_extras:infinite_fluid_tank'}
    }
  )
//  e.recipes.extendedcrafting.shaped_table(
//    'mekanism:creative_bin',
//    [
//      "ABBCCDCCBBA",
//      "BEFGGGGGFEB",
//      "BFGHIJIHGFB",
//      "CGHKLMLKHGC",
//      "CGILNONLIGC",
//      "DGJMOPOMJGD",
//      "CGILNONLIGC",
//      "CGHKLMLKHGC",
//      "BFGHIJIHGFB",
//      "BEFGGGGGFEB",
//      "ABBCCDCCBBA"
//    ],
//    {
//      A:{item:"projectexpansion:fading_matter"},
//      B:{item:"rftoolsdim:legendary_essence"},
//      C:{item:"rftoolsbase:dimensionalshard"},
//      D:{item:"thermalendergy:stellarium_ingot"},
//      E:{item:"jaopca:plates.blutonium"},
//      F:{item:"jaopca:processors.magnesium_diboride"},
//      G:{item:"mysticalagradditions:creative_essence"},
//      H:{item:"mekanism:pellet_antimatter"},
//      I:{item:"jaopca:processors.osmium"},
//      J:{item:"avaritia:endest_pearl"},
//      K:{item:"mekanismscience:pellet_neutron_source"},
//      L:{item:"mekanism_extras:infinite_control_circuit"},
//      M:Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:philosophes_stone"}').weakNBT(),
//      N:{item:"draconicevolution:chaotic_core"},
//      O:{item:"draconicevolution:dragon_heart"},
//      P:{item:'mekanism_extras:infinite_bin'}
//    }
//  )
  e.recipes.extendedcrafting.shaped_table(
    "create:creative_motor",
    [
      "ABBCCDCCBBA",
      "BEFGGGGGFEB",
      "BFGHIJIHGFB",
      "CGHKLMLKHGC",
      "CGILNONLIGC",
      "DGJMOPOMJGD",
      "CGILNONLIGC",
      "CGHKLMLKHGC",
      "BFGHIJIHGFB",
      "BEFGGGGGFEB",
      "ABBCCDCCBBA"
    ],
    {
      A:{item:"projectexpansion:fading_matter"},
      B:{item:"rftoolsdim:legendary_essence"},
      C:{item:"rftoolsbase:dimensionalshard"},
      D:{item:"thermalendergy:stellarium_ingot"},
      E:{item:"jaopca:plates.blutonium"},
      F:{item:"jaopca:processors.magnesium_diboride"},
      G:{item:"mysticalagradditions:creative_essence"},
      H:{item:"mekanism:pellet_antimatter"},
      I:{item:"jaopca:processors.osmium"},
      J:{item:"avaritia:endest_pearl"},
      K:{item:"mekanismscience:pellet_neutron_source"},
      L:{item:"mekanism_extras:infinite_control_circuit"},
      M:Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:philosophes_stone"}').weakNBT(),
      N:{item:"draconicevolution:chaotic_core"},
      O:{item:"draconicevolution:dragon_heart"},
      P:{item:"createaddition:electric_motor"}
    }
  )
  e.recipes.extendedcrafting.shaped_table(
    "botanicalmachinery:mana_battery_creative",
    [
      "ABBCCDCCBBA",
      "BEFGGGGGFEB",
      "BFGHIJIHGFB",
      "CGHKLMLKHGC",
      "CGILNONLIGC",
      "DGJMOPOMJGD",
      "CGILNONLIGC",
      "CGHKLMLKHGC",
      "BFGHIJIHGFB",
      "BEFGGGGGFEB",
      "ABBCCDCCBBA"
    ],
    {
      A:{item:"projectexpansion:fading_matter"},
      B:{item:"rftoolsdim:legendary_essence"},
      C:{item:"rftoolsbase:dimensionalshard"},
      D:{item:"thermalendergy:stellarium_ingot"},
      E:{item:"jaopca:plates.blutonium"},
      F:{item:"jaopca:processors.magnesium_diboride"},
      G:{item:"mysticalagradditions:creative_essence"},
      H:{item:"mekanism:pellet_antimatter"},
      I:{item:"jaopca:processors.osmium"},
      J:{item:"avaritia:endest_pearl"},
      K:{item:"mekanismscience:pellet_neutron_source"},
      L:{item:"mekanism_extras:infinite_control_circuit"},
      M:Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:philosophes_stone"}').weakNBT(),
      N:{item:"draconicevolution:chaotic_core"},
      O:{item:"draconicevolution:dragon_heart"},
      P:{item:"botanicalmachinery:mana_battery"}
    }
  )
})

