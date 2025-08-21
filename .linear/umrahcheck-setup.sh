#!/bin/bash

# UmrahCheck Linear Setup - Customized für dein Team UMR
echo "🕌 UmrahCheck Linear Integration"
echo "================================"
echo "Team: UMR (https://linear.app/umrahcheck/team/UMR/active)"
echo ""

# Current Issues aus dem Code scannen
echo "🔍 Scanning UmrahCheck codebase für actionable items..."

# Check für TODOs und FIXME comments
echo "📝 Found TODOs:"
grep -r "TODO\|FIXME\|HACK" --include="*.tsx" --include="*.ts" --include="*.js" --include="*.py" . 2>/dev/null | head -10

echo ""
echo "🐛 Potential Bug Sources:"
echo "- Footer links (bereits gefixt heute)"
echo "- Mobile responsiveness tests"
echo "- API error handling"
echo "- Email validation edge cases"

echo ""
echo "✨ Feature Opportunities aus deinem Code:"
echo "- WhatsApp Bot integration (bereits im Code erwähnt)"
echo "- Advanced filtering für Hotels"
echo "- Multi-language support (DE/EN/AR)"
echo "- Umrah Calendar mit Events"
echo "- PDF itinerary generator"
echo "- Push notifications für Preise"

echo ""
echo "📊 Analytics & Tracking:"
echo "- Conversion tracking improvements"
echo "- User journey analysis"
echo "- A/B testing framework"

echo ""
echo "🎯 Immediate Linear Issues to create:"
echo "====================================="

cat << 'EOF'
1. QUICK WINS (P1, 1-2h each):
   - Fix any remaining mobile issues
   - Add loading states for KI-analyse
   - Optimize image loading
   - Add error boundaries

2. FEATURES (P2, 1-2 days each):
   - WhatsApp Bot MVP
   - Budget calculator tool
   - Email newsletter signup
   - Referral system basic

3. CONTENT (P2, 4-6h each):
   - Blog: "Hajj vs Umrah differences"
   - Blog: "Best time to book Umrah"
   - FAQ expansion based on user questions
   - Landing page A/B test variants

4. INFRASTRUCTURE (P3, ongoing):
   - Monitoring & alerts setup
   - Performance optimization
   - Security audit
   - Database optimization

EOF

echo ""
echo "🔧 Linear CLI Quick Commands für UmrahCheck:"
echo "============================================="
echo ""
echo "# Authentication (if not done)"
echo "linear auth"
echo ""
echo "# Create your first issues"
echo "linear issue create --title '🚀 WhatsApp Bot MVP' --description 'Basic bot for price queries via WhatsApp API' --team UMR --label feature"
echo ""
echo "linear issue create --title '📱 Mobile Safari testing' --description 'Test and fix mobile issues on iPhone Safari' --team UMR --label bug"
echo ""
echo "linear issue create --title '📝 Blog: Hajj vs Umrah guide' --description 'SEO article explaining differences for new pilgrims' --team UMR --label content"
echo ""
echo "# Daily workflow"
echo "linear issue list --team UMR --status 'In Progress'"
echo "linear issue list --team UMR --assignee @me"
echo ""
echo "# Start working on an issue"
echo "linear issue update UMR-123 --status 'In Progress'"
echo ""
echo "# Complete an issue"
echo "linear issue update UMR-123 --status 'Done'"

echo ""
echo "💡 Pro Tips für Solo-Founder UmrahCheck:"
echo "========================================"
echo "1. Label System:"
echo "   - P0: Production down (immediate)"
echo "   - P1: Major bug/quick win (same day)"
echo "   - P2: Important feature (this week)"
echo "   - P3: Nice to have (next sprint)"
echo ""
echo "2. Issue Templates:"
echo "   - 🐛 Bug: Include browser, steps, expected vs actual"
echo "   - ✨ Feature: User story + acceptance criteria"
echo "   - 📝 Content: SEO keywords + target length"
echo "   - 🔧 Tech: Background + impact + effort estimate"
echo ""
echo "3. Commit Convention:"
echo "   git commit -m 'feat: Add WhatsApp bot endpoint [UMR-123]'"
echo "   git commit -m 'fix: Mobile header overlap [UMR-124]'"
echo ""
echo "4. Cycle Planning:"
echo "   - 2-week sprints"
echo "   - Max 10 issues per sprint (als Solo-Founder)"
echo "   - Mix: 30% bugs, 50% features, 20% content"

echo ""
echo "🎯 Next Steps:"
echo "1. linear auth (wenn noch nicht gemacht)"
echo "2. Erstelle 3-5 Issues aus den Vorschlägen oben"
echo "3. Starte mit einem Quick Win (P1)"
echo "4. Setup GitHub integration für auto-updates"
echo ""
echo "✅ Ready to rock! Dein Linear ist setup für UmrahCheck growth! 🚀"