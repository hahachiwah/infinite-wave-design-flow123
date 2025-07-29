# Content Editing Guide for Non-Technical Users

This guide helps non-technical users edit website content by modifying data files in the `src/data/` directory. All images are now managed through friendly names instead of complex UUIDs.

## Available Image Names

The following friendly image names are available for use throughout the website:

### Company Images
- `infinite-water-logo` - Main company logo

### Expert Images
- `expert-gheorghe` - Gheorghe (Lead Scientist & Engineer)
- `expert-yk-ip` - YK IP (CEO & Managing Director)
- `expert-daniel-jin` - Daniel Jin (Chairman)
- `expert-felix-wong` - Felix Wong (Adjunct Professor)

### Partner Images
- `partner-university-queensland` - University of Queensland logo
- `partner-unsw-sydney` - UNSW Sydney logo
- `partner-uts-sydney` - UTS Sydney logo
- `partner-water-corporation` - Water Corporation logo
- `partner-westland-milk` - Westland Milk Products logo
- `partner-xstrata` - Xstrata logo
- `partner-alano` - Alano logo
- `partner-australian-aid` - Australian Aid logo
- `partner-freedom-lifestyle` - Freedom Lifestyle Villages logo
- `partner-fonterra` - Fonterra logo
- `partner-multiplex` - Multiplex logo
- `partner-narromine-shire` - Narromine Shire Council logo
- `partner-oji` - OJI logo
- `partner-schutz` - Schutz logo
- `partner-sealed-air` - Sealed Air logo
- `partner-sydney-water` - Sydney Water logo

### Case Study Images
- `case-study-copper-mine` - Copper mine project image
- `case-study-packaging-manufacturer` - Packaging manufacturer project
- `case-study-dairy-recycling` - Dairy industry recycling project
- `case-study-bangladesh-water` - Bangladesh drinking water project

### Technology Images
- `technology-water-treatment` - Water treatment facility
- `technology-industrial-plant` - Industrial plant equipment
- `technology-laboratory` - Laboratory equipment
- `technology-mining-operation` - Mining operation setup

### Default/Fallback Images
- `default-case-study` - Default image for case studies
- `default-expert` - Default image for experts
- `default-partner` - Default image for partners
- `default-technology` - Default image for technology sections

### Video Files
- `header-video` - Main header video for hero sections

## Overview

All website content is now stored in easy-to-edit data files located in the `src/data/` folder. You can add new content or modify existing content by editing these files using the friendly image names listed above.

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
  imageName: 'friendly-image-name', // Use one from the Available Image Names list
  image: 'fallback-image-identifier' // Fallback for external images
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

If you need assistance with:
- **Adding new images**: Contact the technical team to upload and assign friendly names
- **Creating new pages**: Technical team required for structural changes
- **Modifying website layout**: Technical team required for design changes
- **Adding new data fields**: Technical team required for schema updates

## Using Images in Content

When referencing images in any content:

1. **For new content**: Choose an appropriate friendly name from the Available Image Names list
2. **For new images**: Contact the technical team to add new images and assign friendly names
3. **Always use friendly names**: Never use UUIDs directly in content

Example:
```javascript
imageName: "case-study-copper-mine" // ✅ Good
imageName: "82b47e25-afe6-415a-9d49-1a0528920cad.png" // ❌ Bad
```

## Important Notes

### Before Making Changes
- **Backup**: Always backup files before editing
- **Test**: Preview changes before publishing
- **Consistency**: Maintain consistent formatting and style
- **Required Fields**: Never remove required fields (marked without "?")
- **Image Names**: Always use friendly names from the approved list

### Common Mistakes to Avoid
- Using UUIDs instead of friendly image names
- Forgetting commas between array items
- Removing quotation marks around strings
- Changing the structure of existing objects
- Using special characters in IDs or routes
- Duplicating IDs or routes across different items

### Adding New Searchable Tags
To add new tags for case studies, update the `caseStudyTags` array in `src/data/caseStudies.ts`:

```javascript
export const caseStudyTags = [
  'Water Treatment',
  'Industrial',
  'Municipal',
  'Your New Tag' // Add new tags here
];
```

Remember: Changes to data files will automatically update the website. Always double-check your changes before saving!