ServerEvents.recipes(e=>{
  e.remove({output:"botanicalextramachinery:catalyst_mana_infinity"})
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