export type CellType = 'procariota' | 'animala' | 'vegetala';

export interface CellPartInfo {
  id: string;
  name: string;
  description: string;
  colorClass: string; // tailwind bg color class or stroke
  functionText?: string;
  icon?: string;
}

export interface CellData {
  type: CellType;
  title: string;
  parts: CellPartInfo[];
}


