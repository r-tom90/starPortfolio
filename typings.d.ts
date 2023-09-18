declare module "maath/random/dist/maath-random.esm" {
  // Add your type definitions here
  // For example:
  export function getRandomNumber(): number;
}

interface Skill_data {
  skill_name: string;
  Image: string;
  width: number;
  hight: number;
}

interface Project_data {
  title: string;
  video_key: string;
  technology_feature: string[];
  about_this_app: string;
  package: string[];
  future_improvements: string;
  live_link: string;
  gitHub_link: string;
  frontend_download_link: string;
  backend_download_link: string;
  project_image: string;
  project_desc: string;
  Type: string;
  project_Img_Mobile?: string[];
  indevelopment: boolean;
}

interface Link {
  You_tube: string;
  Github: string;
  Dowload: string;
}

checkFields<any>();
