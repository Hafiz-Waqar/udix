import { ElementType } from "react";
import { CrmIcon, MobileIcon, WebIcon } from "@/assets/svg";

export type CardDataType = {
  name: string;
  description: string;
  value: string;
  icon: ElementType;
};

export const cardData: CardDataType[] = [
  {
    name: "Web Services",
    description: "Some networks believe that by only offering.",
    value: "web",
    icon: WebIcon,
  },
  {
    name: "CRM Product",
    description: "Some networks believe that by only offering.",
    value: "crm",
    icon: CrmIcon,
  },
  {
    name: "Mobile App",
    description: "Some networks believe that by only offering.",
    value: "mobile",
    icon: MobileIcon,
  },
];
