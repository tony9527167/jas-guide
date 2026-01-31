# Hexerei

Hexerei:

Für alle "Jagged Alliance2-Süchtigen" hier ein paar Tricks für die deutsche Demo, um die lange Zeit bis zum Erscheinungstermin für "Jagged Alliance2" zu überbrücken.

Dazu benötigt man einen Hex-Editor.

WICHTIG:Bevor man beginnt sollte man unbedingt Sicherheitskopien von den Savegames machen.Ein falsch gesetztes Zahlenpaar und ihr könnt das Savegame versgessen(Ärgerlich wenn das dann beim letzten Söldner passiert!!!!)

Und so wird vorgegangen:

-Man öffnet das entsprechende Savegame
(In meinem Beispiel ein gerade angefangenes Spiel)

-Man sucht den Söldner den man bearbeiten möchte
(In meinem Beispiel Ivan ï¿½ Offset `0001D090`)

-Man sucht einen Gegenstand den man bearbeiten möchte und geht dann so vor wie im Beispiel:

Ivan hält eine Ak-47 in seiner Hand

Der Wert für eine Ak-47 ist 19,man sucht dann folgende Zahlenkombination:

```txt
1900 0100 6402 1E00 5C00 64

19 bedeutet die Ak-47

01 bedeutet die Anzahl (eine AK-47)

64 bedeutet der Zustand des/der Objekte (64 =100%)
02 bedeutet bei dieser Waffe die Art der Munition (panzerbrechend=rot) an.Wert besser nicht verändern!

1E bedeutet daß das Magazin 30 Schuß enthält

5C gibt die Art des Magazins an(5.45mm Magazin)

64 sollte unbedingt dort stehen da es sonst eine Art Ladehemmung gibt
```

Wollen wir Ivan statt seiner Ak-47 ein Commando Colt geben ändern wir `1900 0100 6402 1E00 5C00 64` in

```txt
0C00 0100 64 02 1E00 5E00 um.
0C bedeutet Commando Colt
5E bedeutet das 5.56mmMagazin
```

Gibt sich Ivan mit seiner neuen Flinte nicht zufrieden,dann verpassen wir dem Commando Colt noch einen

Laserpointer und ein Zielfernrohr

```txt
0C00 0100 64 02 1E00 5E00 64
F100 D000 0000 0000 6464 0000
```

```txt
F1 bedeutet Laserpointer

D0 bedeutet das Zielfernrohr
```

