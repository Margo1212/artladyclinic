export type Category = {
  description?: string;
  name: string;
  services: Service[];
};

export type Service = {
  name: string;
  description: string;
  price: number;
  image: string;
};

export type ServiceList = Service[];
