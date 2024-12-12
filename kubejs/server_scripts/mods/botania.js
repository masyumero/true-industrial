ServerEvents.recipes(e=>{
if(isNormalMode){
    e.remove({output:"botanicalextramachinery:catalyst_mana_infinity"})
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
    e.shapeless(
        Item.of('botania:lexicon', '{"botania:elven_unlock":1b}'),
        [
            'botania:lexicon',
            'hostilenetworks:alfheim_prediction'
        ]
    )
    e.shapeless(
        'botania:ender_air_bottle',
        [
            'minecraft:glass_bottle',
            'hostilenetworks:alfheim_prediction'
        ]
    )
})