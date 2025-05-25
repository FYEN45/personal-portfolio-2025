import techStacks from "../constant/tech_stacks.json";

export type TechStacksType = Array<{
  slug: string;
  name: string;
  imgSrc: string;
  disabled: boolean;
}>;

export const GetTechStacksData = () => {
  return techStacks as TechStacksType;
};
