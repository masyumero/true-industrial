StartupEvents.registry('item', event => {
if(isNormalMode){
	event
			.create("projecte:philosophers_stone_nugget")
			.texture("kubejs:item/philosophers_stone_nugget")
}
	event
			.create("trueindustrial:cosmilite")
			.texture("kubejs:item/cosmilite")
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
StartupEvents.registry("block", event=>{
	event
			.create("mekanism:infinite_unit")
			.hardness(50)
			.resistance(1000)
			.soundType("METAL")
			.textureAll("kubejs:block/mekanism/infinite_unit.png")
			.translationKey("block.mekanism.infinite_unit.png")
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
