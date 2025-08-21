#!/bin/bash

# Linear Setup Script für UmrahCheck
# Dieses Script erstellt Issues aus deinem bestehenden Code

echo "🚀 Linear Setup für UmrahCheck"
echo "================================"

# Check if linear CLI is installed
if ! command -v linear &> /dev/null; then
    echo "📦 Installing Linear CLI..."
    npm install -g @linear/cli
fi

echo ""
echo "📝 Linear Authentication"
echo "------------------------"
echo "1. Gehe zu: https://linear.app/umrahcheck/settings/api"
echo "2. Erstelle einen Personal API Key"
echo "3. Führe aus: linear auth"
echo ""

# Create initial issues from TODOs in codebase
echo "🔍 Scanning for TODOs in codebase..."

# Find all TODO comments
grep -r "TODO\|FIXME\|HACK" --include="*.tsx" --include="*.ts" --include="*.js" . 2>/dev/null | head -20 > .linear/todos.txt

echo ""
echo "📋 Found TODOs to convert to Linear issues:"
echo "-------------------------------------------"
cat .linear/todos.txt

echo ""
echo "🎯 Quick Commands für deinen Workflow:"
echo "--------------------------------------"
echo "linear issue create        # Neues Issue erstellen"
echo "linear issue list          # Alle Issues anzeigen"
echo "linear issue start [ID]    # Issue starten"
echo "linear issue complete [ID] # Issue abschließen"
echo ""

echo "💡 Pro-Tips für Solo-Founder:"
echo "-----------------------------"
echo "1. Nutze P0-P3 Labels für Priorisierung"
echo "2. Erstelle Weekly Cycles (Sprints) für Focus"
echo "3. Tagge Issues mit 'quick-win' für Motivation"
echo "4. Nutze 'blocked' Status wenn du auf Externe wartest"
echo ""

echo "🔗 GitHub Integration:"
echo "----------------------"
echo "Füge zu deinen Commits hinzu:"
echo "git commit -m 'feat: Add WhatsApp integration [UMRAH-123]'"
echo ""

echo "✅ Setup Complete! Nächste Schritte:"
echo "1. linear auth"
echo "2. linear team list"
echo "3. linear issue create"