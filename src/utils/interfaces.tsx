export interface dimensions {
  metric: string;
  imperial: string;
}

export interface BreedApiResponse {
  id: number;
  name: string;
  breed_group: string;
  bred_for: string;
  weight: dimensions;
  height: dimensions;
  life_span: string;
  temperament: string;
  reference_image_id: string;
}

export interface Breed {
  id: number;
  name: string;
  breed_group: string;
  bred_for: string;
  weight: string;
  height: string;
  life_span: string;
  temperament: string;
  image: string;
}

export interface TableHeadCell {
  id: string;
  numeric: boolean;
  disablePadding: boolean;
  label: string;
  sortable: boolean;
}
