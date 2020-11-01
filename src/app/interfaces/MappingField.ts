import { Term } from './Term';
export interface MappingField {
  id?: number;
  name: string;
  items: Term[];
}
