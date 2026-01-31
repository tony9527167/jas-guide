# JA2 Demo Hexing

Hex Tricks: For all "Jagged Alliance 2" addicts, here are a few tricks for the German demo to help bridge the long wait until the release of "Jagged Alliance 2."

To do this, you'll need a hex editor.

Important: Before you begin, you should definitely make backup copies of your save-games. A single wrongly placed pair of numbers and your save game is gone—frustrating if that happens with your last mercenary!

And here's how to proceed:

- Open the corresponding save game  
  (in my example, a newly started game)

- Find the mercenary you want to edit  
  (in my example, Ivan – offset `0001D090`)

- Find the item you want to edit and then follow the procedure shown in the example:

Ivan is holding an AK‑47 in his hand. The value for an AK‑47 is 19, so you search for the following number sequence:

```txt
1900 0100 6402 1E00 5C00 64

19 Represents the AK‑47

01 Quantity (one AK‑47)

64 Condition of the object(s) (64 = 100%)
02 For this weapon, the type of ammunition (armor‑piercing = red). Best not to change this value!

1E Indicates that the magazine contains 30 rounds

5C Specifies the type of magazine (5.45mm magazine)

64 Must remain here, otherwise you'll get a kind of jamming effect
```

If we want to give Ivan a Commando Colt instead of his AK‑47, we change `1900 0100 6402 1E00 5C00 64` to

```txt
0C00 0100 64 02 1E00 5E00

0C Represents the Commando Colt
5E Specifies the type of magazine (5.56mm magazine)
```

If Ivan isn't satisfied with his new rifle, then we'll equip the Commando Colt with an additional…

Laser pointer and a scope

```txt
0C00 0100 64 02 1E00 5E00 64
F100 D000 0000 0000 6464 0000
```

```txt
F1 Represents the laser pointer

D0 Represents the scope
```

The two instances of 64 mean that both items are at 100% condition.  
At all the underlined positions, you can attach items.  
For each item, a condition value (64) must be entered at the marked positions (shown in bold).  
The "01" for a single item is omitted here.

If we want to give Ivan two hand grenades instead of a rifle, it looks like this:

```txt
8700 0200 6464

87 Represents a hand grenade
02 Quantity (two hand grenades)
64 and
64 Condition of both grenades (100%)
```

For a LAW, it looks like this: `3300 0100 6400 0100 0000 6400`

Before saving, if you have—for example—three magazines in one pocket, you should place each one into a different pocket. This way, there are more items available that you can then convert.

