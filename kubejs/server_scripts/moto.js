if(nomekTweaks)
PlayerEvents.loggedIn(event => {
    event.player.tell(['Mekanism Tweaks is recommended to be includedFor installation, see ', Text.blue('if you can`t wait 1.20.1 version is out, you can follow the steps below.').underlined().clickOpenUrl('https://www.curseforge.com/minecraft/mc-mods/mekanism-tweaks/comments').hover('Click to open'), '.']);
    event.player.tell(['Mekanism Tweaksを入れることを推奨します導入に関しては',Text.blue('この').underlined().clickOpenUrl('https://www.curseforge.com/minecraft/mc-mods/mekanism-tweaks/comments').hover('Click to open'),'ページ内のif you can`t wait 1.20.1 version is out, you can follow the steps below.を参照してください']);
})