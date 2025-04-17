ServerEvents.recipes(e=>{
e.recipes.create.compacting(
  "thermal:enderium_ingot",[Fluid.of("thermal:redstone",500),Item.of("thermal:enderium_dust",2)]
).superheated()
e.recipes.create.compacting(
  "mekanism:alloy_infused",[Fluid.of("thermal:redstone"),Item.of("create:andesite_alloy",2)]
).superheated()
e.remove({id:"tfmg:mechanical_crafting/generator"})
e.remove({id:"createaddition:mechanical_crafting/alternator"})
e.remove({id:"steampowered:alternator"})
e.remove({id:"create_new_age:shaped/carbon_brushes"})
e.shaped(
  'create_new_age:carbon_brushes',
  [
    "AAA",
    "BCB",
    "AAA"
  ],
  {
    "A": {
      "item": "tfmg:stator"
    },
    "B": {
      "item": "minecraft:copper_ingot"
    },
    "C": {
      "item": "create:shaft"
    }
  },
)
e.remove({id:"create_new_age:shaped/generator_coil"})
e.recipes.create.mechanical_crafting(
  'create_new_age:generator_coil',
  [
    " AAAAA ",
    "AABBBAA",
    "ABBCBBA",
    "ABCDCBA",
    "ABBCBBA",
    "AABBBAA",
    " AAAAA "
  ],
  {
    "A":"minecraft:copper_ingot",
    "B":"create:andesite_alloy_block",
    "C":"create_new_age:overcharged_diamond",
    "D":"tfmg:rotor"
  }
)
e.remove({id:"create_connected:sequenced_assembly/control_chip"})
e.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "create:golden_sheet"
  },
  "loops": 3,
  "results": [
    {
      "chance": 120.0,
      "item": "create_connected:control_chip"
    },
    {
      "chance": 8.0,
      "item": "minecraft:redstone"
    },
    {
      "chance": 8.0,
      "item": "create:electron_tube"
    },
    {
      "chance": 5.0,
      "item": "create:golden_sheet"
    },
    {
      "chance": 3.0,
      "item": "minecraft:gold_nugget"
    },
    {
      "chance": 2.0,
      "item": "create:iron_sheet"
    },
    {
      "chance": 2.0,
      "item": "create:crushed_raw_gold"
    },
    {
      "item": "minecraft:quartz"
    },
    {
      "item": "minecraft:compass"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create_connected:incomplete_control_chip"
        },
        {
          "item": "create:electron_tube"
        }
      ],
      "results": [
        {
          "item": "create_connected:incomplete_control_chip"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create_connected:incomplete_control_chip"
        },
        {
          "item": "minecraft:redstone"
        }
      ],
      "results": [
        {
          "item": "create_connected:incomplete_control_chip"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "create_connected:incomplete_control_chip"
        }
      ],
      "results": [
        {
          "item": "create_connected:incomplete_control_chip"
        }
      ]
    },
    {
      "type": "create_optical:focusing",
      "ingredients": [
        {
          "item": "create_optical:incomplete_rose_quartz_catalyst_coil"
        }
      ],
      "processingTime": 40,
      "required_beam_type": 3,
      "results": [
        {
          "item": "create_optical:incomplete_rose_quartz_catalyst_coil"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "create_connected:incomplete_control_chip"
  }
})
e.recipes.create.mixing(
  'create:andesite_alloy',
  [Fluid.of("create_wt:molten_iron",200),Item.of('minecraft:andesite',2)]
).heated()
e.shaped(
  'create:blaze_burner',
  [
    "   ",
    "ABA",
    "CDC"
  ],
  {
    "A":'botania:blaze_block',
    "B":'minecraft:blaze_powder',
    "C":'mysticalagriculture:blaze_essence',
    "D":'create:empty_blaze_burner'
  }
)
//andesite_alloy
e.remove({id:"create:mixing/andesite_alloy"})
e.remove({id:"create:mixing/andesite_alloy_from_zinc"})
e.remove({id:"create:crafting/materials/andesite_alloy"})
e.remove({id:"create:crafting/materials/andesite_alloy_from_zinc"})
e.recipes.botania.terra_plate("create:andesite_alloy",["minecraft:andesite","minecraft:andesite","minecraft:iron_ingot","minecraft:iron_ingot"])
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
          "item": 'minecraft:phantom_membrane'
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