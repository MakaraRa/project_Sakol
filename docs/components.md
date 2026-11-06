
# Sakol - Component Plan

## 1. Universities Page

### Component Tree
- UniversitiesView
  - AppNavbar
  - PageHeader
  - UniversitySearch
  - UniversityFilters
  - UniversityList
    - UniversityCard

### Components

| Component         | Props        | Events            | State Owner             |
|---                |---           |---                |---                      |
| UniversitiesView  | None         | None              | Search and filter state |
| AppNavbar         | None         | Navigation        | Router                  |       
| UniversitySearch  | modelValue   | update:modelValue | UniversitiesView        |
| UniversityFilters | filters      | update:filters    | UniversitiesView        |
| UniversityList    | universities | None              | UniversitiesView        |
| UniversityCard    | university   | view-details      | UniversityList          |

## 2. Majors Page

### Component Tree
- MajorsView
  - AppNavbar
  - PageHeader
  - MajorSearch
  - MajorList
    - MajorCard

## 3. Find My Major Introduction Page

### Component Tree
- FindMyMajorView
  - AppNavbar
  - AssessmentIntroduction
  - LoginRequiredMessage
