export interface MapRouteState {
  lat?: number
  lng?: number
  zoom?: number
}

export interface Fraternity {
  name: string
  motto: string
  founded: string
  foundedIn: string
  colors: string[]
  colorsRtl: boolean
  isActive: boolean
}

export type ISODate = string; // YYYY-MM-DD

interface GraveLocation {
  sector?: string | null;
  row?: string | null;
  grave?: string | null;

  area?: string | null;
}

export interface Burial {
  cemetery: string;
  city: string;

  surname: string;
  firstName: string;

  fraternities: string[];

  dateOfBirth: ISODate | null;
  dateOfDeath: ISODate | null;

  location: GraveLocation;

  lat: number | null;
  lon: number | null;
}

export interface Cemetery {
  id: string // stable slug / key
  name: string
  city: string

  founded?: string | null;
  closed?: string | null;

  address: string | null

  latitude: number | null
  longitude: number | null

  phone: string | null
  email: string | null

  openingHours: string | null

  notes?: string | null
}
