import { ICategory } from "./category.model";

export const PRODUCT_CATEGORIES: ICategory[] = [
    { icon: 'hammer-and-pick-svgrepo-com.svg', name: 'Construction' },
    { icon: 'lightning-svgrepo-com.svg', name: 'Electrical' },
    { icon: 'paint-roller-paint-svgrepo-com.svg', name: 'Paint' },
    { icon: 'water-drops-svgrepo-com.svg', name: 'Plumbing' },
    { icon: 'question-mark-svgrepo-com.svg', name: 'Others' },
];

export const PRODUCT_UNITS = [
    { 
        group: [
            { icon: 'box-1-svgrepo-com.svg', label: 'Unit', prefix: 'unit' },
        ],
        icon: 'box-1-svgrepo-com.svg',
        label: 'Unit'
    },
    { 
        
        group: [
            { icon: 'weight-svgrepo-com.svg', label: 'Kilogram', prefix: 'kg' },
            { icon: 'weight-svgrepo-com.svg', label: 'Pound', prefix: 'lbs' },
        ],
        icon: 'weight-svgrepo-com.svg',
        label: 'Weight'
    },
    { 
        group: [
            { icon: 'ruler-svgrepo-com.svg', label: 'Meter', prefix: 'm' },
            { icon: 'ruler-svgrepo-com.svg', label: 'Centimeter', prefix: 'cm' },
        ],
        icon: 'ruler-svgrepo-com.svg',
        label: 'Length'
    },
    { 
        group: [
            { icon: 'group-2-svgrepo-com.svg', label: 'Liter', prefix: 'L' },
            { icon: 'group-2-svgrepo-com.svg', label: 'Milliliter', prefix: 'ml' },
        ],
        icon: 'group-2-svgrepo-com.svg',
        label: 'Volume'
    },
    { 
        group: [
            { icon: 'grid-1-svgrepo-com.svg', label: 'Feet²', prefix: 'ft²' },
            { icon: 'grid-1-svgrepo-com.svg', label: 'Meter²', prefix: 'm²' },
        ],
        icon: 'grid-1-svgrepo-com.svg',
        label: 'Area'
    }
]
