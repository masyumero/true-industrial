JEIEvents.hideItems(event => {
    event.hide(/botanypots:*/)
    event.hide(/botanypotstiers:*/)
    event.hide("avaritia:infinity_catalyst")
})
JEIEvents.addItems(event => {
    //pots
    event.add(['botanypots:terracotta_botany_pot','botanypots:terracotta_hopper_botany_pot','botanypotstiers:creative_terracotta_botany_pot','botanypotstiers:creative_terracotta_hopper_botany_pot','botanypotstiers:ultra_terracotta_botany_pot','botanypotstiers:ultra_terracotta_hopper_botany_pot','botanypotstiers:elite_terracotta_botany_pot','botanypotstiers:elite_terracotta_hopper_botany_pot']);
})