WARNING: Be careful not to turn a grenade that is stored in a small pocket into a rifle (which theoretically wouldn't fit there), as the program may occasionally crash because of this.

And now here is the list of items (valid also for the English version):

Pistols

| Weapon          | Suitable Ammunition  |
| --------------- | -------------------- |
| 01 Glock17      | 49 9mm               |
| 02 Glock18      | 49 9mm               |
| 03 Beretta 92F  | 49 9mm               |
| 04 Beretta92R   | 49 9mm               |
| 05 .38 Colt     | 4E .38 speed loader  |
| 06 Barracuda    | 58 .357 speed loader |
| 07 Desert Eagle | 59 .357 magazine     |
| 08 .45 Colt     | 52 .45 magazine      |

Submachine Guns

| Weapon      | Suitable Ammunition   |
| ----------- | --------------------- |
| 09 H&K MP5K | 4A 9mm SMG magazine   |
| 10 Type 85  | 61 7.62mm WP magazine |
| 0A Mac-10   | 53 .45 SMG magazine   |
| 0E AKS-74   | 5C 5.45mm magazine    |

Assault Rifles

| Weapon           | Suitable Ammunition   |
| ---------------- | --------------------- |
| 11 SKS           | 61 7.62mm WP magazine |
| 14 Steyr AUG     | 5E 5.56mm magazine    |
| 15 H&K G41       | 5E 5.56mm magazine    |
| 16 Ruger Mini-14 | 5E 5.56mm magazine    |
| 17 C-7 / M16-A2  | 5E 5.56mm magazine    |
| 18 Fa-Mas        | 5E 5.56mm magazine    |
| 19 AK-47         | 5C 5.45mm magazine    |
| 1A AKM           | 61 7.62mm magazine    |
| 0B Thompson M1A1 | 53 .45 SMG magazine   |
| 1B M14           | 65 7.62 NATO magazine |
| 0C Commando Colt | 5E 5.56mm magazine    |
| 0D H&K MP53      | 5E 5.56mm magazine    |
| 1D G3            | 65 7.62 NATO magazine |
| 1E H&K G11       | 67 4.7mm magazine     |

Sniper Rifles

| Weapon      | Suitable Ammunition     |
| ----------- | ----------------------- |
| 12 Dragunov | 60 7.62mm WP magazine   |
| 13 M24      | 64 7.62mm NATO magazine |

Light Machine Guns

| Weapon               | Suitable Ammunition |
| -------------------- | ------------------- |
| 23 RPK-74            | 5C 5.56mm magazine  |
| 24 H&K21             | 65 7.62mm magazine  |
| 22 FN Minimi / M-249 | 5E 5.56mm magazine  |

Shotguns

| Weapon            | Suitable Ammunition        |
| ----------------- | -------------------------- |
| 1F Remington M870 | 6C 12-gauge shotgun shells |
| 20 Spas-15        | 6C 12-gauge magazine       |
| 21 CAWS           | 6D CAWS magazine           |

Weapon Accessories

| Item             | Suitable Attachment |
| ---------------- | ------------------- |
| F1 Laser Pointer | D1 Bipod            |
| D0 Scope         | F4 Duckbill         |
| CF Silencer      | -                   |

Melee Weapons

| Code | Weapon                |
| ---- | --------------------- |
| 25   | Combat Knife          |
| 26   | Throwing Knife        |
| 3E   | Bloody Throwing Knife |
| 36   | Machete               |
| 27   | Stone                 |

Grenade and Rocket Launchers

```txt
33 LAW
32 Portable Grenade Launcher (40mm)
28 Grenade Launcher (40mm)
```

Grenades

| Weapon          | Suitable Ammunition      |
| --------------- | ------------------------ |
| 84 Tear Gas     | 94 40mm Tear Gas Grenade |
| 85 Mustard Gas  | 95 40mm Stun Grenade     |
| 86 Mini Grenade | 96 40mm Smoke Grenade    |
| 87 Hand Grenade | 97 Smoke Grenade         |
| 93 40mm Grenade | -                        |

Explosives:

```txt
8E C-4
8A HMX
B8 C-1
8D Landmine
91 Plastic Explosive Charge
89 TNT
90 Tripwire with Alarm Mine
8F Tripwire with Flare Mine
```

Accessories for Explosives:

```txt
DF Detonator
F2 Remote Detonator
D7 Metal Detector
```

Helmets

```txt
B0 Steel Helmet
B1 Kevlar Helmet
B2 Reinforced Kevlar Helmet (C18)
B3 Coated Kevlar Helmet
B4 Spectra Helmet
B5 Reinforced Spectra Helmet
B6 Coated Spectra Helmet
```

Vests

```txt
A1 Flak Jacket
A2 Reinforced Flak Jacket
A3 Coated Flak Jacket
A4 Kevlar Vest
A5 Reinforced Kevlar Vest
A6 Coated Kevlar Vest
A7 Spectra Vest
A8 Reinforced Spectra Vest
A9 Coated Spectra Vest
```

Protective Pants:

```txt
AA Kevlar Leggings
AB Reinforced Kevlar Leggings
AC Coated Kevlar Leggings
AD Spectra Leggings
AE Reinforced Kevlar Leggings
AF Coated Kevlar Leggings
```

Medical:

```txt
C9 First Aid Kit
CA Medical Kit
```

Aids:

```txt
EB Regeneration Booster
DE Energy Booster
```

Tools:

```txt
CB Toolbox
DA Crowbar
CC Lock picking Tool
F3 Wire Cutter
```

Face Protection, etc.:

```txt
D4 Glasses
D3 Night Vision Device
D5 Gas Mask
D2 Directional Microphone
```

Drinks:

```txt
F5 Alcohol
FF Wine
D6 Canteen
```

Other Useful Items:

```txt
CD Camouflage Kit
DB Money
C2 T-Shirt
92 Glow Stick
D8 C-18
```

Useless Items:

```txt
F7 Used LAW
F0 Ownership
```

Other useless items, such as "Spit of the Monster Queen" (30) and the M224 Mortar (29, ammunition 8C) which does not work—and of which there are masses—are not included in my list.

A little further down, below the section for your own mercenaries, is the section for the enemies. These can not only be equipped as you like, but also dressed up in style:

You simply swap Green-pants with Red-pants. This can also be done with hair and skin color.

Health and more:

```txt
0064 6400 0000 5A5F 5753 0423 5C0F 0E37 . d d . . . Z _ W S . # \ . . 7

0000 1C00 4900 7600 6100 6E00 0000 0000 . . . . I .v. a . n . . . . .

0000 0000 0000 0000 0101 000E 0000 0020 . . . . . . . . . . . . . . . .

B244 00C0 2D44 0020 B244 00C0 2D44 AE2B . D . . ï¿½ D . .D . . ï¿½ D . +

AE2B 0600 0000 0000 0000 0000 0100 0000 . + . . . . . . . . . . . . . .

FF00 017D FE00 0100 0000 0000 0000 0000 . . . } . . . . . . . . . . . . .
```

In the first line you will find the mercenary's health and abilities. In the line below is the name, which can also be changed if needed (don't forget the dots between the letters!!!).

One last tip:

Anyone who just wants to quickly edit their mercenaries should download the editor by Guybrush Threepwood (the link can be found on this page). However, you will have to accept a few small errors when using it. If you want to be more precise, you can always do it with the hex editor.

---

I hope this can extend the fun of the demo.

For questions:

Email: andreas.trafojer@rolmail.net

(but please not for every little thing!)

Have fun

Andreas Trafojer
