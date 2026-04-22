When generating git commit messages, ALWAYS follow the Conventional Commits specification.

---

## Format

<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

---

## Rules (STRICT)

- ALWAYS use one of the allowed types
- ALWAYS use lowercase for type and description
- NEVER end description with a period
- ALWAYS use imperative present tense (e.g., "add", "fix", "update")
- KEEP description short (max ~72 chars)
- DO NOT include unnecessary words like "this commit", "update code", etc.

---

## Types

- feat: add a new feature
- fix: fix a bug
- refactor: restructure code without changing behavior
- perf: improve performance
- style: formatting only (no logic change)
- test: add or update tests
- docs: documentation only
- build: build system / dependencies
- ci: CI/CD changes
- ops: infrastructure / deployment / scripts
- chore: maintenance tasks

> If multiple types apply, use the MOST IMPORTANT one (e.g., feat over fix).

---

## Scope

- Optional but recommended
- Use folder/module/component name
- Examples:
  - auth
  - api
  - dashboard
  - client

---

## Breaking Changes

- Add `!` after type/scope:

  - feat(api)!: remove v1 endpoints

- MUST include footer:
  BREAKING CHANGE: explanation of what changed and how to migrate

---

## Body Guidelines

- Explain WHY, not WHAT
- Compare before vs after behavior

---

## Footer

- Reference issues:
  - Closes #123
  - Fixes #456

---

## Output Rules for AI

- Output ONLY the commit message
- DO NOT add explanation
- DO NOT wrap in quotes or code block
