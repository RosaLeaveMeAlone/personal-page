import {
  CoursesData,
  EducationData,
  ExperienceData,
} from "../interfaces/interfaces";

export const isCoursesData = (data: any): data is CoursesData => {
  return (
    typeof data.title === "string" &&
    typeof data.issuingCompany === "string" &&
    (typeof data.certificateUrl === "string" ||
      typeof data.certificateUrl === "undefined")
  );
};

export const isEducationData = (data: any): data is EducationData => {
  return (
    typeof data.title === "string" &&
    typeof data.college === "string" &&
    typeof data.location === "string" &&
    (typeof data.image === "string" || typeof data.image === "undefined") &&
    (typeof data.dateStart === "string" ||
      typeof data.dateStart === "undefined") &&
    (typeof data.dateEnd === "string" || typeof data.dateEnd === "undefined")
  );
};

export const isExperienceData = (data: any): data is ExperienceData => {
  return (
    data &&
    typeof data.bussiness === "string" &&
    typeof data.job === "string" &&
    typeof data.startDate === "string" &&
    typeof data.endDate === "string" &&
    typeof data.country === "string" &&
    typeof data.description === "string" &&
    (typeof data.image === "undefined" || typeof data.image === "string")
  );
};
