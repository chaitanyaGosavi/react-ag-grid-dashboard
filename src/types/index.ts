export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  position: string;
  salary: number;
  hireDate: string;
  age: number;
  location: string;
  performanceRating: number;
  projectsCompleted: number;
  isActive: boolean;
  skills: string[];
  manager: string | null;
}

export interface GridConfig {
  columnDefs: any[];
  rowData: Employee[];
}

export interface FilterState {
  searchTerm: string;
  department: string;
  location: string;
  minSalary: number;
  isActive: boolean | null;
}

export interface KPIData {
  label: string;
  value: string | number;
  change: number;
  icon: string;
}
