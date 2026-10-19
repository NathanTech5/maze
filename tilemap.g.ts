// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a0008000a0b08020304050706090b08020304050706090a0c010c010c010c010c010c010c010c010c010c010c010c010c010c010c010c010c010c010c010c010c010c010c010c010c010c010c010c010c010c01`, img`
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100003010303030303030301030303010303030303030101030101010303030101010301030301030303030101030101030303010303010303030303030303030303030103030101010101010101010101030301030303030303030303030303010303010101010103010303010301030103030103010301030103030103010301030301030103010301010301030103010303030303030303030303030301030103030101030101030303030303010301030303030303010301010301010103010303010101010103010303030301030103030303030303030103030303010301030101010303010101030303030101010104040404040404020404040404030303`, img`
. 2 . . . . . . . 2 . . . 2 . . 
. . . . 2 2 . 2 2 2 . . . 2 2 2 
. 2 . . 2 . . . . 2 2 . 2 2 . . 
. 2 . . 2 . . . . . . . . . . . 
. 2 . . 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 2 2 2 2 . 2 . . 2 . 2 . 2 . 
. 2 . 2 . 2 . 2 . . 2 . 2 . 2 . 
. 2 . 2 . 2 . 2 2 . 2 . 2 . 2 . 
. . . . . . . . . . . . 2 . 2 . 
. 2 2 . 2 2 . . . . . . 2 . 2 . 
. . . . . 2 . 2 2 . 2 2 2 . 2 . 
. 2 2 2 2 2 . 2 . . . . 2 . 2 . 
. . . . . . . 2 . . . . 2 . 2 . 
2 2 2 . . 2 2 2 . . . . 2 2 2 2 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass2,sprites.castle.tilePath1,sprites.castle.tilePath8,sprites.castle.tilePath9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "baseTransparency16":
            case "transparency16":return transparency16;
            case "field0":
            case "tile1":return tile1;
            case "crowd2":
            case "tile2":return tile2;
            case "crowd3":
            case "tile3":return tile3;
            case "crowd4":
            case "tile4":return tile4;
            case "crowd5":
            case "tile5":return tile5;
            case "crowd7":
            case "tile6":return tile6;
            case "crowd6":
            case "tile7":return tile7;
            case "crowd1":
            case "tile8":return tile8;
            case "crowd8":
            case "tile9":return tile9;
            case "crowd9":
            case "tile10":return tile10;
            case "crowd0":
            case "tile11":return tile11;
            case "field1":
            case "tile12":return tile12;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
