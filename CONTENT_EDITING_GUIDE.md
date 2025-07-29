# Content Editing Guide for Non-Technical Users

This guide explains how to add and edit content for the Infinite Water website without needing technical knowledge.

## Overview

All website content is now stored in easy-to-edit data files located in the `src/data/` folder. You can add new content or modify existing content by editing these files.

## Files You Can Edit

### 1. Contaminants (`src/data/contaminants.ts`)

This file contains all information about water contaminants that Infinite Water can treat.

#### Adding a New Contaminant

To add a new contaminant, add a new object to the `contaminantsData` array:

```typescript
{
  id: 'new-contaminant-name', // Use lowercase with hyphens
  icon: AlertTriangle, // Choose from: Droplets, Shield, AlertTriangle, Zap
  title: 'Your Contaminant Name',
  subtitle: 'Optional subtitle', // Optional field
  description: 'Detailed description of the contaminant...',
  overviewDescription: 'Short description for the overview section...',
  details: {
    sources: [
      'Source 1',
      'Source 2',
      // Add as many sources as needed
    ],
    healthEffects: [
      'Health effect 1',
      'Health effect 2',
      // Add as many health effects as needed
    ],
    treatmentMethod: 'Description of how our technology treats this contaminant...',
    efficiency: '>XX%' // Treatment efficiency percentage
  },
  technology: 'Technology Name', // e.g., 'Hydroxon™', 'Advanced Catalytic Oxidation'
  technologyLink: '/contaminants/new-contaminant-name', // URL path for the detail page
  relatedLinks: [
    { name: 'Link Name', path: '/page-path' },
    // Add as many related links as needed
  ]
}
```

#### Editing Existing Contaminants

Find the contaminant you want to edit in the `contaminantsData` array and modify any of the fields:

- **title**: The main heading
- **description**: Detailed explanation
- **overviewDescription**: Short description for the overview cards
- **sources**: List of where this contaminant comes from
- **healthEffects**: List of health impacts
- **treatmentMethod**: How our technology treats it
- **efficiency**: Treatment effectiveness percentage
- **relatedLinks**: Additional pages to link to

### 2. Case Studies (`src/data/caseStudies.ts`)

This file contains all case study information.

#### Adding a New Case Study

Add a new object to the `caseStudiesData` array:

```typescript
{
  title: 'Project Name',
  location: 'City, Country',
  category: 'Municipal', // Options: 'Municipal', 'Industrial', 'Mining'
  challenge: 'Description of the water treatment challenge...',
  solution: 'How Infinite Water solved the problem...',
  results: {
    capacity: 'Treatment capacity (e.g., "10,000 L/day")',
    efficiency: 'Key efficiency metric',
    savings: 'Cost savings or other benefits'
  },
  technology: 'Technology Used',
  technologyLink: '/technology', // Link to technology page
  image: 'image-identifier' // For technical team to add images
}
```

#### Editing Case Study Tags

Add new searchable tags to the `caseStudyTags` array:

```typescript
export const caseStudyTags = [
  "drinking water",
  "groundwater", 
  "Heavy Metal Removal",
  "Your New Tag", // Add new tags here
];
```

### 3. Services (`src/data/services.ts`)

This file will contain service information (currently being set up).

## Content Guidelines

### Writing Style
- Use clear, professional language
- Focus on benefits to customers
- Include specific technical details where relevant
- Keep descriptions concise but informative

### Efficiency Percentages
- Always use the ">" symbol before percentages (e.g., ">95%")
- Be specific with efficiency numbers when available
- Use ranges when appropriate (e.g., "95-99%")

### Technology Names
- Use proper trademark symbols (™) where applicable
- Common technologies:
  - Hydroxon™
  - Advanced Catalytic Oxidation
  - Advanced Oxidation Processes (AOP)

### Links and Navigation
- Use consistent URL patterns: `/category/item-name`
- Always use lowercase with hyphens for URLs
- Ensure all internal links point to existing pages

## Icons Available

For contaminants, you can use these icons:
- `Droplets` - For water-related contaminants
- `Shield` - For protective/defensive themes
- `AlertTriangle` - For dangerous/warning contaminants
- `Zap` - For chemical/electrical themes

## Getting Help

If you need to:
- Add images to case studies
- Create new pages
- Modify the website structure
- Add new icon types

Please contact the technical team with your requirements.

## Important Notes

1. **Always backup**: Before making changes, save a copy of the original file
2. **Test changes**: After editing, ask the technical team to verify the website still works
3. **Consistent formatting**: Follow the exact format shown in examples
4. **Required fields**: Don't remove required fields like `id`, `title`, `description`
5. **URLs**: When adding new contaminants, ensure the URL path matches the `id` field

## Common Mistakes to Avoid

- Don't use special characters in `id` fields (use lowercase letters, numbers, and hyphens only)
- Don't forget commas after each array item
- Don't remove quotation marks around text
- Don't change the structure of the objects, only the content
- Don't use the same `id` for multiple items