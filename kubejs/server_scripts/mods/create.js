ServerEvents.recipes(e=>{
//elytra
    e.recipes.create.mixing(
        [{
            "fluid":'mekanism:elytra',
            "amount":100
        }],
        "minecraft:elytra",
        10
    ).superheated()
    e.recipes.minecraft.stonecutting(
        "create_wt:elytra_pattern",
        "create_wt:blank_pattern"
    )
    e.custom({
        "type": "create:filling",
        "ingredients": [
          {
            "item": "create_wt:elytra_pattern"
          },
          {
            "fluid": "mekanism:elytra",
            "nbt": {},
            "amount": 100
          }
        ],
        "results": [
          {
            "item": "minecraft:elytra"
          }
        ]
      })
    e.custom({
      "type": "mekanism:reaction",
      "itemInput": {
        "amount": 1,
        "ingredient": {
          "item": 'techreborn:uu_matter'
        }
      },
      "fluidInput": {
        "amount": 10,
        "fluid": "mekanism:elytra"
      },
      "gasInput": {
        "amount": 10,
        "gas": "mekanism_matter:gases_universal_matter"
      },
      "duration": 1000,
      "gasOutput": {
        "gas": 'mekanism:elytra_gas',
        "amount": 100
      }
    })
    e.custom({
      "type":"mekanism:rotary",
      "fluidInput":{
          "amount":1,
          "fluid":"mekanism:elytra"
      },
      "gasOutput":{
          "gas":"mekanism:elytra_gas",
          "amount":1
      },
      "gasInput":{
          "amount":1,
          "gas":"mekanism:elytra_gas"
      },
      "fluidOutput":{
          "fluid":"mekanism:elytra",
          "amount":1
      }
    })
})