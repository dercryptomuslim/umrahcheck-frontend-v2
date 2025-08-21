#!/bin/bash

# Create Initial Linear Issues für UmrahCheck
echo "🚀 Creating initial Linear issues for UmrahCheck..."

# Check if linear CLI is authenticated
if ! linear team list &>/dev/null; then
    echo "❌ Linear CLI not authenticated. Run: linear auth"
    exit 1
fi

echo "✅ Linear authenticated. Creating issues..."

# Quick Wins (P1)
echo "📋 Creating Quick Win issues..."

linear issue create \
  --title "🔧 Add loading states for KI-Analyse form" \
  --description "Add loading spinners and disabled states during API calls to improve UX" \
  --team UMR \
  --label "quick-win" \
  --label "P1" \
  --label "frontend"

linear issue create \
  --title "📱 Test and fix mobile responsiveness on iPhone Safari" \
  --description "Test all pages on iPhone Safari and fix any layout issues" \
  --team UMR \
  --label "quick-win" \
  --label "P1" \
  --label "mobile"

linear issue create \
  --title "⚡ Optimize image loading for better performance" \
  --description "Add lazy loading and WebP format for blog and hotel images" \
  --team UMR \
  --label "quick-win" \
  --label "P1" \
  --label "performance"

# Features (P2)
echo "✨ Creating Feature issues..."

linear issue create \
  --title "🤖 WhatsApp Bot MVP for price queries" \
  --description "Implement basic WhatsApp bot that can handle price inquiries and respond with UmrahCheck links" \
  --team UMR \
  --label "feature" \
  --label "P2" \
  --label "integration"

linear issue create \
  --title "💰 Budget Calculator Tool" \
  --description "Interactive calculator where users can input budget and get realistic Umrah options" \
  --team UMR \
  --label "feature" \
  --label "P2" \
  --label "frontend"

linear issue create \
  --title "📧 Email Newsletter Signup & Automation" \
  --description "Add newsletter signup form and automated email sequences for leads" \
  --team UMR \
  --label "feature" \
  --label "P2" \
  --label "marketing"

linear issue create \
  --title "🔗 Referral System Basic" \
  --description "Allow users to share referral links and track successful referrals" \
  --team UMR \
  --label "feature" \
  --label "P2" \
  --label "growth"

# Content (P2)
echo "📝 Creating Content issues..."

linear issue create \
  --title "📝 Blog: Hajj vs Umrah - Complete Guide" \
  --description "SEO-optimized article explaining differences for new pilgrims. Target: 'hajj vs umrah' keyword" \
  --team UMR \
  --label "content" \
  --label "P2" \
  --label "seo"

linear issue create \
  --title "📝 Blog: Best Time to Book Umrah (Seasonal Guide)" \
  --description "Data-driven article about optimal booking times, prices by month, weather considerations" \
  --team UMR \
  --label "content" \
  --label "P2" \
  --label "seo"

linear issue create \
  --title "❓ FAQ Expansion based on User Questions" \
  --description "Analyze WhatsApp queries and add top 10 missing FAQ entries" \
  --team UMR \
  --label "content" \
  --label "P2" \
  --label "ux"

# Infrastructure (P3)
echo "🔧 Creating Infrastructure issues..."

linear issue create \
  --title "📊 Setup Monitoring & Error Alerts" \
  --description "Implement Sentry or similar for error tracking, uptime monitoring" \
  --team UMR \
  --label "infrastructure" \
  --label "P3" \
  --label "monitoring"

linear issue create \
  --title "🔒 Security Audit & Improvements" \
  --description "Review security headers, input validation, API security, GDPR compliance" \
  --team UMR \
  --label "infrastructure" \
  --label "P3" \
  --label "security"

linear issue create \
  --title "🗄️ Database Query Optimization" \
  --description "Analyze slow queries, add indexes, optimize API response times" \
  --team UMR \
  --label "infrastructure" \
  --label "P3" \
  --label "performance"

echo ""
echo "✅ Initial issues created! Check them out:"
echo "https://linear.app/umrahcheck/team/UMR/active"
echo ""
echo "🎯 Suggested first steps:"
echo "1. Pick one Quick Win (P1) issue to start"
echo "2. Move it to 'In Progress'"
echo "3. Create a branch: git checkout -b fix/UMR-XXX-description"
echo "4. Make commits with [UMR-XXX] references"
echo ""
echo "💡 Pro tip: Run './scripts/linear-workflow.sh' for daily standup helper!"