ServerEvents.recipes(e=>{
    //{
    //    "type": "thermal_extra:component_assembly",
    //    "energy": 5000,
    //    "ingredients": [
    //      {
    //        "count": 1,
    //        "tag": "forge:ingots/iron"
    //      },
    //      {
    //        "amount": 50,
    //        "fluid": "thermal:redstone"
    //      }
    //    ],
    //    "result": [
    //      {
    //        "chance": 1.0,
    //        "item": "thermal:redstone_servo"
    //      }
    //    ]
    //}
    e.custom({
      "type": "thermal_extra:component_assembly",
      "energy": 5000,
      "ingredients": [
        {
          "count": 1,
          "item": 'ae2:silicon'
        },
        {
          "count": 1,
          "item": 'ae2:sky_dust'
        },
      ],
      "result": [
        {
          "chance": 1.0,
          "item": 'ae2:printed_silicon'
        }
      ]
    })
    e.custom({
      "type": "thermal_extra:component_assembly",
      "energy": 5000,
      "ingredients": [
        {
          "count": 1,
          "item": 'minecraft:gold_ingot'
        },
        {
          "count": 1,
          "item": 'ae2:sky_dust'
        },
      ],
      "result": [
        {
          "chance": 1.0,
          "item": 'ae2:printed_logic_processor'
        }
      ]
    })
    e.custom({
      "type": "thermal_extra:component_assembly",
      "energy": 5000,
      "ingredients": [
        {
          "count": 1,
          "item": 'minecraft:diamond'
        },
        {
          "count": 1,
          "item": 'ae2:sky_dust'
        },
      ],
      "result": [
        {
          "chance": 1.0,
          "item": 'ae2:printed_engineering_processor'
        }
      ]
    })
    e.custom({
      "type": "thermal_extra:component_assembly",
      "energy": 5000,
      "ingredients": [
        {
          "count": 1,
          "item": 'ae2:certus_quartz_crystal'
        },
        {
          "count": 1,
          "item": 'ae2:sky_dust'
        },
      ],
      "result": [
        {
          "chance": 1.0,
          "item": 'ae2:printed_calculation_processor'
        }
      ]
    })
    e.custom({
      "type": "thermal_extra:component_assembly",
      "energy": 5000,
      "ingredients": [
        {
          "count": 1,
          "item": 'ae2:printed_engineering_processor'
        },
        {
          "count": 1,
          "item": 'ae2:printed_silicon'
        },
        {
          "amount": 50,
          "fluid": "thermal:redstone"
        }
      ],
      "result": [
        {
          "chance": 1.0,
          "item": 'ae2:engineering_processor'
        }
      ]
    })
    e.custom({
        "type": "thermal_extra:component_assembly",
        "energy": 5000,
        "ingredients": [
          {
            "count": 1,
            "item": 'ae2:printed_calculation_processor'
          },
          {
            "count": 1,
            "item": 'ae2:printed_silicon'
          },
          {
            "amount": 50,
            "fluid": "thermal:redstone"
          }
        ],
        "result": [
          {
            "chance": 1.0,
            "item": 'ae2:calculation_processor'
          }
        ]
    })
    e.custom({
        "type": "thermal_extra:component_assembly",
        "energy": 5000,
        "ingredients": [
          {
            "count": 1,
            "item": 'ae2:printed_logic_processor'
          },
          {
            "count": 1,
            "item": 'ae2:printed_silicon'
          },
          {
            "amount": 50,
            "fluid": "thermal:redstone"
          }
        ],
        "result": [
          {
            "chance": 1.0,
            "item": 'ae2:logic_processor'
          }
        ]
    })
})