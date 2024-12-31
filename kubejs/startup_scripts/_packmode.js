//priority: 1000
const configName = 'config/packmode.json';

const defaultConfig = {
    mode: 'normal',
    message: '[WIP]Changing this is not recommended'
};
let config = JsonIO.read(configName);
if (!config || !config.mode) {
    JsonIO.write(configName, defaultConfig);
    console.log(`Created new ${configName}`);
    config = defaultConfig;
}
let invalidConfig = function (configMode) {
    JsonIO.write(configName, defaultConfig);
    config.mode = defaultConfig.mode;
    console.error(`Overwrote ${configName}, because the mode ${configMode} was found. Valid modes are 'normal', 'hard' and 'expert'.`);
}
let packMode = config.mode;
switch (packMode) {
    case 'normal': case 'hard': case 'expert': break;
    default: invalidConfig(); packMode = config.mode;
}
global.packmode = packMode;
global.isNormalMode = packMode == 'normal';
global.isExpertMode = packMode == 'expert';
global.isHardMode = (packMode == 'hard') || global.isExpertMode;
const isNormalMode = !!global.isNormalMode;
const isExpertMode = !!global.isExpertMode;
const isHardMode = !!global.isHardMode;