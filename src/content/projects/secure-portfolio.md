---
title: Secure Portfolio
summary: This website — a statically generated, zero-tracking portfolio with a hash-based Content Security Policy and CI security checks.
date: 2026-10-12
tags: [Astro, TypeScript, Security, CI/CD]
repo: https://github.com/Acid-Burn-del/Acid-Burn-del
featured: true
---

## Overview

A personal portfolio built with [Astro](https://astro.build) and TypeScript. All content
is validated with schemas at build time and rendered to plain HTML.

## Security highlights

- Fully static output — no server, database or secrets to attack.
- Strict Content Security Policy generated from hashes of every script and style.
- Only `https://` links are accepted in content; anything else fails the build.
- Dependencies are pinned, audited in CI and kept up to date by Dependabot.
- CodeQL scanning and least-privilege GitHub Actions permissions.
