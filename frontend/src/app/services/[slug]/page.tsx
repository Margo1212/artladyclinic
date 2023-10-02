import { getServiceBySlug } from "@lib/data/services";
import { Service } from "types/types";

export default async function Page({ params }: { params: { slug: string } }) {
  const serviceData = getServiceBySlug({ slug: params.slug });
  const service: Service = await Promise.resolve(serviceData);

  return (
    <div>
      <h2>Service: {service.name}</h2>
      <p>{service.description}</p>
      <p>{service.price}</p>
    </div>
  );
}
