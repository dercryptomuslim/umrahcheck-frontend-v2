#!/bin/bash

# Daily Linear Workflow für UmrahCheck
# Automatisiert deine täglichen Tasks

echo "☀️ UmrahCheck Daily Standup"
echo "============================"
date

# Show current sprint issues
echo ""
echo "📋 Current Sprint Issues:"
linear issue list --status "In Progress"

echo ""
echo "🆕 Today's TODOs:"
linear issue list --status "Todo" --limit 5

# Quick issue creator
create_issue() {
    echo ""
    echo "🆕 Quick Issue Creator"
    read -p "Title: " title
    read -p "Description: " desc
    read -p "Priority (0-3): " priority
    
    linear issue create --title "$title" --description "$desc" --label "P$priority"
    echo "✅ Issue created!"
}

# Daily commit helper
smart_commit() {
    echo ""
    echo "🔧 Smart Commit Helper"
    read -p "Issue ID (e.g., UMRAH-123): " issue_id
    read -p "Commit type (feat/fix/docs/style/refactor): " type
    read -p "Message: " message
    
    git add .
    git commit -m "$type: $message [$issue_id]"
    echo "✅ Committed with Linear reference!"
}

# Menu
echo ""
echo "🎯 Quick Actions:"
echo "1) Create new issue"
echo "2) Start working on issue"
echo "3) Complete issue"
echo "4) Smart commit (with Linear ID)"
echo "5) View my issues"
echo "6) Create bug report"
echo "0) Exit"

read -p "Choose action: " choice

case $choice in
    1)
        create_issue
        ;;
    2)
        read -p "Issue ID to start: " id
        linear issue update $id --status "In Progress"
        echo "✅ Issue moved to In Progress!"
        ;;
    3)
        read -p "Issue ID to complete: " id
        linear issue update $id --status "Done"
        echo "✅ Issue completed!"
        ;;
    4)
        smart_commit
        ;;
    5)
        linear issue list --assignee @me
        ;;
    6)
        echo "🐛 Bug Report"
        read -p "Bug title: " title
        read -p "Steps to reproduce: " steps
        read -p "Expected behavior: " expected
        read -p "Actual behavior: " actual
        
        desc="**Steps**: $steps\n**Expected**: $expected\n**Actual**: $actual"
        linear issue create --title "🐛 $title" --description "$desc" --label "bug" --label "P1"
        echo "✅ Bug report created!"
        ;;
    0)
        echo "👋 Bye!"
        exit 0
        ;;
esac