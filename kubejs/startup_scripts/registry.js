//priority: 1
StartupEvents.registry('item', event => {
if(isNormalMode){
	event
			.create("projecte:philosophers_stone_nugget")
			.texture("kubejs:item/philosophers_stone_nugget")
}
	event	
			.create("enderium_flux_coil")
			.texture("kubejs:item/enderium_flux_coil")
	event
			.create("random_debug")
	event	
			.create("dyson_sphere_casing")
	event	
			.create("dyson_solar_battery")
	event
			.create("dyson_sphere_hatch")
	event
			.create("dyson_sphere_drone")
global.energycompression.forEach(comp=>{
	event
			.create(`mekanism:energy_crystal_${comp.tier}`)
})
	event
			.create("industriallib:elemental_catalyst")
			.texture("kubejs:item/elemental_catalyst")
	event
			.create("mekanism:research_disk")
			.texture("kubejs:item/research_disk")
	event
			.create("hostilenetworks:alfheim_prediction")
			.texture("kubejs:item/alfheim_prediction")
	event
			.create('mekanism_plus:creative_ingot')
			.texture("kubejs:item/mekanismplus/creative_ingot")
	event
			.create("create_wt:elytra_pattern")
			.texture("kubejs:item/elytra_pattern")
	event
			.create("projecte:incomplete_philosophers_stone",'create:sequenced_assembly')
			.texture("projecte:item/philosophers_stone")
})
StartupEvents.registry("fluid", event => {
	event
			.create('mekanism_plus:creative')
			.temperature(1000000)
			.thinTexture(13386234)
			.color(13386234)
	event
			.create('mekanism:elytra')
			.thinTexture(8217700)
			.color(8217700)
	event
			.create('mekanism_matter:flowing_universal_matter')
			.thinTexture(4198467)
			.color(4198467)
			.translationKey("fluid.mekanism_matter.flowing_universal_matter")
})
StartupEvents.registry("mekanism:gas", event => {
if(isNormalMode){
	event
			.create('mekanism_plus:neutron_enriched_gas')
			.color(13421772)
			.radioactivity(0.02)
}
	event
			.create('mekanism_matter:gases_universal_matter')
			.color(4198467)
			.translationKey("gas.mekanism_matter.gases_universal_matter")
	event
			.create('mekanism_plus:creative_gas')
			.fuel(100,2147483647)
			.color(13386234)
	event	
			.create('mekanism_plus:californium')
			.radioactivity(1)
			.color(15897344)
			.translationKey("gas.mekanism_plus.californium")
	event	
			.create('mekanism_plus:curium')
			.radioactivity(0.07)
			.color(15725501)
			.translationKey("gas.mekanism_plus.curium")
	event	
			.create("draconicevolution:chaos")
			.color(0)
	event
			.create('mekanism:elytra_gas')
			.color(8217700)
})

StartupEvents.registry('mekanism:infuse_type', event =>{
	event
			.create('mekanism:infuse_universal_mass')
			.color(4198467)
	event
			.create('mekanism_plus:creative_infuse')
			.color(13386234)
})
StartupEvents.registry("block", event =>{
	event	
			.create("beam_receiver")
			.hardness(5)
			.resistance(5)
			.soundType("METAL")
			.tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool')
			.textureAll("kubejs:block/beam_receiver")
	event
			.create("inactive_blackhole_unit")
			.hardness(50)
			.resistance(1000)
			.soundType("METAL")
			.textureAll("kubejs:block/mekanism/inactive_blackhole_unit")
	event
			.create("activity_blackhole_unit")
			.hardness(50)
			.resistance(1000)
			.soundType("METAL")
			.textureAll("kubejs:block/mekanism/activity_blackhole_unit")
	event
			.create("mekanism:research_station_casing")
			.hardness(50)
			.resistance(1000)
			.soundType("METAL")
			.textureAll("kubejs:block/machine/researchstation/casing")
	event
			.create("mekanism:infinite_unit")
			.hardness(50)
			.resistance(1000)
			.soundType("METAL")
			.textureAll("kubejs:block/mekanism/infinite_unit.png")
			.translationKey("block.mekanism.infinite_unit")
	event
			.create("mekanism:cosmic_unit")
			.hardness(50)
			.resistance(1000)
			.soundType("METAL")
			.textureAll("kubejs:block/mekanism/cosmic_unit.png")
			.translationKey("block.mekanism.cosmic_unit")
	event
			.create("mekanism:supreme_unit")
			.hardness(50)
			.resistance(1000)
			.soundType("METAL")
			.textureAll("kubejs:block/mekanism/supreme_unit.png")
			.translationKey("block.mekanism.supreme_unit")
	event
			.create("mekanism:absolute_unit")
			.hardness(50)
			.resistance(1000)
			.soundType("METAL")
			.textureAll("kubejs:block/mekanism/absolute_unit.png")
			.translationKey("block.mekanism.absolute_unit")	
	event
			.create("mekanism:ultimate_unit")
			.hardness(50)
			.resistance(1000)
			.soundType("METAL")
			.textureAll("kubejs:block/mekanism/ultimate_unit.png")
			.translationKey("block.mekanism.ultimate_unit")		
	event
			.create("mekanism:elite_unit")
			.hardness(50)
			.resistance(1000)
			.soundType("METAL")
			.textureAll("kubejs:block/mekanism/elite_unit.png")
			.translationKey("block.mekanism.elite_unit")	
	event
			.create("mekanism:advanced_unit")
			.hardness(50)
			.resistance(1000)
			.soundType("METAL")
			.textureAll("kubejs:block/mekanism/advanced_unit.png")
			.translationKey("block.mekanism.advanced_unit")
	event
			.create("mekanism:basic_unit")
			.hardness(50)
			.resistance(1000)
			.soundType("METAL")
			.textureAll("kubejs:block/mekanism/basic_unit.png")
			.translationKey("block.mekanism.basic_unit")
	event	
			.create("mekanism:super_sps_casing")
			.hardness(50)
			.resistance(1000)
			.soundType("METAL")
			.textureAll("kubejs:block/mekanism/super_sps_casing")
			.translationKey("block.mekanism.super_sps_casing")
	event
			.create("avaritia:Infinity_Replicator_Casing")
			.hardness(50)
			.resistance(1000)
			.soundType("METAL")
			.textureAll("kubejs:block/infinity_replicator_casing")
	event
			.create('projecte:transmutation_chamber_casing')
			.hardness(50)
			.resistance(1000)
			.soundType("METAL")
			.textureAll("projecte:block/collectors/other")
})
ProjectEEvents.registerWorldTransmutations(event => {
    event.transform("mekanismscience:yttrium", "mekanismscience:helium")
	event.transform("mlrm:nuclear_waste", "mlrm:plutonium")
	event.transform("mlrm:antimatter", "mekanism_matter:flowing_universal_matter")
	event.transform("mekanism:uranium_hexafluoride", "mlrm:fissile_fuel")
})


//EDIBLE Yellow Uranium Cake
