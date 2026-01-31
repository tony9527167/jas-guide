# JA2 Game Hexing

## Hex-Cheats for Objects – Instructions

Hex-Cheats for Objects – Instructions v1.0-beta

To edit an object using [CHEATFIND](./cheat-progs.md), first start JA2, then switch back to the desktop with ALT+TAB and launch CHEATFIND. From the list of active files (you'll be surprised what junk is sitting in RAM…), select JA2.EXE.

After completing this preparation, a click on "Edit Memory" takes you directly into RAM.  
By double-clicking one of the memory fields shown in the lower box, you can open it for editing in the upper window.

Double-click the line you want to edit, press Return to confirm, or Esc to cancel.  
Caution: If you click too far to the right in the window, the editor switches into the ASCII area. Every keystroke there—including Return or Escape—is treated as input and will alter the data.
Also note: there is no UNDO command, since the program writes directly into memory. Mistakes will cause JA2 to crash mercilessly—so always save before editing!

Examples:

- Wrong ammunition type (after all, what assault rifle can fire shotgun shells?).
- Too many items in a slot.
- A value outside the programmed limits (usually above 100, or above 25 for action points).  
  …and so on.

I therefore recommend editing only the primary hand slot of a mercenary, as this appears to be much more stable when it comes to handling items.

Now to the specific values:

The first mercenary offset is `0077C540`, which corresponds to the slot for the item in the mercenary's primary hand.  
All further mercenary offsets are obtained by adding _918 (hex)_ to the previous mercenary's offset. For example:

```txt
0077C540
0077CE58
0077D770
0077E088 usw.
```

The arrangement of the slots is as follows:  
First come the two hands, then the three large inventory pockets (from top to bottom), followed by the middle pockets, then the front pockets, then the equipment worn on the body, and finally a large block containing the mercenary's attributes.

Listing the exact offsets for each slot seems unnecessary, since you can simply compare with the object list to see what belongs in which pocket (for example, you're unlikely to find a LAW rocket in the helmet slot!). By converting health values, you can also locate them easily.

Editing attributes is mostly pointless—except perhaps for current health—since the data is stored elsewhere. Any change (for example, displaying a skill) will cause the values to revert back to the real ones.

The format of a slot is as follows:

For example, the entry for an H&K G3A3 looks like this:  
`1D 00 01 00 64 02 14 00 65 00 64 00 00 00 00 00 D0 00 F1 00 D1 00 36 01 64 64 64 64`

The following positions are relevant:  
`1D 00 01 00 64 02 14 00 65 00 64 00 00 00 00 00 D0 00 F1 00 D1 00 36 01 64 64 64 64`

```txt
1D 00 – Object type (here G3A3)
01 – Quantity of objects
64 – Condition of the object (64 hex = 100 dec = 100% OK)
02 – Ammo type (00 = SMP, 01 = HP, 02 = AP, 04 = Shotgun)
14 – Number of rounds in the magazine (14 hex = 20 dec = 20 rounds, i.e. full magazine)
65 – Ammo ID (65 = 7.62 NATO AP magazine with 20 rounds)
64 – Jam chance (64 hex = 100% = flawless function)
D0 00 – Modification type 1 (scope)
F1 00 – Modification type 2 (laser sight)
D1 00 – Modification type 3 (bipod)
36 01 – Modification type 4 (barrel extension)
64 – Condition of modification 1
64 – Condition of modification 2
64 – Condition of modification 3
64 – Condition of modification 4
```

For two First Aid Kits, the entry looks a bit different:  
`C9 00 02 00 32 64`

This means:

```txt
C9 00 – Object type
02 – Quantity
32 – Condition of object 1 (here 50%)
64 – Condition of object 2 (here 100%)
```

In this way, up to six objects can be placed into a single slot, even though normally fewer would fit. These objects can also be modified! However, only one modification can be applied, and it will affect all objects in the slot (since only identical items can be stacked in one pocket).

An example would be explosives, which can accept either a timed or remote detonator as a modification.

The entry for your mercenary's current health can be found in the large block of data after the appearance settings (BROWN HEAD, RED VEST, …), just like the time units.  
Locate the value (if there are multiple possibilities, simply move around and check again), enter it under "Search Value" → "Add" in the profile, and freeze the value at 25.  
Note: CHEATFIND displays values as decimal numbers, not in hex code!

Voilà! With this, a single mercenary can conquer all of Arulco in no time flat—or even less.

Regarding vehicles:

I've already experimented with vehicles, but modifications here always and inevitably lead to errors, most likely because vehicles are too tightly bound to the quests.  
You _can_ edit vehicles and even race across the terrain with the Humvee from the very beginning, but later in the plot Jagged Alliance repeatedly crashes, since the altered values apparently break the quest logic.

So: Sorry, but it doesn't work.

Enjoy nonetheless!

## Hex-Cheats for Objects – List

Hex-Cheats for Objects – List v1.0-beta

Since the save-games are encrypted, you must use [CHEATFIND](./cheat-progs.md) to edit the game state directly in memory.

| Hex Code | Object (English) | Hex Code | Object (English)            |
| -------- | ---------------- | -------- | --------------------------- |
| 00F6     | UV Goggles       | 6100     | 7.62 WP AP Magazine (30)    |
| 0100     | Glock 17         | 6200     | 7.62 WP HP Magazine (10)    |
| 0101     | Porn Magazine    | 6300     | 7.62 WP HP Magazine (30)    |
| 0200     | Glock 18         | 6400     | 7.62 NATO AP Magazine (5)   |
| 0201     | Video Camera     | 6500     | 7.62 NATO AP Magazine (20)  |
| 0300     | Beretta 92F      | 6600     | 7.62 NATO HP Magazine (5)   |
| 0301     | Robot Remote     | 6700     | 7.62 NATO HP Magazine (20)  |
| 0400     | Beretta 93R      | 6800     | 4.7mm Caseless Magazine     |
| 0401     | Monster Claw     | 6900     | 5.7mm AP Magazine           |
| 0500     | .38 Special      | 6A00     | 5.7mm HP Magazine           |
| 0501     | Monster Meat     | 6B00     | 12 Gauge Shells             |
| 0600     | Barracuda        | 6C00     | 12 Gauge Buckshot           |
| 0601     | Monster Organ    | 6D00     | CAWS Magazine               |
| 0700     | Desert Eagle     | 6E00     | CAWS Buckshot Magazine      |
| 0701     | Locksmith Kit    | 6F00     | Mini-Rockets AP             |
| 0800     | Colt .45         | 7000     | Mini-Rockets HE             |
| 0801     | Platinum Watch   | 7100     | Mini-Rockets HEAP           |
| 0900     | H&K MP5K         | 7200     | Tranquilizer Dart           |
| 0901     | Golf Club        | 8300     | Vacuum Grenade              |
| 0A00     | Ingram MAC-10    | 8400     | Tear Gas Grenade            |
| 0A01     | Walkman          | 8500     | Mustard Gas Grenade         |
| 0B00     | Thompson M1A1    | 8600     | Mini Hand Grenade           |
| 0B01     | Television       | 8700     | Standard Hand Grenade       |
| 0C00     | Colt Commando    | 8800     | Jar with Cyclonite Crystals |
| 0D00     | H&K MP53         | 8900     | TNT                         |
| 0D01     | Cigars           | 8A00     | HMX                         |
| 0E00     | AKSU-74          | 8B00     | C1 Explosive                |
| 0F00     | FN-P90           | 8C00     | Mortar Shell                |
| 0F01     | Small Key        | 8D00     | Landmine                    |
| 1000     | Type-85          | 8E00     | C4 Explosive                |
| 1001     | Prison Key       | 8F00     | Flare Mine                  |
| 1100     | SKS Carbine      | 9000     | Flare Alarm Mine            |
| 1101     | Simple Key       | 9100     | Plastic Explosive           |
| 1200     | Dragunov         | 9200     | Glow Stick                  |
| 1201     | Dull Key         | 9300     | 40mm Fragmentation Grenade  |
| 1300     | M24              | 9400     | 40mm Vacuum Grenade         |
| 1301     | Shiny Key        | 9500     | 40mm Stun Grenade           |
| 1400     | Steyr AUG        | 9600     | 40mm Smoke Grenade          |
| 1401     | Padlock Key      | 9700     | Smoke Grenade               |
| 1500     | H&K G41          | A100     | Flak Jacket                 |
| 1501     | Electronic Key   | A200     | Flak Jacket + Comp.18       |
| 1600     | Ruger Mini-14    | A300     | Coated Flak Jacket          |
| 1601     | Code Card        | A400     | Kevlar Vest                 |
| 1700     | C7 / M16A2       | A500     | Kevlar Vest + Comp.18       |
| 1800     | FA-MAS           | A600     | Coated Kevlar Vest          |
| 1900     | AK-74            | A700     | Spectra Vest                |
| 1A00     | AKM              | A800     | Spectra Vest + Comp.18      |
| 1B00     | M14              | A900     | Coated Spectra Vest         |
| 1C00     | FN-FAL           | AA00     | Kevlar Leggings             |
| 1D00     | H&K G3A3         | AB00     | Kevlar Leggings + Comp.18   |
| 1E00     | H&K G11          | AC00     | Coated Kevlar Leggings      |
| 1F00     | Remington 870    | AD00     | Spectra Leggings            |
| 2000     | SPAS-15          | AE00     | Spectra Leggings + Comp.18  |
| 2100     | H&K CAWS         | AF00     | Coated Spectra Leggings     |
| 2200     | FN Minimi        | B000     | Steel Helmet                |
| 2300     | RPK-74           | B100     | Kevlar Helmet               |
| 2400     | H&K 21           | B200     | Kevlar Helmet + Comp.18     |
| 2500     | Combat Knife     | B300     | Coated Kevlar Helmet        |
