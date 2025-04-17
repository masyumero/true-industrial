StartupEvents.registry("block",e=>{
	e.create("mekanism:hybrid_storage_kjstest")
		.hardness(50)
		.resistance(1000)
		.soundType("METAL")
        .blockEntity(b=>{
            b.inventory(192,192)
            b.attachCapability(CapabilityBuilder.ENERGY.customBlockEntity()
            .canExtract(()=>true)
            .canReceive(()=>true)
            .extractEnergy((be, amount,simulate)=>{
            let energy = be.persistentData.getInt("energy")
            let extracted = Math.min(energy, amount)
            if (!simulate){
                be.persistentData.putInt("energy", energy - extracted)
            }
            return extracted
        })
        .receiveEnergy((be, amount, simulate) => {
            let energy = be.persistentData.getInt("energy")
            let received = Math.min(2147483647 - energy, amount)
            if (!simulate) {
                be.persistentData.putInt("energy", energy + received)
            }
            return received
        })
        .getEnergyStored(be => {
            return be.persistentData.getInt("energy")
        })
            .getMaxEnergyStored(() => 2147483647)
        )
    })     
})


