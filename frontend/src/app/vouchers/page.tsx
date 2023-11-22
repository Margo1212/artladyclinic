import { getNews } from "@lib/data/news";
import { Title } from "@components/Title/Title";
import type { Metadata } from "next";
import { getVouchers } from "@lib/data/vouchers";
import Image from "next/image";
import { VouchersImage } from "@lib/assets/svg/VouchersImage";
import { Media } from "types/types";

export type Voucher = {
  id: string;
  title: string;
  description: string;
  image?: { data: Media };
};

export const metadata: Metadata = {
  title: "Art Lady Clinic | Bony Podarunkowe",
  description:
    "Podaruj niezapomniany prezent dzięki naszym eleganckim bonom podarunkowym. Daj swoim bliskim możliwość relaksu i pielęgnacji w naszym luksusowym salonie kosmetycznym. Sprawdź, jak łatwo można sprawić radość.",
};

export default async function Page() {
  const vouchersData = getVouchers();

  const vouchers = await Promise.resolve(vouchersData).catch((err) =>
    console.error(err)
  );

  return (
    <section className="relative h-full w-full px-2 py-4 desktop:py-14 desktop:px-18 bg-white overflow-clip">
      <VouchersImage position="up" />
      <VouchersImage position="down" />
      <div className="flex flex-col items-center space-y-10 mb-14 tablet:px-2 laptop:px-10">
        <div className="flex flex-col gap-y-5 ">
          <Title>Bony podarunkowe</Title>
          <p className="text-center italic font-light text-[13px]">
            {vouchers.description ? vouchers.description : null}
          </p>
        </div>
        {vouchers.voucher ? (
          <div className="w-full grid grid-cols-1 px-5 tablet:px-8 laptop:px-0 desktop:px-10 tablet:grid-cols-2 laptop:grid-cols-3 gap-5 laptop:gap-10 ">
            {vouchers.voucher.map((v: Voucher) => (
              <div
                data-aos="zoom-in"
                className="w-full h-80 bg-white shadow-md rounded-b-md space-y-2"
                key={v.id}
              >
                <div className=" h-1/2 rounded-t-md">
                  <Image
                    className="w-full object-cover h-full rounded-t-md"
                    src={v.image?.data?.attributes.url ?? ""}
                    alt={v.image?.data?.attributes.alternativeText ?? ""}
                    width={v.image?.data?.attributes.width}
                    height={v.image?.data?.attributes.height}
                  />
                </div>
                <div className="w-full h-1/2 px-3 gap-y-2 flex flex-col">
                  <p className="text-base font-normal">{v.title}</p>
                  <p className="tablet:text-[10px] text-[9px]  break-words font-normal">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h2>No vouchers founded...</h2>
        )}
      </div>
    </section>
  );
}
