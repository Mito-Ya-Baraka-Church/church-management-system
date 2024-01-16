export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
}

export type Tab = {
  name: string;
  href: string;
};
