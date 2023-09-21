export type Service = {
  description?: string;
  name: string;
  childService: ChildService[];
};

export type ChildService = {
  name: string;
  description: string;
  price: number;
  image: string;
};

export type ServiceList = Service[];
