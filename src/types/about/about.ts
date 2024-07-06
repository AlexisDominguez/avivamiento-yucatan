export type Sections = "pastors" | "church" | "beliefs";

export type SectionInfo = {
  [key in Sections]: {
    image: string;
    title: string;
    subTitle: string;
    description: string;
    paragraphs: string[];
  };
};
