ServerEvents.recipes(e=>{
    if(isHardMode){
      e.remove({id:"botania:elven_trade/lexicon_elven"})
      e.recipes.botania.elven_trade(
        'botania:page_scrap',
        'minecraft:paper'
      )
      e.recipes.minecraft.crafting_shapeless(
        Item.of('botania:lexicon', '{"botania:elven_unlock":1b}').weakNBT(),
        [
          'botania:lexicon',
          "8x botania:page_scrap"
        ]
      )
        e.custom({
            "type": "draconicevolution:fusion_crafting",
            "catalyst": {
              "item": 'extendedcrafting:ender_star'
            },
            "ingredients": [
                Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:energyflowchip"}').weakNBT(),
                Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:deshtrumingot"}').weakNBT(),
                Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redmatter"}').weakNBT(),
                Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:alfheimprediction"}').weakNBT(),
                Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:ingotnaquadah"}').weakNBT(),
                Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:diviniumingotblock"}').weakNBT(),
                Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:hyperexperiencebottle"}').weakNBT(),
                Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:reactorcore"}').weakNBT(),
                Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:crimsondragonstoneblock"}').weakNBT(),
                Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:megaupgradeaugment"}').weakNBT(),
                Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:nitrocrystalblock"}').weakNBT(),
                Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:abyssalgear"}').weakNBT(),
            ],
            "result": {
              "item": 'extendedcrafting:ultimate_singularity'
            },
            "tier": "CHAOTIC",
            "total_energy": 2147483647
          }
        )
    }
})
