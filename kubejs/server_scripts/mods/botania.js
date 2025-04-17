ServerEvents.recipes(e=>{
e.recipes.botania.terra_plate(
  'create:andesite_alloy',
  [
    'minecraft:iron_ingot',
    'minecraft:andesite',
    'minecraft:iron_ingot',
    'minecraft:andesite'
  ],100
)
e.recipes.botania.runic_altar(
  'botanypots:terracotta_botany_pot',
  [
    'botania:manasteel_ingot',
    'botania:manasteel_ingot',
    'botania:manasteel_ingot',
    'botania:manasteel_ingot',
    'minecraft:flower_pot',
    'minecraft:terracotta',
    'minecraft:terracotta',
    'minecraft:terracotta',
  ],50
)
e.remove('botanicalmachinery:alfheim_market')
e.remove('botanicalmachinery:industrial_agglomeration_factory')
e.remove('botanicalmachinery:mechanical_apothecary')
e.remove('botanicalmachinery:mechanical_brewery')
e.remove('botanicalmachinery:mechanical_daisy')
e.remove('botanicalmachinery:mechanical_mana_pool')
e.remove('botanicalmachinery:mechanical_runic_altar')
e.remove('botanicalextramachinery:jaded_amaranthus')
e.remove('botanicalextramachinery:greenhouse')
e.shaped('botanicalmachinery:alfheim_market',["ABA","CDC","AFA"],{"A":'botania:gaia_ingot',"B":'botania:aura_ring_greater',"C":'botania:alfheim_portal',"D":'botania:glimmering_livingwood',"F":`botania:machine_frame`})
e.shaped('botanicalmachinery:industrial_agglomeration_factory',["ABA","CDC","AFA"],{"A":'botania:gaia_ingot',"B":'botania:aura_ring_greater',"C":'botania:livingrock',"D":'botania:terra_plate',"F":`botania:machine_frame`})  
e.shaped('botanicalmachinery:mechanical_apothecary',["ABA","CDC","AFA"],{"A":'botania:gaia_ingot',"B":'botania:aura_ring_greater',"C":'#botania:petals',"D":'botania:apothecary_default',"F":`botania:machine_frame`})
e.shaped('botanicalmachinery:mechanical_brewery',["ABA","CDC","AFA"],{"A":'botania:gaia_ingot',"B":'botania:aura_ring_greater',"C":'botania:flask',"D":'botania:brewery',"F":`botania:machine_frame`})
e.shaped('botanicalmachinery:mechanical_daisy',["ABA","CDC","AFA"],{"A":'botania:gaia_ingot',"B":'botania:aura_ring_greater',"C":'botania:elementium_block',"D":'botania:floating_pure_daisy',"F":`botania:machine_frame`})
e.shaped('botanicalmachinery:mechanical_mana_pool',["ABA","CDE","AFA"],{"A":'botania:gaia_ingot',"B":'botania:aura_ring_greater',"C":'botania:alchemy_catalyst',"D":'botania:fabulous_pool',"E":'botania:conjuration_catalyst',"F":`botania:machine_frame`})
e.shaped('botanicalmachinery:mechanical_runic_altar',["ABA","CDC","AFA"],{"A":'botania:gaia_ingot',"B":'botania:aura_ring_greater',"C":['botania:rune_gluttony','botania:rune_greed','botania:rune_sloth','botania:rune_envy','botania:rune_wrath','botania:rune_lust','botania:rune_pride'],"D":'botania:runic_altar',"F":`botania:machine_frame`})
e.shaped('botanicalextramachinery:jaded_amaranthus',["ABA","BCB","DFD"],{"A":'botania:mana_ring_greater',"B":'botanicalextramachinery:crystal_ingot',"C":'botania:jaded_amaranthus',"D":'botanicalextramachinery:crystal_dragonstone_block',"F":'botania:crystal_machine_frame',})
e.shaped('botanicalextramachinery:greenhouse',["ABA","CDC","EFE"],{"A":'botanicalextramachinery:crimson_ingot',"B":'minecraft:glass',"C":'botanicalextramachinery:crimson_dragonstone',"D":'minecraft:dirt',"E":'botanicalextramachinery:crimson_ingot_block',"F":'botania:crimson_machine_frame'})
global.botaniaTier.forEach(ele=>{
  if(ele.tier == "elementium"){
    let blockname = `botania:machine_frame`
    e.shaped(
      blockname,
      [
        "III",
        "R R",
        "AUA"
      ],
      {
        "A":ele.block,
        "U":ele.unit,
        "R":'jaopca:rods.elementium',
        "I":ele.ingot,
      }
    )
  }else{
    let blockname = `botania:${ele.tier}_machine_frame`
    if(ele.machinetier != "none"){
      e.remove(`botanicalextramachinery:${ele.machinetier}_alfheim_market`)
      e.remove(`botanicalextramachinery:${ele.machinetier}_industrial_agglomeration_factory`)
      e.remove(`botanicalextramachinery:${ele.machinetier}_apothecary`)
      e.remove(`botanicalextramachinery:${ele.machinetier}_daisy`)
      e.remove(`botanicalextramachinery:${ele.machinetier}_mana_pool`)
      e.remove(`botanicalextramachinery:${ele.machinetier}_runic_altar`)
      e.remove(`botanicalextramachinery:${ele.machinetier}_orechid`)
      e.shaped(`botanicalextramachinery:${ele.machinetier}_alfheim_market`,["ABA","CDC","EFE"],{"A":ele.block,"B":ele.ingot,"C":ele.item,"D":'botanicalmachinery:alfheim_market',"E":ele.block,"F":blockname,})
      e.shaped(`botanicalextramachinery:${ele.machinetier}_industrial_agglomeration_factory`,["ABA","CDC","EFE"],{"A":ele.block,"B":ele.ingot,"C":ele.item,"D":'botanicalmachinery:industrial_agglomeration_factory',"E":ele.block,"F":blockname,})
      e.shaped(`botanicalextramachinery:${ele.machinetier}_apothecary`,["ABA","CDC","EFE"],{"A":ele.block,"B":ele.ingot,"C":ele.item,"D":'botanicalmachinery:mechanical_apothecary',"E":ele.block,"F":blockname,})
      e.shaped(`botanicalextramachinery:${ele.machinetier}_daisy`,["ABA","CDC","EFE"],{"A":ele.block,"B":ele.ingot,"C":ele.item,"D":'botanicalmachinery:mechanical_daisy',"E":ele.block,"F":blockname,})
      e.shaped(`botanicalextramachinery:${ele.machinetier}_mana_pool`,["ABA","CDC","EFE"],{"A":ele.block,"B":ele.ingot,"C":ele.item,"D":'botanicalmachinery:mechanical_mana_pool',"E":ele.block,"F":blockname,})
      e.shaped(`botanicalextramachinery:${ele.machinetier}_runic_altar`,["ABA","CDC","EFE"],{"A":ele.block,"B":ele.ingot,"C":ele.item,"D":'botanicalmachinery:mechanical_runic_altar',"E":ele.block,"F":blockname,})
      e.shaped(`botanicalextramachinery:${ele.machinetier}_orechid`,["ABA","CDC","EFE"],{"A":ele.block,"B":ele.ingot,"C":ele.item,"D":'botania:orechid',"E":ele.block,"F":blockname,})
    }
    e.shaped(
      blockname,
      [
        "III",
        "R R",
        "AUA"
      ],
      {
        "A":ele.block,
        "U":ele.unit,
        "R":ele.item,
        "I":ele.ingot,
      }
    )
  }
})
  e.remove({output:"botanicalextramachinery:catalyst_mana_infinity"})
  e.remove({id:/torcherino/})
  const torcherino = [
    {
      "before":"minecraft:torch",
      "torch":"torcherino:torcherino",
      "catalyst":"minecraft:clock"
    },
    {
      "before":'minecraft:carved_pumpkin',
      "torch":'torcherino:lanterino',
      "catalyst":"minecraft:clock"
    },
    {
      "before":'minecraft:lantern',
      "torch":'torcherino:lantern',
      "catalyst":"minecraft:clock"
    }
  ]
  torcherino.forEach(t=>{
    e.recipes.botania.runic_altar(
    t.torch,
    [
      t.before,
      t.catalyst,
      t.catalyst,
      t.catalyst,
      t.catalyst
    ],
    100
  )
})
if(isHardMode){
  e.recipes.botania.elven_trade(
    "botanicalextramachinery:catalyst_mana_infinity",
    'avaritia:infinity_catalyst'
  )
}
if(isNormalMode){
    e.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
          {
            type: "pneumaticcraft:stacked_item",
            count: 64,
            item:"botanicalextramachinery:crimson_spark"
          },
          {
            type: "pneumaticcraft:stacked_item",
            count: 64,
            item:"botanicalextramachinery:crimson_ingot_block"
          },
          {
            item:"botanicalextramachinery:catalyst_pattern"
          }
        ],
        "pressure": 4.0,
        "results": [
          {
            "item": "botanicalextramachinery:catalyst_mana_infinity"
          }
        ]
      })
    }
    e.shaped(
      Item.of('botania:lexicon', '{"botania:elven_unlock":1b}').weakNBT(),
      [
        "A  ",
        " A ",
        "  A"
      ],
      {
        A:'hostilenetworks:alfheim_prediction',
      }
    )
    e.shapeless(
        'botania:ender_air_bottle',
        [
            'minecraft:glass_bottle',
            'hostilenetworks:alfheim_prediction'
        ]
    )
})