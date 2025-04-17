ServerEvents.recipes(e=>{
e.replaceInput({output:'projectexpansion:compact_sun',type:"minecraft:crafting_shaped"},'projectexpansion:final_star','botania:sunny_quartz')
if (isNormalMode){
e.recipes.mekanism.compressing(
  "projecte:philosophers_stone",
  Item.of("projecte:philosophers_stone_nugget",16),
  {
    amount:1,
    gas:"draconicevolution:chaos",
  }
)
e.recipes.vintageimprovements.hammering(
  Item.of("projecte:philosophers_stone_nugget",16),
  "projecte:philosophers_stone",
  10,
  "projectexpansion:fading_matter_block"
)
}
e.replaceInput(
  {input:"projecte:philosophers_stone"},
  "projecte:philosophers_stone",
  Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:philosophersstone"}').weakNBT()
)
e.replaceInput(
  {output:"projecte:klein_star_ein"},
  "projecte:mobius_fuel",
  "rftoolsdim:legendary_essence"
)
e.recipes.minecraft.crafting_shaped(
    'projecte:transmutation_chamber_casing',
    [
      "ABA",
      "BCB",
      "ABA"
    ],
    {
      A:{"item":"avaritia:infinity_block"},
      B:{"item":'avaritia:Infinity_Replicator_Casing'},
      C:{"item":"mekanism_extras:infinite_control_circuit"}
    }
  )
e.recipes.minecraft.crafting_shaped(
  'projecte:transmutation_chamber_input',
  [
    " B ",
    "BCB",
    " B "
  ],
  {
    B:{"item":'projecte:transmutation_chamber_casing'},
    C:{"item":"ae2:import_bus"}
  }
)
e.recipes.minecraft.crafting_shaped(
  'projecte:transmutation_chamber_output',
  [
    " B ",
    "BCB",
    " B "
  ],
  {
    B:{"item":'projecte:transmutation_chamber_casing'},
    C:{"item":"ae2:export_bus"}
  }
)
e.recipes.minecraft.crafting_shaped(
  'projecte:transmutation_chamber_controller',
  [
    " B ",
    "BCB",
    " B "
  ],
  {
    B:{"item":'projecte:transmutation_chamber_casing'},
    C:{"item":"mekanism_extras:naquadah_reactor_controller"}
  }
)
e.remove({output:"projecte:philosophers_stone"})
e.replaceInput(
    {output:'projecte:collector_mk1'},
    "minecraft:diamond_block",
    "projecte:dark_matter_block"
)
e.replaceInput(
    {output:'projecte:dark_matter'},
    'projecte:aeternalis_fuel',
    "mekanism:pellet_antimatter"
)
e.remove({id:"projecte:condenser_mk1"})
if(isHardMode){
e.recipes.extendedcrafting.shaped_table(
    "projecte:condenser_mk1",
    [
        "AAAAA",
        "ABCBA",
        "ACDCA",
        "ABCBA",
        "AAAAA"
    ],
    {
        A:{item:'mekanism_extras:naquadah_reactor_casing'},
        B:{item:'projectexpansion:magnum_star_omega'},
        C:{item:'projectexpansion:final_relay'},
        D:{item:'projecte:alchemical_chest'}
    }
)
}
    let inter = "projecte:incomplete_philosophers_stone"
    e.recipes.create.sequenced_assembly([
        "projecte:philosophers_stone"
    ],
    "mekanism_plus:creative_ingot",
    [
    e.recipes.create.deploying(inter,[inter, "botania:dice"]),
    e.recipes.create.deploying(inter,[inter, 'avaritia:infinity']),
    e.recipes.create.deploying(inter,[inter, "powah:nitro_crystal_block"]),
    e.recipes.create.deploying(inter,[inter, "powah:steel_energized"]),
    e.recipes.create.deploying(inter,[inter, "mekanism_extras:infinite_control_circuit"]),
    e.recipes.create.deploying(inter,[inter, "projectexpansion:gargantuan_star_omega"]),
    e.recipes.create.deploying(inter,[inter, "quarryplus:adv_quarry"]),
    e.recipes.create.deploying(inter,[inter, "extendedcrafting:luminessence"]),
    e.recipes.create.deploying(inter,[inter, "thermal_extra:amethyst_dust"]),
    e.recipes.create.deploying(inter,[inter, "botanicalmachinery:mana_emerald"]),
    e.recipes.create.deploying(inter,[inter, "mekanism_extras:enriched_spectrum"]),
    e.recipes.create.deploying(inter,[inter, "ad_astra_rocketed:tier_7_rocket"]),
    e.recipes.create.deploying(inter,[inter, "thermal_more:mega_upgrade_augment"]),
    e.recipes.create.deploying(inter,[inter, "draconicevolution:awakened_draconium_block"]),
    e.recipes.create.deploying(inter,[inter, "draconicevolution:chaos_shard"]),
    e.recipes.create.deploying(inter,[inter, "mekanismscience:pellet_neutron_source"]),
    e.recipes.create.deploying(inter,[inter, 'mysticalagriculture:awakening_pedestal']),
    e.recipes.create.deploying(inter,[inter, 'mysticalagriculture:awakening_altar']),
    e.recipes.create.deploying(inter,[inter, Item.of('botania:lexicon', '{"botania:elven_unlock":1b}').weakNBT()]),
    e.recipes.create.deploying(inter,[inter, Item.of('patchouli:guide_book', '{"patchouli:book":"extendedcrafting:guide"}').weakNBT()]),
    e.recipes.create.deploying(inter,[inter, Item.of('patchouli:guide_book', '{"patchouli:book":"pneumaticcraft:book"}').weakNBT()]),
    e.recipes.create.deploying(inter,[inter, Item.of('patchouli:guide_book', '{"patchouli:book":"thermal:guidebook"}').weakNBT()]),
    e.recipes.create.deploying(inter,[inter, Item.of('patchouli:guide_book', '{"patchouli:book":"alchemistry:alchemistry_book"}').weakNBT()]),
    e.recipes.create.deploying(inter,[inter, 'projectexpansion:knowledge_sharing_book']),
    e.recipes.create.deploying(inter,[inter, Item.of('patchouli:guide_book', '{"patchouli:book":"bigreactors:erguide"}').weakNBT()]),
    e.recipes.create.deploying(inter,[inter, Item.of('patchouli:guide_book', '{"patchouli:book":"cyclic:guide_book"}').weakNBT()]),
    e.recipes.create.deploying(inter,[inter, Item.of('patchouli:guide_book', '{"patchouli:book":"ad_astra:astrodux"}').weakNBT()]),
    e.recipes.create.deploying(inter,[inter, Item.of('patchouli:guide_book', '{"patchouli:book":"industrialforegoing:industrial_foregoing"}').weakNBT()]),
    e.recipes.create.deploying(inter,[inter, Item.of('patchouli:guide_book', '{"patchouli:book":"mysticalagriculture:guide"}').weakNBT()]),
    e.recipes.create.deploying(inter,[inter, 'cobblefordays:tier_5']),
    e.recipes.create.deploying(inter,[inter, 'minecraft:dragon_egg']),
    e.recipes.create.deploying(inter,[inter, 'compactmekanismmachines:compressed_wind_generator_x532480']),
    e.recipes.create.deploying(inter,[inter, 'createdieselgenerators:huge_diesel_engine']),
    e.recipes.create.deploying(inter,[inter, 'create_new_age:corium']),
    e.recipes.create.deploying(inter,[inter, 'create_new_age:nuclear_fuel']),
    e.recipes.create.deploying(inter,[inter, 'industrialforegoing:pink_slime_ingot']),
    e.recipes.create.deploying(inter,[inter, 'botania:gaia_ingot']),
    e.recipes.create.deploying(inter,[inter, 'mysticalagriculture:awakened_supremium_ingot']),
    e.recipes.create.deploying(inter,[inter, 'mekanismexplosives:explosive_antimatter']),
    e.recipes.create.deploying(inter,[inter, 'thermal_extra:abyssal_ingot']),
    e.recipes.create.deploying(inter,[inter, 'ironjetpacks:ultimate_coil']),
    e.recipes.create.deploying(inter,[inter, 'pneumaticcraft:plastic']),
    e.recipes.create.deploying(inter,[inter, 'pneumaticcraft:salmon_tempura']),
    e.recipes.create.deploying(inter,[inter, 'ad_extendra:juperium_ingot']),
    e.recipes.create.deploying(inter,[inter, 'vintageimprovements:redstone_module']),
    e.recipes.create.deploying(inter,[inter, 'nuclearcraft:depleted_fuel_californium_hecf_249_za']),
    e.recipes.create.deploying(inter,[inter, 'draconicadditions:chaos_heart'])
    ])
    .transitionalItem(inter)
    .loops(1024)

})
