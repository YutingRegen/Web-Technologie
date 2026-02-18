# FESTIVAL AM SEE - WETTERVISUALISIERUNG

Dieses Projekt ist eine Webanwendung zur Visualisierung von Wetterdaten für das Festival am See. Sie besteht aus einer übersichtlichen Single-Page-Anwendung (SPA), die mit D3.js zwei Diagramme zur Analyse stündlicher Wetterdaten bereitstellt:

- Ein **Kreisdiagramm**, das zeigt, wie oft die Temperatur in einem bestimmten Zeitraum über oder unter 20 °C lag
- Ein **Liniendiagramm**, das die Veränderung der Wolkenbedeckung (in %) über mehrere Tage hinweg visualisiert

Die Daten werden über eine lokale Express.js-API geladen und aus JSON-Dateien gelesen.

---

## Funktionen

- Abruf und Anzeige stündlicher Wetterdaten (Temperatur & Wolkenbedeckung)
- Kreisdiagramm zur Darstellung der Zeitanteile über/unter 20 °C
- Liniendiagramm zur Visualisierung der Wolkenbedeckung im Zeitverlauf
- Responsive Design mit Bootstrap
- Wetterdaten werden über einen lokalen Server aus JSON-Dateien gelesen

---

## Technologie-Stack

- **Frontend:** HTML, CSS, Bootstrap 5, JavaScript, D3.js
- **Backend:** Node.js, Express.js, CORS
- **Visualisierung:** D3 (Version 7)

---

## Anwendung starten

Folge diesen Schritten, um das Projekt lokal auszuführen:

1. **Abhängigkeiten installieren**

```bash
npm install
```

2. **Server starten**

```bash
npm run server
```

3. **Anwendung im Browser öffnen**

Gehe zu: [http://localhost:3001](http://localhost:3001)

> Hinweis: Stelle sicher, dass sich `index.html` im Verzeichnis `client/` befindet und die Wetterdaten im Verzeichnis `server/`.

---

## Beispieldaten

- `temperatur_stuendlich.json`
  Enthält stündliche Temperaturwerte (Key: `hourly.temperature_2m`)
- `wolkenbedeckung_stuendlich.json`
  Enthält stündliche Wolkenbedeckungswerte (Keys: `hourly.cloud_cover` und `hourly.time`)

---

## Diagramme

### Temperaturverteilung (Kreisdiagramm)

- Zeigt, wie oft die Temperatur über bzw. unter 20 °C lag
- Datenquelle: `temperature_2m` aus der JSON-Datei

### Wolkenbedeckung (Liniendiagramm)

- Zeigt die Wolkenbedeckung (%) im zeitlichen Verlauf
- Zeitachse basiert auf Zeitstempeln aus der JSON-Datei
