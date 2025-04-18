//priority: 999
Platform.mods.kubejs.name = 'True Industrial'
global.energycompression=[
    {
        "tier":"9_1",
        "count":"9", 
        "lesser":"none"
    },
    {
        "tier":"9_2",
        "count":"81",
        "lesser":"9_1"
    },
    {
        "tier":"9_3",
        "count":"729",
        "lesser":"9_2"
    },
    {
        "tier":"9_4",
        "count":"6561",
        "lesser":"9_3"
    },
    {
        "tier":"9_5",
        "count":"59049",
        "lesser":"9_4"
    },
    {
        "tier":"9_6",
        "count":"531441",
        "lesser":"9_5"
    },
    {
        "tier":"9_7",
        "count":"4782969",
        "lesser":"9_6"
    },
    {
        "tier":"9_8",
        "count":"43046721",
        "lesser":"9_7"
    },
    {
        "tier":"9_9",
        "count":"387420489",
        "lesser":"9_8"
    },
    {
        "tier":"9_10",
        "count":"3486784401",
        "lesser":"9_9"
    }
]
global.botaniaTier=[
    {
        "tier":"elementium",
        "block":'botania:dragonstone_block',
        "item":'botania:dragonstone',
        "ingot":'botania:elementium_ingot',
        "unit":'mekanism:ultimate_unit',
        "machinetier":"mechanical",
    },
    {
        "tier":"malachite",
        "block":'botanicalextramachinery:malachite_dragonstone_block',
        "item":'botanicalextramachinery:malachite_dragonstone',
        "ingot":'botanicalextramachinery:malachite_ingot',
        "unit":'mekanism:absolute_unit',
        "machinetier":"base",
    },
    {
        "tier":"saffron",
        "block":'botanicalextramachinery:saffron_dragonstone_block',
        "item":'botanicalextramachinery:saffron_dragonstone',
        "ingot":'botanicalextramachinery:saffron_ingot',
        "unit":'mekanism:supreme_unit',
        "machinetier":"upgraded",
    },
    {
        "tier":"shadow",
        "block":'botanicalextramachinery:shadow_dragonstone_block',
        "item":'botanicalextramachinery:shadow_dragonstone',
        "ingot":'botanicalextramachinery:shadow_ingot',
        "unit":'mekanism:cosmic_unit',
        "machinetier":"advanced",
    },
    {
        "tier":"crimson",
        "block":'botanicalextramachinery:crimson_dragonstone_block',
        "item":'botanicalextramachinery:crimson_dragonstone',
        "ingot":'botanicalextramachinery:crimson_ingot',
        "unit":'mekanism:infinite_unit',
        "machinetier":"ultimate",
    },
    {
        "tier":"crystal",
        "block":'botanicalextramachinery:crystal_dragonstone_block',
        "item":'botanicalextramachinery:crystal_dragonstone',
        "ingot":'botanicalextramachinery:crystal_ingot',
        "unit":'mekanism:elite_unit',
        "machinetier":"none",
    },
]
global.unittier=[
    {
        "tier":"infinite",
        "alloy":'mekanism_extras:alloy_spectrum',
        "circuit":'mekanism_extras:infinite_control_circuit',
        "catalyst":'mekanism:cosmic_unit',
    },
    {
        "tier":"cosmic",
        "alloy":'mekanism_extras:alloy_shining',
        "circuit":'mekanism_extras:cosmic_control_circuit',
        "catalyst":'mekanism:supreme_unit',
    },
    {
        "tier":"supreme",
        "alloy":'mekanism_extras:alloy_thermonuclear',
        "circuit":'mekanism_extras:supreme_control_circuit',
        "catalyst":'mekanism:absolute_unit',
    },
    {
        "tier":"absolute",
        "alloy":'mekanism_extras:alloy_radiance',
        "circuit":'mekanism_extras:absolute_control_circuit',
        "catalyst":'mekanism:ultimate_unit',
    },
    {
        "tier":"ultimate",
        "alloy":'mekanism:alloy_atomic',
        "circuit":'mekanism:ultimate_control_circuit',
        "catalyst":'mekanism:elite_unit',
    },
    {
        "tier":"elite",
        "alloy":'mekanism:alloy_reinforced',
        "circuit":'mekanism:elite_control_circuit',
        "catalyst":'mekanism:advanced_unit',
    },
    {
        "tier":"advanced",
        "alloy":'mekanism:alloy_infused',
        "circuit":'mekanism:advanced_control_circuit',
        "catalyst":'mekanism:basic_unit',
    },
    {
        "tier":"basic",
        "alloy":'create:andesite_alloy',
        "circuit":'mekanism:basic_control_circuit',
        "catalyst":'mekanism:steel_casing',
    }
]
global.hardsingularity=[
    {
        'file': 'philosophersstone',
        'name': 'Philosophers Stone',
        'colors': ['b52f6d', '880026'],
        'ingredient': {
            'item': "projecte:philosophers_stone"
        },
        'materialCount': 1000
    },
    {
        'file': 'energyflowchip',
        'name': 'Energy Flow Chip',
        'colors': ['479cc8', 'afb5b7'],
        'ingredient': {
            'item': 'jaopca:processors.protactinium'
        },
        'materialCount': 10000
    },
    {
        'file': 'deshtrumingot',
        'name': 'Deshtrum Ingot',
        'colors': ['be915e', '974a42'],
        'ingredient': {
            'item': 'ad_astra__extra_additions:deshtrum_ingot'
        },
        'materialCount': 10000
    },
    {
        'file': 'redmatter',
        'name': 'Red Matter',
        'colors': ['8e0606', 'fae63f'],
        'ingredient': {
            'item': 'projecte:red_matter'
        },
        'materialCount': 10000
    },
    {
        'file': 'alfheimprediction',
        'name': 'Alfheim Prediction',
        'colors': ['8c4300', 'aa9600'],
        'ingredient': {
            'item': 'hostilenetworks:alfheim_prediction'
        },
        'materialCount': 10000
    },
    {
        'file': 'ingotnaquadah',
        'name': 'Ingot Naquadah',
        'colors': ['0d160c', '10190f'],
        'ingredient': {
            'item': 'mekanism_extras:ingot_naquadah'
        },
        'materialCount': 10000
    },
    {
        'file': 'diviniumingotblock',
        'name': 'Divinium Ingot Block',
        'colors': ['cfcf00', 'ece000'],
        'ingredient': {
            'item': 'mysticalexpansion:divinium_ingot_block'
        },
        'materialCount': 10000
    },
    {
        'file': 'hyperexperiencebottle',
        'name': 'Hyper Experience Bottle',
        'colors': ['1586e4', '2cffed'],
        'ingredient': {
            'item': 'create_enchantment_industry:hyper_experience_bottle'
        },
        'materialCount': 10000
    },
    {
        'file': 'reactorcore',
        'name': 'Reactor Core',
        'colors': ['730000', '190000'],
        'ingredient': {
            'item': 'draconicevolution:reactor_core'
        },
        'materialCount': 10000
    },
    {
        'file': 'crimsondragonstoneblock',
        'name': 'Crimson Dragonstone Block',
        'colors': ['5c0013', 'bf4059'],
        'ingredient': {
            'item': 'botanicalextramachinery:crimson_dragonstone_block'
        },
        'materialCount': 10000
    },
    {
        'file': 'megaupgradeaugment',
        'name': 'Mega Upgrade Augment',
        'colors': ['6c50af', '6e0100'],
        'ingredient': {
            'item': 'thermal_more:mega_upgrade_augment'
        },
        'materialCount': 10000
    },
    {
        'file': 'nitrocrystalblock',
        'name': 'Nitro Crystal Block',
        'colors': ['4a0200', 'bb1c22'],
        'ingredient': {
            'item': 'powah:nitro_crystal_block'
        },
        'materialCount': 10000
    },
    {
        'file': 'abyssalgear',
        'name': 'Abyssal Gear',
        'colors': ['2b4030', '8fb27a'],
        'ingredient': {
            'item': 'thermal_extra:abyssal_gear'
        },
        'materialCount': 10000
    },
]
global.normalsingularity=[
    {
        'file': 'philosophersstone',
        'name': 'Philosophers Stone',
        'colors': ['b52f6d', '880026'],
        'ingredient': {
            'item': "projecte:philosophers_stone"
        },
        'materialCount': 10
    },
    {
        'file': 'actinium',
        'name': 'Actinium Ingot',
        'colors': ['00FFFF', '7FFFD4'],
        'ingredient': {
            'item': 'chemlib:actinium_ingot'
        },
        'materialCount': 100
    },
    {
        'file':'aluminium',
        'name': 'singularity.extendedcrafting.aluminum',
        'colors': [
          'caccda',
          '9a9ca6'
        ],
        'ingredient': {
          'tag': 'forge:ingots/aluminum'
        }
    },
    {
        'file': 'angelwandcore',
        'name': 'Angel Wand Core',
        'colors': ['FBDD47', 'FBDD47'],
        'ingredient': {
            'item': 'constructionwand:core_angel'
        },
        'materialCount': 1000
    },
    {
        'file': 'blackiron',
        'name': 'black iron ingot',
        'colors': ['404063', '404063'],
        'ingredient': {
            'item': 'extendedcrafting:black_iron_ingot'
        },
        'materialCount': 1000
    },
    {
        'file': 'blazingcapacitor',
        'name': 'Blazing Capacitor',
        'colors': ['F0CE0D', 'F0CE0D'],
        'ingredient': {
            'item': 'powah:capacitor_blazing'
        },
        'materialCount': 1000
    },
    {
        'file': 'bronze',
        'name': 'singularity.extendedcrafting.bronze',
        'colors': [
          'd99f43',
          'bb6b3b'
        ],
        'ingredient': {
          'tag': 'forge:ingots/bronze'
        }
    },
    {
        'file': 'cake',
        'name': 'Cake',
        'colors': ['95481A', '95481A'],
        'ingredient': {
            'item': 'minecraft:cake'
        },
        'materialCount': 1000
    },
    {
        'file': 'coal',
        'name': 'singularity.extendedcrafting.coal',
        'colors': [
          '363739',
          '261e24'
        ],
        'ingredient': {
          'item': 'minecraft:coal'
        }
    },
    {
        'file': 'coin',
        'name': 'Coin',
        'colors': ['F9E54F', '748190'],
        'ingredient': {
            'tag': 'forge:coins'
        },
        'materialCount': 10000
    },
    {
        'file': 'copper',
        'name': 'singularity.extendedcrafting.copper',
        'colors': [
          'fa977c',
          'bc5430'
        ],
        'ingredient': {
          'item': 'minecraft:copper_ingot'
        }
    },
    {
        'file': 'diamond',
        'name': 'Diamond',
        'colors': ['A6ACE9', '1AACA8'],
        'ingredient': {
            'item': 'minecraft:diamond'
        },
        'materialCount': 1000000
    },
    {
        'file': 'dimshard',
        'name': 'Dimensional Shard',
        'colors': ['96D3D1', 'FAFBFA'],
        'ingredient': {
            'item': 'rftoolsbase:dimensionalshard'
        },
        'materialCount': 1000
    },
    {
        'file': 'draconiccore',
        'name': 'Draconic Core',
        'colors': ['FF0000', 'FFFF00'],
        'ingredient': {
            'item': 'draconicevolution:awakened_core'
        },
        'materialCount': 100
    },
    {
        'file': 'draconium',
        'name': 'draconium ingot',
        'colors': ['7e5e9b', '7e5e9b'],
        'ingredient': {
            'item': 'draconicevolution:draconium_ingot'
        },
        'materialCount': 1000
    },
    {
        'file': 'dragonbreath',
        'name': 'Dragon Breath',
        'colors': ['FF79D9', 'FFFFFF'],
        'ingredient': {
            'item': 'minecraft:dragon_breath'
        },
        'materialCount': 100
    },
    {
        'file': 'dragonstone',
        'name': 'Dragonstone',
        'colors': ['FF69B4', 'FF1493'],
        'ingredient': {
            'item': 'botania:dragonstone'
        },
        'materialCount': 100
    },
    {
        'file': 'electrum',
        'name': 'singularity.extendedcrafting.electrum',
        'colors': [
          'f5f18e',
          '9e8d3e'
        ],
        'ingredient': {
          'tag': 'forge:ingots/electrum'
        }
    },
    {
        'file': 'elytra',
        'name': 'elytra',
        'colors': ['64647d', '64647d'],
        'ingredient': {
            'item': 'minecraft:elytra'
        },
        'materialCount': 10000
    },
    {
        'file': 'emerald',
        'name': 'singularity.extendedcrafting.emerald',
        'colors': [
          '7df8ac',
          '8e1a'
        ],
        'ingredient': {
          'item': 'minecraft:emerald'
        }
    },
    {
        'file': 'enchantapple',
        'name': 'Enchanted Golden Apple',
        'colors': ['FFEF7B', 'FFEFA5'],
        'ingredient': {
            'item': 'minecraft:enchanted_golden_apple'
        },
        'materialCount': 100
    },
    {
        'file': 'endestpearl',
        'name': 'Endest Pearl',
        'colors': ['59BABA', 'BCB040'],
        'ingredient': {
            'item': 'avaritia:endest_pearl'
        },
        'materialCount': 10
    },
    {
        'file': 'fireball',
        'name': 'fireball',
        'colors': ['f66e51', 'f66e51'],
        'ingredient': {
            'item': 'cyclic:fireball'
        },
        'materialCount': 1000
    },
    {
        'file': 'glowstone',
        'name': 'singularity.extendedcrafting.glowstone',
        'colors': [
          'ffd38f',
          'a06135'
        ],
        'ingredient': {
          'item': 'minecraft:glowstone_dust'
        }
    },
    {
        'file': 'gold',
        'name': 'singularity.extendedcrafting.gold',
        'colors': [
          'fdf55f',
          'd98e04'
        ],
        'ingredient': {
          'item': 'minecraft:gold_ingot'
        }
    },
    {
        'file': 'hdpe',
        'name': 'HDPE Sheet',
        'colors': ['F2F2ED', 'F2F2ED'],
        'ingredient': {
            'item': 'mekanism:hdpe_sheet'
        },
        'materialCount': 1000
    },
    {
        'file': 'heartofsea',
        'name': 'Heart of the Sea',
        'colors': ['008BFF', '002FFF'],
        'ingredient': {
            'item': 'minecraft:heart_of_the_sea'
        },
        'materialCount': 100
    },
    {
        'file': 'invar',
        'name': 'singularity.extendedcrafting.invar',
        'colors': [
          'bcc5bb',
          '5d7877'
        ],
        'ingredient': {
          'tag': 'forge:ingots/invar'
        }
    },
    {
        'file': 'iron',
        'name': 'singularity.extendedcrafting.iron',
        'colors': [
          'e1e1e1',
          '6c6c6c'
        ],
        'ingredient': {
          'item': 'minecraft:iron_ingot'
        }
    },
    {
        'file': 'lapis',
        'name': 'singularity.extendedcrafting.lapis_lazuli',
        'colors': [
          '678dea',
          '1b53a7'
        ],
        'ingredient': {
          'item': 'minecraft:lapis_lazuli'
        }
    },
    {
        'file': 'lead',
        'name': 'singularity.extendedcrafting.lead',
        'colors': [
          '6c7d92',
          '323562'
        ],
        'ingredient': {
          'tag': 'forge:ingots/lead'
        }
    },
    {
        'file': 'logicdirector',
        'name': 'Logic Director',
        'colors': ['AC7DAC', '6D3D6D'],
        'ingredient': {
            'item': 'integrateddynamics:logic_director'
        },
        'materialCount': 1000
    },
    {
        'file': 'manaemerald',
        'name': 'mana emerald',
        'colors': ['75b6a3', '75b6a3'],
        'ingredient': {
            'item': 'botanicalmachinery:mana_emerald'
        },
        'materialCount': 1000
    },
    {
        'file': 'nickel',
        'name': 'singularity.extendedcrafting.nickel',
        'colors': [
          'e1d798',
          'b1976c'
        ],
        'ingredient': {
          'tag': 'forge:ingots/nickel'
        }
    },
    {
        'file': 'oak',
        'name': 'Oak',
        'colors': ['634D2D', '634D2D'],
        'ingredient': {
            'item': 'minecraft:oak_log'
        },
        'materialCount': 1000000
    },
    {
        'file': 'antimatter',
        'name': 'pellet antimatter',
        'colors': ['713e7b', '713e7b'],
        'ingredient': {
            'item': 'mekanism:pellet_antimatter'
        },
        'materialCount': 10
    },
    {
        'file': 'plutonium',
        'name': 'Plutonium Pellet',
        'colors': ['92EBA0', '59C68F'],
        'ingredient': {
            'item': 'mekanism:pellet_plutonium'
        },
        'materialCount': 100
    },
    {
        'file': 'photonicsolar',
        'name': 'Photonic Solar Element',
        'colors': ['81FF94', '00FF00'],
        'ingredient': {
            'item': 'solarpanels:photonic_solar_element'
        },
        'materialCount': 1000
    },
    {
        'file': 'plastic',
        'name': 'Plastic',
        'colors': ['AEAEAE', 'AEAEAE'],
        'ingredient': {
            'tag': 'forge:plastic'
        },
        'materialCount': 1000
    },
    {
        'file': 'platinum',
        'name': 'singularity.extendedcrafting.platinum',
        'colors': [
          '6feaef',
          '57b8bc'
        ],
        'ingredient': {
          'tag': 'forge:ingots/platinum'
        }
    },
    {
        'file': 'precisionmechanism',
        'name': 'Precision Mechanism',
        'colors': ['FFD700', 'FFD700'],
        'ingredient': {
            'item': 'create:precision_mechanism'
        },
        'materialCount': 100
    },
    {
        'file': 'rawdiamond',
        'name': 'raw Diamond',
        'colors': ['3f8282', '3f8282'],
        'ingredient': {
            'item': 'createoreexcavation:raw_diamond'
        },
        'materialCount': 100
    },
    {
        'file': 'reddstone',
        'name': 'singularity.extendedcrafting.redstone',
        'colors': [
          'ff0000',
          '8a0901'
        ],
        'ingredient': {
          'item': 'minecraft:redstone'
        }
    },
    {
        'file': 'salmontempura',
        'name': 'Salmon Tempura',
        'colors': ['FFB360', 'FFDAA2'],
        'ingredient': {
            'item': 'pneumaticcraft:salmon_tempura'
        },
        'materialCount': 100
    },
    {
        'file': 'sawdust',
        'name': 'Sawdust',
        'colors': ['755E56', '5B4138'],
        'ingredient': {
            'item': 'thermal:sawdust_block'
        },
        'materialCount': 10000
    },
    {
        'file': 'seapickle',
        'name': 'Sea Pickle',
        'colors': ['565B1D', 'B2E0AF'],
        'ingredient': {
            'item': 'minecraft:sea_pickle'
        },
        'materialCount': 10000
    },
    {
        'file': 'silver',
        'name': 'singularity.extendedcrafting.silver',
        'colors': [
          'c0cdd2',
          '5f6e7c'
        ],
        'ingredient': {
          'tag': 'forge:ingots/silver'
        }
    },
    {
        'file': 'singularity',
        'name': 'Singularity',
        'colors': ['12004F', '355BFC'],
        'ingredient': {
            'item': 'ae2:singularity'
        },
        'materialCount': 100
    },
    {
        'file': 'smartdense',
        'name': 'smart_dense_cable',
        'colors': ['2f2f2f', '2f2f2f'],
        'ingredient': {
            'tag': 'ae2:smart_dense_cable'
        },
        'materialCount': 1000
    },
    {
        'file': 'steel',
        'name': 'singularity.extendedcrafting.steel',
        'colors': [
          '565656',
          '232323'
        ],
        'ingredient': {
          'tag': 'forge:ingots/steel'
        }
    },
    {
        'file': 'supremiumcoal',
        'name': 'Supremium Coal',
        'colors': ['BA1E19', 'BA1E19'],
        'ingredient': {
            'item': 'mysticalagradditions:supremium_coal'
        },
        'materialCount': 100
    },
    {
        'file': 'tin',
        'name': 'singularity.extendedcrafting.tin',
        'colors': [
          'a0bebd',
          '527889'
        ],
        'ingredient': {
          'tag': 'forge:ingots/tin'
        }
    },
    {
        'file': 'twinite',
        'name': 'Twinite Ingot',
        'colors': ['FF929B', 'FF6288'],
        'ingredient': {
            'item': 'thermal_extra:twinite_ingot'
        },
        'materialCount': 1000
    },
    {
        'file': 'ultimatecoil',
        'name': 'Ultimate_coil',
        'colors': ['9df4be', '9df4be'],
        'ingredient': {
            'item': 'ironjetpacks:ultimate_coil'
        },
        'materialCount': 1000
    },
]