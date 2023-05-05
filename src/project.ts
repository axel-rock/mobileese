export enum CustomerType {
  ENTERPRISE = 'enterprise',
  MOBILITY_OPERATOR = 'mobility_operator',
  LOCAL_COMMUNITY = 'local_community',
  CONDOMINIUM = 'condominium',
}

export interface Project {
  id?: string;
  customerType?: CustomerType;
  email?: string;
  address?: string;
  lat?: number;
  lng?: number;
  images?: string[];
  numberOfParkingSpots?: number;
  chargingSpeed?: number;
}