import { NextPage } from "next";
import DefaultLayout from "./default";
import DifferentDefaultLayout from "./different";

type PageWithDefaultLayoutType = NextPage & { layout: typeof DefaultLayout };

type PageWithDifferentDefaultLayoutType = NextPage & {
  layout: typeof DifferentDefaultLayout;
};

type PageWithLayoutType =
  | PageWithDefaultLayoutType
  | PageWithDifferentDefaultLayoutType;

export default PageWithLayoutType;
