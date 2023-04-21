//Enum argument must be Capitalized
//Enums are one of the few features TypeScript has which is not a "type-level" extension of JavaScript.
//They exist in actual build, not only during development.
export enum SelectedPage {
    Home = 'home',
    Benefits = 'benefits',
    OurClasses = 'ourclasses',
    ContactUs = 'ourclasses'
}

export interface BenefitType {
    id: number;
    icon: JSX.Element;
    title: string;
    description: string;
}