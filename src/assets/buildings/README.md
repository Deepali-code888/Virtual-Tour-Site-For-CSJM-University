# Building Photos Guide

This folder is for organizing your custom building photos. Follow this guide to add your own photos of different university buildings.

## Photo Requirements

- **Format**: JPG, PNG, or WebP
- **Recommended Size**: 1200x800 pixels or similar aspect ratio (3:2)
- **File Size**: Keep under 2MB for optimal web performance
- **Quality**: High resolution, well-lit photos work best

## Naming Convention

Use descriptive, lowercase names with hyphens:

```
central-library.jpg
academic-block-a.jpg
science-tech-block.jpg
evaluation-building.jpg
student-activity-center.jpg
international-centre.jpg
```

## How to Add Your Photos

1. **Place your photos** in this folder (`src/assets/buildings/`)

2. **Update the imports** in `src/components/VirtualTour/BuildingsSection.tsx`:
   
   Replace the existing imports section with your new photos:
   ```tsx
   // Replace existing imports with your photos
   import centralLibrary from "@/assets/buildings/central-library.jpg";
   import academicBlockA from "@/assets/buildings/academic-block-a.jpg";
   import scienceTechBlock from "@/assets/buildings/science-tech-block.jpg";
   import evaluationBuilding from "@/assets/buildings/evaluation-building.jpg";
   import studentActivityCenter from "@/assets/buildings/student-activity-center.jpg";
   import internationalCentre from "@/assets/buildings/international-centre.jpg";
   ```

3. **Update the image references** in the buildings array:
   ```tsx
   // Example for Central Library
   {
     name: "Central Library",
     image: centralLibrary, // Use your imported image variable
     // ... rest of the building data
   }
   ```

## Buildings That Need Photos

1. **Central Library** - Main library building
2. **Academic Complex - Block A** - Main academic building
3. **Science & Technology Block** - Science labs and tech facilities
4. **Central Evaluation Building** - Examination and evaluation center
5. **Student Activity Center** - Sports and cultural activities hub
6. **International Centre** - International programs office

## Tips for Great Building Photos

- Take photos during good lighting conditions (avoid harsh shadows)
- Capture the full building or a representative section
- Include some surrounding context (landscaping, walkways)
- Avoid photos with too many people in the foreground
- Consider the building's best angle or most recognizable features

## After Adding Photos

1. Save your changes to `BuildingsSection.tsx`
2. The photos will automatically appear in your virtual tour
3. Test the application to ensure all images load correctly