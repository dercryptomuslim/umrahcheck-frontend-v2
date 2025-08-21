# 🚀 Linear Quick Start für UmrahCheck

## 1️⃣ Sofort Setup (5 Minuten)

### Account erstellen
1. Gehe zu [linear.app](https://linear.app)
2. Sign up mit GitHub (für Auto-Integration)
3. Workspace Name: "UmrahCheck"

### API Key generieren
1. Settings → API → Personal API Keys
2. Create Key mit Namen "CLI"
3. Kopiere den Key

### Terminal Setup
```bash
# Installiere CLI (bereits gemacht)
npm install -g @linear/cli

# Authentifiziere
linear auth
# → Paste deinen API Key

# Teste Verbindung
linear team list
```

## 2️⃣ Deine ersten Issues (Beispiele für UmrahCheck)

```bash
# Bug vom Footer
linear issue create \
  --title "🐛 Footer Link /umrah-tipps führt zu 404" \
  --description "Link im Footer zeigt auf nicht-existente Seite" \
  --label "bug" \
  --label "P1"

# Feature Request
linear issue create \
  --title "✨ WhatsApp Bot für automatische Preisabfragen" \
  --description "User Story: Als Nutzer möchte ich per WhatsApp Preise abfragen" \
  --label "feature" \
  --label "P2"

# Content Task
linear issue create \
  --title "📝 Blog: Hajj vs Umrah Unterschiede" \
  --description "Neuer Artikel für SEO und User Education" \
  --label "content" \
  --label "P3"
```

## 3️⃣ Daily Workflow

### Morgens: Check Status
```bash
# Was ist heute dran?
linear issue list --status "Todo" --assignee @me

# Was läuft gerade?
linear issue list --status "In Progress"
```

### Beim Coden: Issue verknüpfen
```bash
# Issue starten
linear issue update UMRAH-1 --status "In Progress"

# Commit mit Linear ID
git commit -m "fix: Korrigiere Footer Link zu /tools [UMRAH-1]"

# Issue abschließen
linear issue update UMRAH-1 --status "Done"
```

### Wöchentlich: Sprint Planning
```bash
# Neuen Cycle erstellen (in Linear Web UI einfacher)
# Dann Issues zuweisen
linear issue update UMRAH-2 --cycle "Sprint 36"
linear issue update UMRAH-3 --cycle "Sprint 36"
```

## 4️⃣ Power User Tips für Solo-Founder

### Alias für schnellere Commands
```bash
# Füge zu ~/.zshrc oder ~/.bashrc hinzu:
alias li="linear issue"
alias lic="linear issue create"
alias lil="linear issue list"
alias lis="linear issue start"  # Custom function needed
```

### Quick Templates
```bash
# Bug Report Shortcut
bug() {
  linear issue create --title "🐛 $1" --label "bug" --label "P1"
}

# Feature Shortcut  
feat() {
  linear issue create --title "✨ $1" --label "feature" --label "P2"
}

# Usage:
bug "Payment API returns 500"
feat "Add Stripe integration"
```

### GitHub PR Integration
```bash
# In deiner PR Description:
Closes UMRAH-123

# Oder in Commit:
git commit -m "feat: Add payment processing

Implements Stripe checkout flow for Umrah packages

Closes UMRAH-123"
```

## 5️⃣ Deine UmrahCheck Roadmap in Linear

### Q4 2025 Milestones
```
Project: Mobile App Launch
├── UMRAH-10: Progressive Web App Setup
├── UMRAH-11: Push Notifications
├── UMRAH-12: Offline Mode
└── UMRAH-13: App Store Submission

Project: Partner Integration
├── UMRAH-20: Halalbooking API
├── UMRAH-21: Agoda Partnership
├── UMRAH-22: Wizz Air Direct Booking
└── UMRAH-23: Commission Tracking

Project: User Growth
├── UMRAH-30: Referral System
├── UMRAH-31: Newsletter Automation
├── UMRAH-32: SEO Blog Expansion
└── UMRAH-33: Social Media Integration
```

## 6️⃣ Metriken die zählen

Linear zeigt automatisch:
- **Velocity**: Wie viele Issues pro Sprint
- **Cycle Time**: Wie lange von Todo → Done
- **Bug Rate**: Verhältnis Bugs vs Features
- **Throughput**: Erledigte Issues pro Woche

## 🎯 Sofort Action für heute:

1. **Erstelle 3 Issues** aus aktuellen Problemen
2. **Starte 1 Issue** und move zu "In Progress"
3. **Mache 1 Commit** mit Linear ID Reference

## 💡 Pro-Tip: Mobile App

Lade die Linear Mobile App für iOS/Android:
- Issues unterwegs checken
- Bugs direkt vom Handy reporten
- Push Notifications für P0/P1 Issues

---

**Support**: Bei Fragen schreib in deinen Linear Workspace oder check [linear.app/docs](https://linear.app/docs)