Das zweimal 64 bedeutet daß beide Gegenstände 100% sind.An allen unterstrichenen Positionen kann man Gegenstände anbringen.Für jeden Gegenstand muß an den gekennzeichneten Positionen (Fett geschrieben eine Zustandszahl (64)stehen.Das 01 für einen Gegenstand entfällt hier.

Wollen wir Ivan satt einem Gewehr zwei Handgranaten geben sieht das dann so aus:

```txt
8700 0200 6464
87 bedeutet Handgranate
02 bedeutet zwei Handgranaten
64 und
64 bedeutet der Zustand der beiden Granaten (100%)
```

Bei einer Law sieht das dann so aus :

`3300 0100 6400 0100 0000 6400`

Bevor man speichert sollte man,wenn man z.B. drei Magazine in einer Tasche hat, jedes einzelne in eine verschiedene Tasche stecken so gibt es mehr Gegenstände die man dann umwandeln kann.

ACHTUNG!Achtet darauf daß ihr nicht aus einer, in einer kleinen Tasche steckenden, Granate ein Gewehr macht (daß theoretisch darin nicht Platz hat),das Programm könnte gelegentlich dadurch abstürzen.

Und hier nun die Liste mit den Gegenständen (gültige auch für die englische Version):

Pistolen

| Waffe           | Geeignete Munition dafür |
| --------------- | ------------------------ |
| 01 Glock17      | 49 9mm                   |
| 02 Glock18      | 49 9mm                   |
| 03 Beretta 92F  | 49 9mm                   |
| 04 Beretta92R   | 49 9mm                   |
| 05 38er Colt    | 4E 38er Schnellader      |
| 06 Barracuda    | 58 357er Schnellader     |
| 07 Desert Eagle | 59 357er Magazin         |
| 08 45.Colt      | 52 45er Magazin          |

Maschinenpistolen

| Waffe       | Geeignete Munition dafür |
| ----------- | ------------------------ |
| 09 H&K MP5K | 4A 9mm SMP Magazin       |
| 10 Typ.85   | 61 7.62mm Wp Magazin     |
| 0A Mac-10   | 53 45er SMP Magazin      |
| 0E Aks4-74  | 5C 5.45mm Magazin        |

Sturmgewehre

| Waffe              | Geeignete Munition dafür |
| ------------------ | ------------------------ |
| 11 Sk5 61          | 7.62mm Wp Magazin        |
| 14 Steyr Aug 5E    | 5.56mm Magazin           |
| 15 H&K G41         | 5E 5.56mm Magazin        |
| 16 Ruger Mini M-14 | 5E 5.56mm Magazin        |
| 17 C-7/M16-A2      | 5E 5.56mm Magazin        |
| 18 Fa-Mas          | 5E 5.56mm Magazin        |
| 19 Ak-47           | 5C 5.45mm Magazin        |
| 1A AKM             | 61 7.62mm Magazin        |
| 0B Thompson M1A1   | 53 45er SMP Magazin      |
| 1B M14             | 65 7.62 NATO Magazin     |
| 0C Commando Colt   | 5E 5.56mm Magazin        |
| 0D H&K MP53        | 5E 5.56mm Magazin        |
| 1D G3              | 65 7.62mm NATO Magazin   |
| 1E H&K G11         | 67 4.7mm Magazin         |

Scharfschützengewehre

| Waffe       | Geeignete Munition dafür |
| ----------- | ------------------------ |
| 12 Dragonov | 60 7.62mm Wp Magazin     |
| 13 M24      | 64 7.62mm NATO Magazin   |

Leichte Maschinengewehre

| Waffe                   | Geeignete Munition dafür |
| ----------------------- | ------------------------ |
| 23 RPK-74               | 5C 5.56mm Magazin        |
| 24 H&K21                | 65 7.62mm Magazin        |
| 22 FN Minimi <br> M-249 | 5E 5.56mm Magazin        |

Schrotflinten

| Waffe             | Geeignete Munition dafür    |
| ----------------- | --------------------------- |
| 1F Remington M870 | 6C Kaliber12 Schrotpatronen |
| 20 Spas-15        | 6C Kaliber12 Magazin        |
| 21 CAW5           | 6D CAW5 Magazin             |

Zubehör für Schußwaffen

| Waffe            | Geeignete Munition dafür |
| ---------------- | ------------------------ |
| F1 Laserpointer  | D1 Stützen               |
| D0 Zielfernrohr  | F4 Duckbill              |
| CF Schalldämpfer | -                        |

Nahkampfwaffen:

```txt
25 Kampfmesser
26 Wurfmesser
3E blutiges Wurmesser
36 Machete
27 Stein
```

Granat- und Raketenwerfer:

```txt
33 Law
32 Tragbarer Granatwerfer (40mm)
28 Granatwerfer (40mm)
```

Granaten

| Waffe              | Geeignete Munition dafür  |
| ------------------ | ------------------------- |
| 84 Tränengas       | 94 40mm Tränengasgranate  |
| 85 Senfgas         | 95 40mm Betäubungsgranate |
| 86 Minihandgranate | 96 40mm Rauchgranate      |
| 87 Handgranate     | 97 Rauchgranate           |
| 93 40mm Granate    | -                         |

Sprengstoffe:

```txt
8E C-4
8A HMX
B8 C-1
8D Landmine
91 Plastiksprengladung
89 TNT
90 Stolperdraht mit Alarmmine
8F Stolperdraht mit Leuchtmine
```

Zubehör für Sprengstoffe:

```txt
DF Zünder
F2 Fernzünder
D7 Metalldedektor
```

Helme

```txt
B0 Stahlhelm
B1 Kevlarhelm
B2 verstärkter Kevlarhelm (C18)
B3 beschichteter Kevlarhelm
B4 Spectrahelm
B5 Verstärkter Spectrahelm
B6 Beschichteter Spectrahelm
```

Schutzwesten:

```txt
A1 Splitterschutzweste
A2 verstärkte Splitterschutzweste
A3 beschichtete Splitterschutzweste
A4 Kevlarweste
A5 verstärkte Kevlarweste
A6 beschichtete Kevlarweste
A7 Spectraweste
A8 verstärkte Spectraweste
A9 beschichtete Spectraweste
```

Schutzhosen:

```txt
AA Kevlarleggins
AB verstärkte Kevlarleggins
AC beschichtete Kevlarleggins
AD Spectraleggins
AE vertstärkte Kevlarleggins
AF beschichtete Kevlarleggins
```

Medizinische:

```txt
C9 Erste Hilfe Päckchen
CA Verbandskasten
```

Hilfsmittel:

```txt
EB Regenerations-Booster
DE Energie-Booster
```

Werkzeuge:

```txt
CB Werkzeugkasten
DA Brecheisen
CC Schlosserwerkzeug
F3 Drahtschere
```

Gesichtsschutz,usw:

```txt
D4 Brillen
D3 Nachtsichtgerät
D5 Gasmaske
D2 Richtmirkrofon
```

Getränke:

```txt
F5 Alkohol
FF Wein
D6 Feldflasche
```

Sonstige nützliche Gegenstände:

```txt
CD Tarnset
DB Geld
C2 T-Shirt
92 Leuchtstab
D8 C-18
```

Nutzlose Gegenstände:

```txt
F7 benutzte Law
F0 Ownership
```

Andere nutzlose Gegenstände,wie zB."Spucke der Monsterkönigin"(30) und der M224 Mörser (29,Munition 8C)der nicht funktioniert ,wovon es Massenweise gibt sind in meiner Liste nicht enthalten.

Etwas weiter unter dem Abschnitt der eigenen Söldner befindet sich der Abschnitt der Gegner.Diese kann man nicht nur nach belieben austatten,sondern auch modisch einkleiden:

Man tauscht einfach Greenpants mit Redpants aus.Dies kann man auch bei den Haaren und der Hautfarbe machen.

Gesundheit und co:

```txt
0064 6400 0000 5A5F 5753 0423 5C0F 0E37 . d d . . . Z _ W S . # \ . . 7

0000 1C00 4900 7600 6100 6E00 0000 0000 . . . . I .v. a . n . . . . .

0000 0000 0000 0000 0101 000E 0000 0020 . . . . . . . . . . . . . . . .

B244 00C0 2D44 0020 B244 00C0 2D44 AE2B . D . . ï¿½ D . .D . . ï¿½ D . +

AE2B 0600 0000 0000 0000 0000 0100 0000 . + . . . . . . . . . . . . . .

FF00 017D FE00 0100 0000 0000 0000 0000 . . . } . . . . . . . . . . . . .
```

In der ersten Zeile befinden sich die Gesundheit und die Fähigkeiten des Söldners, in der Zeile darunter der Name der auch bei bedarf geändert werden kann(Punkte zwischen den Buchstaben nicht vergessen!!!)

Noch ein Tip zum Schluß:

Wer nur schnell seine Söldner editiren will, soll sich den Editor von Guybrush Threepwood herrunterladen (Link ist auf dieser Seite zu finden) allerdings muß man dabei einige kleine Fehler in kauf nehmen. Werï¿½s genauer haben will kannï¿½s ja mit dem Hexeditor machen.

---

Ich hoffe dies kann den Spaß an der Demo verlängern.

Für Fragen :

EMail: andreas.trafojer@rolmail.net

(aber bitte nicht wegen jeder Kleinigkeit!)

Viel Spaß

Andreas Trafojer
