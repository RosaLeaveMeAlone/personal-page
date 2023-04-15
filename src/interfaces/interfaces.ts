import { ReactElement } from "react";

export type ListType = "course" | "college" | "experience";

export interface AppThemeProps {
  children?: ReactElement | ReactElement[];
}
export interface PersonalPageLayoutProps {
  children?: ReactElement | ReactElement[];
}
export interface SkillCardProps {
  title: string;
  image: string;
  description: string;
}

export interface ListGenericProps {
  type: ListType;
  data: EducationData[] | CoursesData[] | ExperienceData[];
  title: string;
}

export interface SkillData {
  title: string;
  image: string;
  description: string;
}

export interface EducationData {
  title: string;
  college: string;
  location: string;
  image?: string;
  dateStart?: string;
  dateEnd?: string;
}

export interface CoursesData {
  title: string;
  issuingCompany: string;
  image?: string;
  certificateUrl?: string;
}

export interface ExperienceData {
  bussiness: string;
  job: string;
  startDate: string;
  endDate: string;
  country: string;
  description: string;
  image?: string;
}
//Falta colocar campo imagen
