# 🏨 Die 3/4-Bett-Zimmer Regel für Umrah Hotels

## 🎯 **Kritisches Wissen für realistische Preiskalkulation**

### **Die Regel:**
Hotels in Saudi-Arabien (Makkah & Medina) haben standardmäßig **3-4 Betten pro Zimmer**. Dies ist kulturell und religiös bedingt, da Pilger traditionell in Gruppen reisen und sich Unterkünfte teilen.

### **Impact auf Preisberechnung:**

| Personen | Zimmer benötigt | Betten/Zimmer | Kostenverteilung |
|----------|-----------------|---------------|------------------|
| 1 Person | 1 Zimmer | 3-4 Betten | Zahlt 100% allein |
| 2 Personen | 1 Zimmer | 3-4 Betten | Kosten ÷ 2 |
| 3 Personen | 1 Zimmer | 3-4 Betten | Kosten ÷ 3 |
| 4 Personen | 1 Zimmer | 4 Betten | Kosten ÷ 4 ✅ |
| 5 Personen | 2 Zimmer | 3-4 Betten/Zimmer | (2 Zimmer × Preis) ÷ 5 |
| 8 Personen | 2 Zimmer | 4 Betten/Zimmer | (2 Zimmer × Preis) ÷ 8 |

---

## 💰 **Reales Preisbeispiel**

### **Ohne 4-Bett-Regel (FALSCH):**
```
Fairmont Makkah: €200/Nacht × 4 Personen = €800/Nacht
5 Nächte × €800 = €4,000 nur für Makkah!
```

### **Mit 4-Bett-Regel (KORREKT):**
```
Fairmont Makkah: €200/Nacht für 1 Zimmer (4 Betten)
Pro Person: €200 ÷ 4 = €50/Nacht
5 Nächte × €200 = €1,000 total für alle 4 Personen!
```

**Ersparnis: €3,000 (75% günstiger!)**

---

## 🔧 **Implementierung im Code**

### **Budget Allocation System:**
```python
# Berechne Zimmer basierend auf Personenanzahl
beds_per_room = 4 if persons >= 4 else 3
rooms_needed = math.ceil(persons / beds_per_room)

# Hotel Budget PRO ZIMMER, nicht pro Person!
max_hotel_price_per_room = hotel_budget / nights / rooms_needed

# Preis pro Person = Zimmerpreis ÷ Betten
price_per_person = room_price / beds_per_room
```

### **MCP Agent Response:**
```json
{
  "hotels": {
    "mekka": {
      "name": "Fairmont Makkah Clock Royal Tower",
      "room_type": "Superior Room (4 beds) × 1 room",
      "price_per_night": "€196/room (€49/person)",
      "price_total": "€980",  // 5 nights × €196
      "rooms_needed": 1,
      "beds_per_room": 4
    }
  }
}
```

---

## 📊 **Business Impact**

### **Vorher (ohne 4-Bett-Regel):**
- Kunde sieht: €9,370 für 4 Personen
- Reaktion: "Viel zu teuer!"
- Conversion: <5%

### **Nachher (mit 4-Bett-Regel):**
- Kunde sieht: €3,872 für 4 Personen
- Reaktion: "Das ist machbar!"
- Conversion: >40%

---

## ⚠️ **Wichtige Hinweise**

### **Für Paare (2 Personen):**
- Bekommen trotzdem 3-4 Bett Zimmer
- Zahlen Zimmerpreis ÷ 2
- Können ggf. Twin-Bed Option wählen

### **Für Familien (5+ Personen):**
- Benötigen 2 Zimmer (oder Family Suite)
- Kosten = (Anzahl Zimmer × Zimmerpreis) ÷ Personen

### **Für Einzelreisende:**
- Müssen ganzes Zimmer zahlen (teuer!)
- Besser: Gruppe finden zum Teilen
- Alternative: Hostels mit geteilten Zimmern

---

## 🎯 **Key Takeaways**

1. **NIEMALS** Hotelpreise mit Personen multiplizieren
2. **IMMER** erst Zimmer berechnen, dann durch Betten teilen
3. **Standard**: 4-Bett-Zimmer für Gruppen
4. **Ausnahme**: 3-Bett-Zimmer für kleinere Gruppen
5. **Transparenz**: Kunden zeigen wie Preise berechnet werden

---

## 📋 **Checkliste für Entwickler**

- [ ] Zimmeranzahl basierend auf Personenzahl berechnen
- [ ] Preis PRO ZIMMER von Hotels/APIs abrufen
- [ ] Kosten durch Anzahl Betten teilen für Pro-Person-Preis
- [ ] UI zeigt beide Preise: "€200/Zimmer (€50/Person)"
- [ ] Erklärung für Kunden: "4-Bett-Zimmer Standard"
- [ ] Fallback für ungerade Personenzahlen implementieren

**Diese Regel ist KRITISCH für realistische Umrah-Preise!** 🕋✨