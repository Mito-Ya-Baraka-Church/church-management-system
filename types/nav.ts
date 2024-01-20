export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  tabs?: Tab[];
}

export type Tab = {
  title: string;
  href: string;
};
