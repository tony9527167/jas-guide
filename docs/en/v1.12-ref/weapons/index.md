# JA2 v1.12 Reference - Weapons

Notes

- The Weight unit is KG.
- The flags and values meaning:
  - asterisk `*` : the item is unique item, it is valuable or not easy to get in game.
  - a value `337 / 562` in _Tony_'s column means: C5 Tony will buy it from for $337, and sell the item to you for $562.
  - a value `easy / yes` in _Repair / Reliable_'s column means, this item is _easy_ to repair, and it is _Reliable_.

## Melee

| Name                  | Weight | Dmg | AP  | Bobby | Tony      | Note                                          |
| --------------------- | ------ | --- | --- | ----- | --------- | --------------------------------------------- |
| Machete               | 0.3    | 50  | 10  | -     | 150 / 250 | Dmg <br> neck ~48 <br> torso ~30 <br> legs ~7 |
| Crowbar               | 0.1    | 12  | -   | 40    | ?         | F12 Sam $40                                   |
| Knuckle Dusters       | 0.1    | ?   | ?   | 20    | 15 / 25   | -                                             |
| Rock                  | 1.1    | 50  | 7   | -     | -         | -                                             |
| Combat Knife          | 2.0    | 18  | 7   | 100   | 75 / 125  | Dmg <br> neck ~48 <br> torso ~30 <br> legs ~7 |
| Throwing Knife        | 0.1    | 15  | 7   | 50    | 37 / 62   | -                                             |
| Bloody Throwing Knife | 0.1    | 15  | 7   | -     | -         | -                                             |
| Punch with hand       | -      | ~7  | 4   | -     | -         | -                                             |

## Handguns

| Name                                        | Mag\*Cal       | Dmg | AP     | Rng | Weight | Bobby | Tony      | Repair / Reliable | Burst |
| ------------------------------------------- | -------------- | --- | ------ | --- | ------ | ----- | --------- | ----------------- | ----- |
| Beretta 92F                                 | 15\*9          | 22  | 6      | 12  | 1.1    | 450   | 337 / 562 | -                 | -     |
| Beretta 93R                                 | 15\*9          | 22  | 7 / 11 | 12  | 1.1    | 470   | 352 / 587 | hard / no         | 5     |
| Barracuda                                   | 6\*.357        | 24  | 8      | 13  | 1.0    | 300   | 225 / 375 | easy / yes        | -     |
| Colt .45                                    | 7\*.45         | 23  | 7      | 12  | 1.1    | 400   | 300 / 500 | -                 | -     |
| Desert Eagle                                | 9\*.357        | 24  | 8      | 13  | 1.7    | 300   | 225 / 375 | -                 | -     |
| Glock 17                                    | 15\*9          | 21  | 6      | 12  | 0.6    | 350   | 262 / 437 | easy / yes        | -     |
| Glock 18                                    | 15\*9          | 21  | 6 / 10 | 12  | 0.6    | 480   | 360 / 600 | -                 | 5     |
| S&W Special <br> .38 S&W <br> .38 Special   | 6\*.38         | 22  | 8      | 13  | 1.1    | 250   | 187 / 312 | easy / yes        | -     |
| Dart Gun                                    | 1\*Dart        | 2   | 7      | 20  | 1.2    | ?     | 375 / 625 | easy              | -     |
| [Automag III](./automag.md) \* <br> Automag | 5\*7.62mm NATO | 29  | 10     | 22  | 2.6    | -     | 750 / ?   | hard              | -     |

## Shotguns

| Name                     | Mag\*Cal    | Dmg | AP     | Rng | Weight | Bobby | Tony        | Repair / Reliable | Burst |
| ------------------------ | ----------- | --- | ------ | --- | ------ | ----- | ----------- | ----------------- | ----- |
| [CAWS](./caws.md) \*     | 10\*CAWS    | 40  | 9 / 13 | 13  | 4.1    | -     | 2175 / 3625 | hard / no         | 3     |
| Remington M870 <br> M870 | 7\*12 Gauge | 32  | 13     | 13  | 3.6    | 670   | 502 / 837   | easy / yes        | -     |
| SPAS-15                  | 7\*12 Gauge | 32  | 9      | 13  | 3.8    | 980   | 735 / 1225  | hard / no         | -     |

