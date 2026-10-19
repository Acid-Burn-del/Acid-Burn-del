---
title: Abronex Global
summary: A study-abroad consultancy platform, from Figma UI/UX concept to a modular PHP and MySQL web app built by a team of three at HAMK.
date: 2026-02-20
tags: [UI/UX, Figma, PHP, MySQL, Tailwind CSS]
repo: https://github.com/Acidburn07/AbronexGlobal-PHP
demo: https://abronexglobal.netlify.app/
featured: true
---

## The idea

Abronex Global makes studying abroad easier to plan: one place for language test
preparation, university selection and visa guidance, with honest, budget-matched
recommendations. The concept grew out of my two-plus years as an educational
consultant and our team's own experience of becoming international students.

## UI/UX concept

The first phase (Team 11, January 2026) was a concept for a smart study-abroad
decision platform. The case study covers the problem statement, two user
personas, a competitor review, the logo concept, typography (Neue Montreal and
Inter) and the colour palette, all built in Figma.

My parts: the project idea, research, prototyping, and coding the responsive
HTML and Tailwind CSS website
([concept repo](https://github.com/Acidburn07/Group-11-AbronexGlobal),
[live site](https://abronexglobal.netlify.app/)).

## Building the platform

In the second phase, our team of three turned the concept into a working PHP and
MySQL application, organised as a modular monolith with one folder per feature.

My parts:

- **Get In Touch module.** An enquiry form, its database table and an inbox view
  for expert leads, with server-side input sanitisation and empty-field checks.
- **Shared layout.** Moved the header, footer and navbar into a shared
  `includes/` folder so every page uses the same components, and fixed asset
  paths so styles and logos load correctly at any folder depth.
- **Version control.** Led the recovery of the team repository after it fell
  out of sync, untangling nested folders and merge conflicts into a clean history.

## What's next

The structure leaves room for a future AI-powered recommendation engine that
matches students to affordable destinations.
