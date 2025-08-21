# Linear Configuration für UmrahCheck

## 🎯 Team Structure (Free Plan - 2 Teams)

### Team 1: Product Development
- **ID**: UMRAH-DEV
- **Focus**: Feature Development, Bug Fixes, Technical Debt
- **Workflow States**:
  - Backlog → Todo → In Progress → Review → Done

### Team 2: Growth & Content  
- **ID**: UMRAH-GROWTH
- **Focus**: Blog, SEO, Marketing, Partner Integration
- **Workflow States**:
  - Ideas → Planned → Writing → Published

## 📋 Issue Templates

### Bug Report Template
```
**Environment**: Production/Development
**Browser/Device**: 
**Steps to Reproduce**:
1. 
2. 
**Expected**: 
**Actual**: 
**Screenshot**: 
```

### Feature Request Template
```
**User Story**: Als [Nutzer] möchte ich [Feature] damit [Nutzen]
**Acceptance Criteria**:
- [ ] 
- [ ] 
**Priority**: P0/P1/P2/P3
```

## 🏷️ Labels System

### Priority
- 🔴 P0: Critical (Production down)
- 🟠 P1: High (Major feature broken)
- 🟡 P2: Medium (Normal bugs)
- 🟢 P3: Low (Nice to have)

### Type
- 🐛 bug
- ✨ feature
- 📝 content
- 🎨 design
- ⚡ performance
- 🔒 security
- 📱 mobile

### Area
- frontend
- backend
- api
- database
- deployment
- analytics

## 🔄 Automation Rules

1. **GitHub → Linear**
   - PR merged → Move issue to "Done"
   - PR opened → Move issue to "In Review"
   - Commit with issue ID → Link automatically

2. **Slack Integration** (optional später)
   - New P0/P1 → Alert in #urgent
   - Weekly summary → #standup

## 📊 Cycles (Sprints)

**Duration**: 2 Wochen
**Naming**: Sprint [Number] - [Theme]
**Example**: Sprint 1 - Mobile Optimization

## 🎯 Current Roadmap (Q4 2025)

### October 2025
- [ ] Mobile-responsive Blog redesign
- [ ] WhatsApp Bot MVP
- [ ] Partner API v1

### November 2025
- [ ] Budget Calculator Tool
- [ ] Email Newsletter System
- [ ] Bewertungssystem v2

### December 2025
- [ ] Mobile App Beta
- [ ] B2B Portal Planning
- [ ] Year-end Performance Optimization