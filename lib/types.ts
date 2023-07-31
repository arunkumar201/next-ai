export interface RoutesListTypes {
  label: string;
  icon: React.ComponentType<any>;
  href: string;
  color?: string;
}
export interface FeatureToolItem {
  label: string;
  icon: React.ComponentType<any>; 
  color: string;
  bgColor: string;
  href: string;
}
export interface HeadingComponentProps {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  iconColor?: string;
  bgColor?: string;
}
