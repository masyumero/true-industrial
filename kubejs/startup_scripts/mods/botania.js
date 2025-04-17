global.botaniaTier.forEach(ele => {
    StartupEvents.registry("block",e=>{
        if(ele.tier == "elementium"){
            let flamemodel = `kubejs:block/frame/dragonstone`;
            let blockname = `botania:machine_frame`
            e.create(blockname).material('metal').model(flamemodel)
                .viewBlocking(false)
                .suffocating(false)
                .noValidSpawns(true)
                .fullBlock(false)
                .box(0,0,0,16,1,16)
                .box(0,1,0,1,16,1)
                .box(15,1,0,16,16,1)
                .box(15,1,15,16,16,16)
                .box(0,1,15,1,16,16)
                .box(1,15,0,15,16,1)
                .box(1,15,15,15,16,16)
                .box(0,15,1,1,16,15)
                .box(15,15,1,16,16,15)
        }else{
            let flamemodel = `kubejs:block/frame/${ele.tier}`;
            let blockname = `botania:${ele.tier}_machine_frame`
            e.create(blockname).material('metal').model(flamemodel)
                .viewBlocking(false)
                .suffocating(false)
                .noValidSpawns(true)
                .fullBlock(false)
                .box(0,0,0,16,1,16)
                .box(0,1,0,1,16,1)
                .box(15,1,0,16,16,1)
                .box(15,1,15,16,16,16)
                .box(0,1,15,1,16,16)
                .box(1,15,0,15,16,1)
                .box(1,15,15,15,16,16)
                .box(0,15,1,1,16,15)
                .box(15,15,1,16,16,15)
        }
    })
})
