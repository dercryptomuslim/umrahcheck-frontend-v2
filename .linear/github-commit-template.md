# GitHub + Linear Commit Templates für UmrahCheck

## 🎯 Commit Message Format

```
<type>: <description> [UMR-###]

<optional body>

<optional footer>
```

## 📋 Commit Types

- **feat**: Neues Feature
- **fix**: Bug Fix  
- **docs**: Dokumentation
- **style**: Code-Styling (keine Logic-Änderung)
- **refactor**: Code-Refactoring
- **test**: Tests hinzufügen/ändern
- **chore**: Build/Config Änderungen

## ✅ Beispiele für UmrahCheck

### Features
```bash
git commit -m "feat: Add WhatsApp bot endpoint for price queries [UMR-101]"
git commit -m "feat: Implement budget calculator tool [UMR-102]"
git commit -m "feat: Add multi-language support (DE/EN/AR) [UMR-103]"
```

### Bug Fixes
```bash
git commit -m "fix: Correct footer link from /umrah-tipps to /tools [UMR-104]"
git commit -m "fix: Mobile header overlap on iPhone Safari [UMR-105]"
git commit -m "fix: API timeout handling for flight searches [UMR-106]"
```

### Content Updates
```bash
git commit -m "docs: Add Hajj vs Umrah comparison blog post [UMR-107]"
git commit -m "docs: Update FAQ with visa requirements [UMR-108]"
git commit -m "content: Optimize SEO meta tags for blog articles [UMR-109]"
```

### Performance & Infrastructure
```bash
git commit -m "perf: Optimize image loading for hotel gallery [UMR-110]"
git commit -m "chore: Update dependencies and security patches [UMR-111]"
git commit -m "refactor: Extract hotel search logic to service [UMR-112]"
```

## 🔄 GitHub → Linear Automation

### PR Titles
```
feat: WhatsApp Bot MVP [UMR-101]
fix: Mobile responsive issues [UMR-105]
docs: Blog article - Best booking times [UMR-107]
```

### Branch Names
```
feature/UMR-101-whatsapp-bot
fix/UMR-105-mobile-header
docs/UMR-107-booking-times-blog
```

### Auto-Close Issues
```bash
# In PR description:
Closes UMR-101
Fixes UMR-105
Resolves UMR-107

# In commit message:
git commit -m "feat: Complete WhatsApp integration

- Add webhook endpoint
- Implement message parsing
- Add price query responses

Closes UMR-101"
```

## 🎯 Linear Status Updates

Linear automatically updates when:
- **PR opened** → Issue moves to "In Review"
- **PR merged** → Issue moves to "Done"  
- **Commit pushed** → Issue gets activity update
- **Branch created** → Issue moves to "In Progress"

## 💡 Pro Tips

### Git Hooks für Automation
```bash
# .git/hooks/prepare-commit-msg
#!/bin/sh
# Auto-add branch name to commit message
BRANCH_NAME=$(git branch | grep '*' | sed 's/* //')
if [[ $BRANCH_NAME =~ UMR-[0-9]+ ]]; then
    ISSUE=$(echo $BRANCH_NAME | grep -o 'UMR-[0-9]\+')
    echo "$1 [$ISSUE]" > "$1.tmp"
    mv "$1.tmp" "$1"
fi
```

### Aliases für schnellere Commits
```bash
# Add to ~/.gitconfig
[alias]
    # Quick commits with Linear ID
    cf = "!f() { git commit -m \"feat: $1 [$(git branch --show-current | grep -o 'UMR-[0-9]\\+')]\"; }; f"
    cb = "!f() { git commit -m \"fix: $1 [$(git branch --show-current | grep -o 'UMR-[0-9]\\+')]\"; }; f"
    cd = "!f() { git commit -m \"docs: $1 [$(git branch --show-current | grep -o 'UMR-[0-9]\\+')]\"; }; f"
```

## 🚀 Workflow Example

```bash
# 1. Start working on Linear issue UMR-101
git checkout -b feature/UMR-101-whatsapp-bot

# 2. Make changes...

# 3. Commit with auto-reference
git commit -m "feat: Add WhatsApp webhook endpoint [UMR-101]"

# 4. Push and create PR
git push -u origin feature/UMR-101-whatsapp-bot

# 5. PR title: "feat: WhatsApp Bot MVP [UMR-101]"
# 6. PR description: "Closes UMR-101"

# 7. Merge PR → Linear issue auto-moves to "Done" ✅
```