## Light machine guns

| Name                  | Mag\*Cal   | Dmg | AP     | Rng | Weight | Bobby | Tony        | Repair / Reliable | Burst |
| --------------------- | ---------- | --- | ------ | --- | ------ | ----- | ----------- | ----------------- | ----- |
| FN Minimi <br> Minimi | 30\*5.56mm | 28  | 7 / 11 | 50  | 6.8    | ?     | 2325 / 3875 | hard              | 6     |
| RPK-74                | 30\*5.45mm | 30  | 7 / 11 | 50  | 4.8    | 3180  | 2385 / 3475 | hard              | 5     |

## Submachine guns(one-handed SMG)

| Name               | Mag\*Cal  | Dmg | AP     | Rng | Weight | Bobby | Tony        | Repair / Reliable | Burst |
| ------------------ | --------- | --- | ------ | --- | ------ | ----- | ----------- | ----------------- | ----- |
| FN-P90 <br> P90    | 50\*5.7mm | 30  | 6 / 10 | 22  | 2.8    | ?     | 2062 / 3437 | hard / no         | 5     |
| H&K MP5K <br> MP5K | 30\*9mm   | 23  | 6 / 10 | 20  | 2.1    | 980   | 735 / 1225  | -                 | 5     |
| MAC-10             | 30\*.45   | 27  | 7 / 11 | 20  | 2.8    | 1170  | 877 / 1462  | no                | 5     |

## Submachine guns(two-handed SMG)

| Name                        | Mag\*Cal      | Dmg | AP     | Rng | Weight | Bobby | Tony       | Repair / Reliable | Burst |
| --------------------------- | ------------- | --- | ------ | --- | ------ | ----- | ---------- | ----------------- | ----- |
| AKSU-74                     | 30\*5.45mm    | 26  | 5 / 9  | 20  | 3.9    | 1180  | 885 / 1475 | no                | 4     |
| Colt Commando <br> Commando | 30\* 5.56mm   | 29  | 6 / 10 | 20  | 2.6    | 1330  | 447 / 1662 | -                 | 4     |
| H&K MP53 <br> MP53          | 15\*9mm       | 23  | 6 / 10 | 20  | 3.1    | 770   | 577 / 462  | -                 | 3     |
| Thompson M1A1 <br> Thompson | 30\*.45       | 24  | 9 / 13 | 20  | 4.8    | 700   | 525 / 875  | hard / yes        | 4     |
| Type-85                     | 30\*7.62mm WP | 23  | 9 / 13 | 20  | 4.2    | 620   | 465 / 775  | easy / no         | 4     |

## Assault rifles

| Name                 | Mag\*Cal        | Dmg | AP     | Rng | Weight | Bobby | Tony        | Repair / Reliable | Burst |
| -------------------- | --------------- | --- | ------ | --- | ------ | ----- | ----------- | ----------------- | ----- |
| AK-74                | 30\*5.45mm      | 28  | 5 / 9  | 35  | 3.6    | 1830  | 1372 / 2287 | hard              | 3     |
| AKM                  | 30\*7.62mm WP   | 29  | 5 / 9  | 25  | 4.3    | ?     | 1087 / 1812 | yes               | 3     |
| C-7                  | 30\*5.56mm      | 30  | 6 / 10 | 40  | 3.6    | 2680  | 2010 / 3350 | -                 | 5     |
| FN-FAL               | 30\*7.62mm NATO | 32  | 5 / 9  | 42  | 4.3    | 2680  | 2010 / 3350 | -                 | 3     |
| FA-MAS               | 30\*5.56mm      | 30  | 5 / 9  | 25  | 3.6    | 1970  | 1477 / 2462 | hard / no         | 5     |
| H&K G41 <br> G41     | 30\*5.56mm      | 29  | 7 / 11 | 30  | 4.1    | ?     | 1215 / 2025 | -                 | 4     |
| H&K G3A3             | 30\*7.62mm NATO | 31  | 7 / 11 | 30  | 4.4    | ?     | 1177 / 1462 | -                 | 3     |
| H&K G11 <br> G11     | 50\*4.7mm       | 27  | 7 / 8  | 30  | 3.8    | ?     | 1847 / 3162 | hard / yes        | 3     |
| M-14                 | 20\*7.62mm NATO | 33  | 7 / 11 | 33  | 2.9    | 2120  | 1540 / 2650 | -                 | 4     |
| Steyr AUG <br> Steyr | 30\*5.56mm      | 30  | 7 / 11 | 50  | 3.6    | 2380  | 1785 / 2475 | hard              | 3     |

