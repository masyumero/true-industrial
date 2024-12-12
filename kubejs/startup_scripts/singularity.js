//priority: 998
global.hardsingularity.forEach((sin)=>{
    const singularityname = `config/extendedcrafting/singularities/${sin.file}.json`;
    JsonIO.write(singularityname, null)
})
global.normalsingularity.forEach((sin)=>{
    const singularityname = `config/extendedcrafting/singularities/${sin.file}.json`;
    JsonIO.write(singularityname, null)
})
if(isHardMode){
    global.hardsingularity.forEach((sin)=>{
        const singularityname = `config/extendedcrafting/singularities/${sin.file}.json`;
        let singularityjson
    if (sin.materialCount == undefined){
        singularityjson = {
            "name": `${sin.name}`,
            "colors": sin.colors,
            "ingredient": sin.ingredient
        };
    }else{
        singularityjson = {
            "name": `${sin.name}`,
            "colors": sin.colors,
            "ingredient": sin.ingredient,
            "materialCount": sin.materialCount
        };
    } 
    if(isExpertMode){
        const materialCount = (sin.materialCount * 100)
        singularityjson = {
            "name": `${sin.name}`,
            "colors": sin.colors,
            "ingredient": sin.ingredient,
            "materialCount": materialCount
        };
    }
        JsonIO.write(singularityname, null)
        //const singularityjson = {
        //    "name": sin.name,
        //    "colors": sin.colors,
        //    "ingredient": sin.ingredient,
        //    "materialCount": sin.materialCount
        //};
        
        let singularity = JsonIO.read(singularityname);
        if (!singularity) {
            JsonIO.write(singularityname,singularityjson);
            console.log(`Created new ${singularityname}`);
            singularity = singularityjson
        }
        console.log((sin.materialCount * 100))
    })
}
if(isHardMode){
    global.hardsingularity.forEach((sin)=>{
        const singularityname = `config/extendedcrafting/singularities/${sin.file}.json`;
        let singularityjson
    if (sin.materialCount == undefined){
        singularityjson = {
            "name": `${sin.name}`,
            "colors": sin.colors,
            "ingredient": sin.ingredient
        };
    }else{
        singularityjson = {
            "name": `${sin.name}`,
            "colors": sin.colors,
            "ingredient": sin.ingredient,
            "materialCount": sin.materialCount
        };
    } 
        JsonIO.write(singularityname, null)
        //const singularityjson = {
        //    "name": sin.name,
        //    "colors": sin.colors,
        //    "ingredient": sin.ingredient,
        //    "materialCount": sin.materialCount
        //};
        
        let singularity = JsonIO.read(singularityname);
        if (!singularity) {
            JsonIO.write(singularityname,singularityjson);
            console.log(`Created new ${singularityname}`);
            singularity = singularityjson
        }
        console.log(singularityjson)
    })
}
if(isNormalMode){
global.normalsingularity.forEach((sin)=>{
    const singularityname = `config/extendedcrafting/singularities/${sin.file}.json`;
    let singularityjson
if (sin.materialCount == undefined){
    singularityjson = {
        "name": `${sin.name}`,
        "colors": sin.colors,
        "ingredient": sin.ingredient
    };
}else{
    singularityjson = {
        "name": `${sin.name}`,
        "colors": sin.colors,
        "ingredient": sin.ingredient,
        "materialCount": sin.materialCount
    };
} 
    JsonIO.write(singularityname, null)
    //const singularityjson = {
    //    "name": sin.name,
    //    "colors": sin.colors,
    //    "ingredient": sin.ingredient,
    //    "materialCount": sin.materialCount
    //};
    
    let singularity = JsonIO.read(singularityname);
    if (!singularity) {
        JsonIO.write(singularityname,singularityjson);
        console.log(`Created new ${singularityname}`);
        singularity = singularityjson
    }
    console.log(singularityjson)
})
}