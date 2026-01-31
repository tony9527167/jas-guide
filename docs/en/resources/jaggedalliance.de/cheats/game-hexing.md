# game hexing

## Hex-Cheats für Objekte

Hex-Cheats für Objekte - Anleitung V.1.0-beta

Um ein Objekt mittels [CHEATFIND](./cheat-progs.md) zu editieren, startet man zuerst JA2 und schaltet dann per ALT+TAB zurück zum Desktop und ruft CHEATFIND auf. Danach wählt man aus der Liste der aktiven Dateien (Mann, was da für'n Mist in meinem RAM rumhängt - nicht zu fassen ...) JA2.EXE aus.

Nachdem diese Vorbereitung abgeschlossen ist, stößt man mit einem Klick auf "Edit Memory" direkt ins RAM vor. Mit einem Doppelklick auf einen der im unteren Kasten angezeigten Speicherfelder ruft man diesen auf, so daß man ihn im oberen Fenster editieren kann.

Ein Doppelklick auf die entsprechende Zeile zum Verändern, Return zum Abschließen, Esc bricht ab. Vorsicht ist allerdings geboten ! Wenn man zu weit rechts ins Fenster klickt, springt der Editor in den ASCII - Bereich; und der wird dann zwangsläufig verändert, da jeder Tastendruck - also auch Return oder Escape - als Eingabe gewertet werden. Des weiteren ist kein UNDO-Befehl verfügbar, weil das Programm direkt im Speicher schreibt. Wer also hier Mist baut, dem stürzt JA2 gnadenlos ab (also vor dem Editieren speichern !).

Beispiele: Falscher Munitionstyp (na, welches Sturmgewehr kann schon Schrot verfeuern ?), zu viele Gegenstände, ein Wert außerhalb der Programmierung (meist über 100, bei den Aktionspunkten 25) und so fort.

Ich empfehle daher, immer nur den Slot der Führungshand eines Söldners zu editieren, da das wesentlich stabiler zu sein scheint, was Gegenstände anbelangt.

Nun zu den konkreten Werten:

Der erste Söldner-Offset ist `0077C540` und ist der Slot für das Objekt in der Führungshand des Söldners;
alle weiteren Söldner-Offsets ergeben sich durch addieren von 918 (hex) zum vorherigen Söldner. Also:

```txt
0077C540
0077CE58
0077D770
0077E088 usw.
```

Die Anordnung der Slots sieht wie folgt aus:
Zuerst die beiden Hände, dann die drei "großen" Taschen des Inventars, in der Reihenfolge von oben nach unten, dann die mittleren Taschen, dann vorderen, dann das Equipment am Körper und schließlich ein großer Block mit den Attributen des Söldners.

Die genauen Offsets für die einzelnen Slots anzugeben, halte ich für unsinnig, da man mit der Objektliste einfach vergleichen kann, was sich in welcher Tasche befindet (z.B. findet man einen LAW wohl kaum im Slot für den Helm !) und man per Umrechnung der Gesundheitswerte diese leicht ausfindig machen kann.

Auch das Manipulieren der Attribute ist - bis auf die aktuelle Gesundheit vielleicht - sinnlos, da die Daten noch anderweitig gespeichert sind und bei jeder Veränderung (z.B. Anteigen einer Fertigkeit) auf die echten Werte zurückspringen.

Das Format eines Slots ist wie folgt:

Zum Beispiel sieht der Eintrag eines H&K G3A3 so aus:
`1D 00 01 00 64 02 14 00 65 00 64 00 00 00 00 00 D0 00 F1 00 D1 00 36 01 64 64 64 64`

Relevant sind folgende Stellen:
`1D 00 01 00 64 02 14 00 65 00 64 00 00 00 00 00 D0 00 F1 00 D1 00 36 01 64 64 64 64`

```txt
1D 00 - Typ des Objekts (hier G3A3)
01 - Anzahl der Objekte
64 - Zustand des Objekts (64hex = 100dec = 100% OK)
02 - Art der Munition (00 = SMP, 01 = HS, 02 = AP, 04 = Schrot)
14 - Anzahl Schuß im Magazin (14hex = 20dec = 20 Schuß, also ein volles Magazin)
65 - Typ der Munition (65 für 7.62 NATO AP Magazin mit 20 Schuß)
64 - Chance für Ladehemmung (64hex = 100% steht hier für die Chance auf problemloses Funktionieren)
D0 00 - Typ Modifikation 1 (hier Zielfernrohr)
F1 00 - Typ Modifikation 2 (hier Laserpointer)
D1 00 - Typ Modifikation 3 (hier Zweibein)
36 01 - Typ Modifikation 4 (hier Gewehrlaufverlängerung)
64- Zustand Modifikation 1
64 - Zustand Modifikation 2
64 - Zustand Modifikation 3
64 - Zustand Modifikation 4
```

Bei zwei Erste-Hilfe-Sets sieht der Eintrag etwas anders aus:
`C9 00 02 00 32 64`

Das bedeutet:

```txt
C9 00 - Typ
02 - Anzahl
32 - Zustand Objekt 1 (hier 50%)
64 - Zustand Objekt 2 (hier 100%)
```

Auf diese Art lassen sich bis zu 6 Objekte in einen Slot setzen, auch wenn eigentlich nur weniger hineinpassen. Und auch diese Objekte lassen sich modifizieren ! Hier kann allerdings nur EINE Modifikation vorgenommen werden; die gilt dann allerdings für ALLE Objekte des Slots (da man ja nur gleiche Objekte in eine Tasche stecken kann). Ein Beispiel wären die Sprengstoffe, die als Modifikation Zeit- oder Funkzünder akzeptieren.

Der Eintrag für die momentane Gesundeheit eures Söldners findet sich in dem großen Block mit Daten nach dem Aussehen (BROWNHEAD, REDVEST, ...), genauso wie die Zeiteinheiten. Man suche sich den Wert (bei mehreren Möglichkeiten einfach bewegen und nochmal schauen), trage ihn unter "Search Value" - "Add" in das Profil ein und friere den Wert bei 25 ein (Vorsicht! CHEATFIND zeigt die Werte als Dezimalzahl und nicht im Hex-Code an !). Voila ! Nun könnt ihr mit einem Söldner ganz Arulco im Nullkommagarnixodernochweniger erobern.

Zum Thema Fahrzeuge:

Ich habe mich zwar schon an den Fahrzeugen versucht, doch scheinen Modifikationen hier immer und unausweichlich zu Fehlern zu führen, wohl weil die Fahrzeuge zu sehr an die Questen gebunden sind. Man kann die Fahrzeuge zwar editieren, und auch von Anfang an mit dem Hummvee durchs Gelände preschen, aber später im Plot stürzt Jagged Alliance immer wieder ab, da die Werte anscheined die Quests sprengen. Also: Sorry, aber is' nich'.

Viel Spaß trotzdem !

Darkfire

## Hex-Cheats für Objekte

Hex-Cheats für Objekte - Liste V.1.0-beta

Da die Savegames verschlüsselt sind müst ihr CHEATFIND benutzen, um den Spielstand direkt im Speicher zu bearbeiten.

| Hex-Code | Objekt                    | Hex-Code | Objekt                      |
| -------- | ------------------------- | -------- | --------------------------- |
| 00F6     | UV-Sichtgerät             | 6100     | 7.62 WP AP-Magazin (30)     |
| 0100     | Glock 17                  | 6200     | 7.62 WP HS-Magazin (10)     |
| 0101     | Porno                     | 6300     | 7.62 WP HS-Magazin (30)     |
| 0200     | Glock 18                  | 6400     | 7.62 NATO AP Mag. (5)       |
| 0201     | Videokamera               | 6500     | 7.62 NATO AP Mag. (20)      |
| 0300     | Beretta 92F               | 6600     | 7.62 NATO HS Mag. (5)       |
| 0301     | Roboter-Fernsteuerung     | 6700     | 7.62 NATO HS Mag. (20)      |
| 0400     | Beretta 93R               | 6800     | 4.7mm Caseless Magazin      |
| 0401     | Monsterklaue              | 6900     | 5.7mm AP-Magazin            |
| 0500     | .38 Special               | 6A00     | 5.7mm HS-Magazin            |
| 0501     | Monsterfleisch            | 6B00     | 12gauge Patronen            |
| 0600     | Barracuda                 | 6C00     | 12gauge Schrotpatronen      |
| 0601     | Monsterorgan              | 6D00     | CAWS Magazin                |
| 0700     | Desert Eagle              | 6E00     | CAWS Schrotmagazin          |
| 0701     | Türöffner                 | 6F00     | Miniraketen AP              |
| 0800     | Colt .45                  | 7000     | Miniraketen HE              |
| 0801     | Platinuhr                 | 7100     | Miniraketen HEAP            |
| 0900     | H&K MP5K                  | 7200     | Betäubungspfeil             |
| 0901     | Golfschläger              | 8300     | Vakuumgranate               |
| 0A00     | Ingram MAC-10             | 8400     | Tränengasgranate            |
| 0A01     | Walkman                   | 8500     | Senfgasgranate              |
| 0B00     | Thompson M1A1             | 8600     | Minihandgranate             |
| 0B01     | Fernseher                 | 8700     | Normale Handgranate         |
| 0C00     | Colt Commando             | 8800     | Glas mit Cyclonitkristallen |
| 0D00     | H&K MP53                  | 8900     | TNT                         |
| 0D01     | Zigarren                  | 8A00     | HMX                         |
| 0E00     | AKSU-74                   | 8B00     | C1                          |
| 0F00     | FN-P90                    | 8C00     | Mörsergranate               |
| 0F01     | Kleiner Schlüssel         | 8D00     | Landmine                    |
| 1000     | Typ-85                    | 8E00     | C4                          |
| 1001     | Gefängnisschlüssel        | 8F00     | Leuchtmine                  |
| 1100     | SKS Karabiner             | 9000     | Leucht-Alarmmine            |
| 1101     | Einfacher Schlüssel       | 9100     | Plastiksprengladung         |
| 1200     | Dragunov                  | 9200     | Leuchtstab                  |
| 1201     | Glanzloser Schlüssel      | 9300     | 40mm Splittergranate        |
| 1300     | M24                       | 9400     | 40mm Vakuumgranate          |
| 1301     | Glänzender Schlüssel      | 9500     | 40mm Betäubungsgranate      |
| 1400     | Steyr AUG                 | 9600     | 40mm Rauchgranate           |
| 1401     | Vorhängeschloss-Schlüssel | 9700     | Rauchgranate                |
| 1500     | H&K G41                   | A100     | Splitterschutzweste         |
| 1501     | Elektronischer Schlüssel  | A200     | Splitterschutz mit Comp.18  |
| 1600     | Ruger Mini-14             | A300     | Splitterschutz, beschichtet |
| 1601     | Codekarte                 | A400     | Kevlarweste                 |
| 1700     | C7 / M16A2                | A500     | Kevlarweste mit Comp.18     |
| 1800     | FA-MAS                    | A600     | Kevlarweste, beschichtet    |
| 1900     | AK-74                     | A700     | Spectraweste                |
| 1A00     | AKM                       | A800     | Spectraweste mit Comp.18    |
| 1B00     | M14                       | A900     | Spectraweste, beschichtet   |
| 1C00     | FN-FAL                    | AA00     | Kevlarleggins               |
| 1D00     | H&K G3A3                  | AB00     | Kevlarleggins mit Comp.18   |
| 1E00     | H&K G11                   | AC00     | Kevlarleggins, beschichtet  |
| 1F00     | Remington 870             | AD00     | Spectraleggins              |
| 2000     | SPAS-15                   | AE00     | Spectraleggins mit Comp.18  |
| 2100     | H&K CAWS                  | AF00     | Spectraleggins, beschichtet |
| 2200     | FN Minimi                 | B000     | Stahlhelm                   |
| 2300     | RPK-74                    | B100     | Kevlarhelm                  |
| 2400     | H&K 21                    | B200     | Kevlarhelm mit Comp.18      |
| 2500     | Kampfmesser               | B300     | Kevlarhelm, beschichtet     |
| 2600     | Wurfmesser                | B400     | Spectrahelm                 |
| 2700     | Stein                     | B500     | Spectrahelm mit Comp.18     |
| 2800     | M79                       | B600     | Spectrahelm, beschichtet    |
| 2900     | Mörser                    | B700     | Keramikplatten              |
| 2A00     | Ein weiterer Stein        | BC00     | Lederjacke                  |
| 2F01     | Silbertablett             | BD00     | Kevlar-Lederjacke           |
| 3001     | Klebeband                 | BE00     | Kevlar-Lederjacke + C18     |
| 3100     | Schlagring                | BF00     | Kevlar-Lederjacke, besch.   |
| 3101     | Alustange                 | C200     | Deidranna T-Shirt           |
| 3200     | TALON                     | C400     | Guardian Weste              |
| 3201     | Feder                     | C500     | Guardian Weste + C18        |
| 3300     | LAW                       | C600     | Guardian Weste,beschichtet  |
| 3301     | Bolzen mit Feder          | C900     | Erste-Hilfe-Kasten          |
| 3401     | Stahlrohr                 | CA00     | Arztkoffer                  |
| 3501     | Sekundenkleber            | CB00     | Werkzeugkasten              |
| 3600     | Machete                   | CC00     | Schlüsselset                |
| 3601     | Gewehrlaufverlängerung    | CD00     | Tarnset                     |
| 3700     | Raketengewehr             | CE00     | Sprengfallensatz            |
| 3701     | Schnur                    | CF00     | Schalldämpfer               |
| 3800     | Automag III               | D000     | Zielfernrohr                |
| 3801     | Dose                      | D100     | Ständer                     |
| 3901     | Dose mit Schnur           | D200     | Lauschmikrofon              |
| 3A01     | Murmeln                   | D300     | IR-Nachtsichtgerät          |
| 3B01     | Lame-Boy                  | D400     | Sonnenbrille                |
| 3C00\*   | Panzerkanone              | D500     | Gasmaske                    |
| 3C01     | Cu-Draht                  | D600     | Feldflasche                 |
| 3D00     | Pfeilpistole              | D700     | Metalldetektor              |
| 3D01     | Lame-Boy + Cu-Draht       | D800     | Compound 18                 |
| 3E00     | Blutiges Wurfmesser       | D900     | Glas voll Monsterglibber    |
| 3E01     | Kid-Tendo „Fumble-Pak"    | DA00     | Monsterglibber              |
| 3F00\*   | Flammenwerfer             | DB00     | Geld                        |
| 3F01     | Röntgenröhre              | DC00     | Einmachglas                 |
| 4000     | Stemmeisen                | DD00     | Glas voll Monsterblut       |