## Rifles

| Name          | Mag\*Cal | Dmg | AP  | Rng | Weight | Bobby | Tony       | Repair / Reliable |
| ------------- | -------- | --- | --- | --- | ------ | ----- | ---------- | ----------------- |
| Ruger Mini-14 | 30\*5.56 | 30  | 7   | 25  | 2.9    | 1100  | 825 / 1375 | -                 |

## Sniper Rifles

| Name     | Mag\*Cal       | Dmg | AP  | Rng | Weight | Bobby | Tony        | Repair / Reliable |
| -------- | -------------- | --- | --- | --- | ------ | ----- | ----------- | ----------------- |
| Dragunov | 10\*7.62mm WP  | 36  | 8   | 75  | 4.3    | 1930  | 1447 / 2412 | easy / yes        |
| M24      | 5\*7.62mm NATO | 36  | 11  | 80  | 6.6    | 1950  | 1462 / 2437 | easy / yes        |
| SKS      | 10\*7.62mm WP  | 31  | 7   | 30  | 3.9    | 1350  | 1012 / 1687 | hard / no         |

## Heavy Weapon And Other

| Name                                                                          | Mag\*Cal        | Dmg | AP   | Rng | Weight | Bobby | Tony        | Devin | Repair / Reliable | Note         |
| ----------------------------------------------------------------------------- | --------------- | --- | ---- | --- | ------ | ----- | ----------- | ----- | ----------------- | ------------ |
| Rocket Rifle                                                                  | 5\*Minirockets  | 38  | 9    | 60  | 4.0    | -     | ?           | -     | hard              | H13 Sergeant |
| [Auto Rocket Rifle](./auto-rocket-rifle.md) \*                                | 5\*Minirockets  | 38  | 7/11 | 60  | 4.0    | -     | ?           | -     | hard              | P3-1 Shelter |
| Talon Underslung Grenade Launcher <br> Underslung Grenade Launcher <br> Talon | 1\*40mm         | -   | 13   | 45  | 1.3    | 500   | ?           | 625   | -                 | H13          |
| Grenade Launcher <br> M79                                                     | 1\*40mm grenade | ?   | 18   | 50  | 2.6    | 900   | ?           | ?     | -                 | I13          |
| LAW                                                                           | 1\*rocket       | ?   | 18   | 50  | 2.1    | 500   | ?           | ?     | -                 | N7           |
| Discarded LAW                                                                 | -               | -   | -    | -   | 2.1    | -     | -           | -     | -                 | -            |
| Mortar                                                                        | 1\*Mortar Shell | 1   | 18   | 55  | 7.7    | 1800  | 1350 / 2250 | ?     | ?                 | -            |

## Accessories

| Name         | Weight | Bobby | C5 Tony   | Location |
| ------------ | ------ | ----- | --------- | -------- |
| Duckbill     | 2.0    | 30    | 22 / 37   | -        |
| Bipod        | 0.5    | 50    | 37 / 62   | H13      |
| Laser Scope  | 0.4    | 750   | 562 / 937 | H13      |
| Sniper Scope | 0.4    | 500   | 375 / 625 | H13      |
| Silencer     | 0.5    | 300   | 225 / 375 | N7       |
