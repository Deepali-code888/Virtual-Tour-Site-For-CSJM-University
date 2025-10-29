# CSJMU Virtual Tour - Facilities Management Guide

## Overview
This guide will help you add, modify, or remove facilities and departments in your CSJMU Virtual Tour website. All facilities are managed through the `BuildingsSection.tsx` component.

## File Structure
```
src/
├── components/
│   └── VirtualTour/
│       ├── BuildingsSection.tsx    # Main facilities management file
│       └── BuildingCard.tsx        # Individual facility card component
├── assets/
│   ├── buildings/                  # Directory for facility photos
│   ├── academic-building.jpg       # Placeholder for academic buildings
│   ├── library-interior.jpg        # Placeholder for libraries
│   ├── science-lab.jpg            # Placeholder for labs/tech facilities
│   └── campus-hero.jpg            # Placeholder for general facilities
```

## Current Facilities (30 Total)

### Hostels & Accommodation
1. Boys Hostel
2. Girls Hostel

### Academic Departments
3. School of Education
4. Lecture Hall Complex
5. Department of Life Long and Extension
6. School of Advanced Agricultural Sciences and Technology
7. Business Management Department
8. Department of Biological Sciences and Biotechnology
9. Fine Arts Building (1 and 2)

### UIET - Engineering & Technology
10. UIET - School of Engineering and Technology
11. Chemical and Mechanical Engineering
12. CSE AI Department
13. ECE Department
14. Computer Science Department
15. Information Technology Department
16. Material Science and Metallurgical Engineering
17. Department of Vocational Skills
18. School of Computer Applications

### Specialized Departments
19. School of Hotel Management
20. Health Sciences Department
21. Law Building (Atal Bihari Vajpayee)
22. Education Faculty Building
23. Deen Dayal Shodh Kendra

### Central Facilities
24. Helipad
25. Virangna Rani Lakshmi Bai Auditorium
26. Senate Hall
27. Stadium
28. Innovation Foundation
29. International Center
30. Multipurpose Hall
31. Central Library

## How to Add a New Facility

### Step 1: Prepare Your Photo
1. Place your facility photo in the `src/assets/buildings/` directory
2. Recommended image specifications:
   - Format: JPG or PNG
   - Resolution: 1200x800 pixels or higher
   - Size: Under 2MB for optimal loading
   - Name: Use kebab-case (e.g., `new-facility-name.jpg`)

### Step 2: Import the Image
Add the import statement at the top of `BuildingsSection.tsx`:
```tsx
import newFacilityName from "@/assets/buildings/new-facility-name.jpg";
```

### Step 3: Add the Facility Object
Add your new facility to the `buildings` array in `BuildingsSection.tsx`:

```tsx
{
  name: "Your Facility Name",
  description: "Detailed description of the facility, its purpose, and what makes it special.",
  image: newFacilityName, // Use the imported image
  facilities: [
    "Feature 1",
    "Feature 2", 
    "Feature 3",
    "Feature 4",
    "Feature 5",
    "Feature 6"
  ],
  hours: "Operating hours (e.g., 9:00 AM - 6:00 PM)",
  location: "Campus location/zone",
  capacity: 500, // Number (optional)
  delay: 1 // Animation delay (1-4)
}
```

### Step 4: Test Your Addition
1. Save the file
2. Check the website to ensure your facility appears correctly
3. Verify the image loads properly
4. Test the card animation and hover effects

## Field Descriptions

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `name` | String | Official name of the facility | "Central Library" |
| `description` | String | 2-3 sentence description | "Modern library with digital resources..." |
| `image` | Import | Imported image variable | `libraryInterior` |
| `facilities` | Array | List of 4-6 key features | `["Wi-Fi", "Study Halls", ...]` |
| `hours` | String | Operating hours or access info | "6:00 AM - 11:00 PM" |
| `location` | String | Campus area or zone | "Central Campus" |
| `capacity` | Number | Maximum occupancy (optional) | `1500` |
| `delay` | Number | Animation delay (1-4) | `2` |

## Editing Existing Facilities

### To Modify a Facility:
1. Find the facility object in the `buildings` array
2. Update the desired fields
3. Save the file

### To Remove a Facility:
1. Locate the facility object in the `buildings` array
2. Delete the entire object (including curly braces)
3. Remove the trailing comma if it's the last item
4. Save the file

### To Change Order:
1. Cut the facility object from its current position
2. Paste it in the desired location within the array
3. Ensure proper comma separation

## Image Management Tips

### Using Placeholder Images
If you don't have a specific photo, use existing placeholders:
- `academicBuilding` - For academic/administrative buildings
- `scienceLab` - For laboratories and technical facilities
- `libraryInterior` - For libraries and study spaces
- `campusHero` - For general facilities and outdoor areas

### Adding Your Own Photos
1. Create a new folder: `src/assets/buildings/your-photos/`
2. Place all your facility photos there
3. Import each photo with a descriptive name
4. Update the respective facility objects

### Image Optimization
- Compress images before adding (use tools like TinyPNG)
- Maintain consistent aspect ratios for better visual harmony
- Use descriptive filenames for easy management

## Best Practices

### Content Guidelines
- **Names**: Use official facility names
- **Descriptions**: Keep descriptions informative but concise (2-3 sentences)
- **Facilities**: List 4-6 most important features
- **Hours**: Be accurate with operating hours
- **Capacity**: Include if relevant for space planning

### Technical Guidelines
- **Animation Delays**: Distribute delays evenly (1-4) for staggered animations
- **Array Order**: Group similar facilities together for better organization
- **Consistency**: Maintain consistent formatting and structure

### Performance Considerations
- Limit total facilities to 50 or fewer for optimal performance
- Optimize images before adding
- Test loading times after adding multiple facilities

## Troubleshooting

### Common Issues:

1. **Image Not Loading**
   - Check file path and import statement
   - Verify image file exists in correct directory
   - Ensure file extension matches import

2. **Facility Not Appearing**
   - Check for syntax errors (missing commas, brackets)
   - Verify the facility object is properly formatted
   - Check browser console for errors

3. **Layout Issues**
   - Ensure all required fields are present
   - Check for extra long text that might break layout
   - Verify delay values are between 1-4

### Getting Help
- Check browser developer console for error messages
- Verify file structure matches the guide
- Ensure all syntax is correct (commas, quotes, brackets)

## Example: Adding a New Department

```tsx
// 1. Add import at top
import computerCenterImage from "@/assets/buildings/computer-center.jpg";

// 2. Add to buildings array
{
  name: "Computer Center",
  description: "State-of-the-art computing facility with high-performance systems for research and academic computing needs.",
  image: computerCenterImage,
  facilities: [
    "High-performance computers",
    "24/7 internet connectivity", 
    "Research workstations",
    "Printing services",
    "Technical support",
    "Server maintenance"
  ],
  hours: "8:00 AM - 10:00 PM",
  location: "IT Campus",
  capacity: 200,
  delay: 3
}
```

---

## Support
For technical issues or questions about adding facilities, refer to the main project documentation or contact the development team.

**Last Updated:** October 2025
**Version:** 1.0