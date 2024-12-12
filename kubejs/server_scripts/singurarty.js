// priority: 1
ServerEvents.recipes(e=>{
    e.recipes.minecraft.crafting_shaped(
      "avaritia:Infinity_Replicator_Casing",
      [
        "ABA",
        "BCB",
        "ABA"
      ],
      {
        A:{"item":"avaritia:infinity_catalyst"},
        B:{"item":'avaritia:crystal_matrix'},
        C:{"item":"mekanism_extras:infinite_control_circuit"}
      }
    )
    e.recipes.minecraft.crafting_shaped(
      "avaritia:infinity_replicator_input",
      [
        " B ",
        "BCB",
        " B "
      ],
      {
        B:{"item":"avaritia:Infinity_Replicator_Casing"},
        C:{"item":"ae2:import_bus"}
      }
    )
    e.recipes.minecraft.crafting_shaped(
      "avaritia:infinity_replicator_output",
      [
        " B ",
        "BCB",
        " B "
      ],
      {
        B:{"item":"avaritia:Infinity_Replicator_Casing"},
        C:{"item":"ae2:export_bus"}
      }
    )
    e.recipes.minecraft.crafting_shaped(
      "avaritia:infinity_replicator",
      [
        " B ",
        "BCB",
        " B "
      ],
      {
        B:{"item":"avaritia:Infinity_Replicator_Casing"},
        C:{"item":"mekanism_extras:naquadah_reactor_controller"}
      }
    )
    e.remove({ id: 'extendedcrafting:ultimate_singularity' })
    e.remove({ output: "avaritia:infinity_catalyst" })
    e.custom({
      "type": "draconicevolution:fusion_crafting",
      "catalyst": {
        "item": 'extendedcrafting:ultimate_singularity'
      },
      "ingredients": [
        Item.of("avaritia:endest_pearl"),
        Item.of("avaritia:cosmic_meatballs"),
        Item.of("avaritia:record_fragment"),
        Item.of("avaritia:ultimate_stew"),
        Item.of("mekanism_extras:infinite_control_circuit"),
        Item.of("mekanismscience:pellet_neutron_source")
      ],
      "result": {
        "item": "avaritia:infinity_catalyst"
      },
      "tier": "CHAOTIC",
      "total_energy": 2147483647
    })
})

