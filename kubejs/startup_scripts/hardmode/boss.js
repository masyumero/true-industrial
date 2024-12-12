//priority: 998
const hardConfig = {
	"entity": "minecraft:zombie",
	"weight": 100,
	"quality": 0,
	"size": {
		"width": 0.6,
		"height": 1.95
	},
	"valid_gear_sets": [
		"#overworld"
	],
	"dimensions": [
		"minecraft:overworld"
	],
	"min_rarity": "uncommon",
	"max_rarity": "mythic",
	"stats": {
		"uncommon": {
			"enchant_chance": 0.25,
			"enchantment_levels": [12, 8, 20, 14],
			"effects": [{
				"effect": "minecraft:fire_resistance",
				"chance": 1.0
			}],
			"attribute_modifiers": [{
					"attribute": "minecraft:generic.max_health",
					"operation": "ADDITION",
					"value": {
						"min": 20,
						"steps": 20,
						"step": 2
					}
				},
				{
					"attribute": "minecraft:generic.movement_speed",
					"operation": "MULTIPLY_BASE",
					"value": {
						"min": 0.05,
						"steps": 5,
						"step": 0.01
					}
				},
				{
					"attribute": "minecraft:generic.attack_damage",
					"operation": "MULTIPLY_BASE",
					"value": {
						"min": 0.2,
						"steps": 20,
						"step": 0.01
					}
				},
				{
					"attribute": "minecraft:generic.knockback_resistance",
					"operation": "ADDITION",
					"value": 0.3
				}
			]
		},
		"rare": {
			"enchant_chance": 0.3,
			"enchantment_levels": [15, 10, 23, 17],
			"effects": [{
				"effect": "minecraft:fire_resistance",
				"chance": 1.0
			}],
			"attribute_modifiers": [{
					"attribute": "minecraft:generic.max_health",
					"operation": "ADDITION",
					"value": {
						"min": 40,
						"steps": 30,
						"step": 2
					}
				},
				{
					"attribute": "minecraft:generic.movement_speed",
					"operation": "MULTIPLY_BASE",
					"value": {
						"min": 0.10,
						"steps": 8,
						"step": 0.01
					}
				},
				{
					"attribute": "minecraft:generic.attack_damage",
					"operation": "MULTIPLY_BASE",
					"value": {
						"min": 0.25,
						"steps": 25,
						"step": 0.01
					}
				},
				{
					"attribute": "minecraft:generic.knockback_resistance",
					"operation": "ADDITION",
					"value": 0.4
				}
			]
		},
        "epic": {
			"enchant_chance": 0.80,
			"enchantment_levels": [30, 24, 50, 40],
			"effects": [{
				"effect": "minecraft:fire_resistance",
				"chance": 1.0
			}],
			"attribute_modifiers": [{
					"attribute": "minecraft:generic.max_health",
					"operation": "ADDITION",
					"value": {
						"min": 100,
						"steps": 40,
						"step": 2
					}
				},
				{
					"attribute": "minecraft:generic.movement_speed",
					"operation": "MULTIPLY_BASE",
					"value": {
						"min": 0.20,
						"steps": 25,
						"step": 0.01
					}
				},
				{
					"attribute": "minecraft:generic.attack_damage",
					"operation": "MULTIPLY_BASE",
					"value": {
						"min": 0.6,
						"steps": 35,
						"step": 0.01
					}
				},
				{
					"attribute": "minecraft:generic.knockback_resistance",
					"operation": "ADDITION",
					"value": 0.85
				},
				{
					"attribute": "minecraft:generic.armor",
					"operation": "ADDITION",
					"value": 4
				},
				{
					"attribute": "minecraft:generic.armor_toughness",
					"operation": "ADDITION",
					"value": 2
				}
			]
		},
		"mythic": {
			"enchant_chance": 0.85,
			"enchantment_levels": [32, 25, 60, 50],
			"effects": [{
				"effect": "minecraft:fire_resistance",
				"chance": 1.0
			},
            {
                "effect": "minecraft:regeneration",
                "chance": 0.1
            }
        ],
			"attribute_modifiers": [{
					"attribute": "minecraft:generic.max_health",
					"operation": "ADDITION",
					"value": {
						"min": 200,
						"steps": 40,
						"step": 2
					}
				},
				{
					"attribute": "minecraft:generic.movement_speed",
					"operation": "MULTIPLY_BASE",
					"value": {
						"min": 0.3,
						"steps": 35,
						"step": 0.01
					}
				},
				{
					"attribute": "minecraft:generic.attack_damage",
					"operation": "MULTIPLY_BASE",
					"value": {
						"min": 0.7,
						"steps": 35,
						"step": 0.01
					}
				},
				{
					"attribute": "minecraft:generic.knockback_resistance",
					"operation": "ADDITION",
					"value": 0.95
				},
				{
					"attribute": "minecraft:generic.armor",
					"operation": "ADDITION",
					"value": 6
				},
				{
					"attribute": "minecraft:generic.armor_toughness",
					"operation": "ADDITION",
					"value": 3
				}
			]
		}
	}
};



if(isHardMode){
	const AdventureConfig = Java.loadClass("dev.shadowsoffire.apotheosis.adventure.AdventureConfig")
// Handle the possibility that there may not be a mode.json
let config = JsonIO.read('kubejs/data/apotheosis/bosses/overworld/zombie.json');
if (!config) {
    JsonIO.write('kubejs/data/apotheosis/bosses/overworld/zombie.json', hardConfig);
    config = hardConfig;
}
}
if(isNormalMode){
    JsonIO.write('kubejs/data/apotheosis/bosses/overworld/zombie.json',null)
}