ServerEvents.recipes(e=>{
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

