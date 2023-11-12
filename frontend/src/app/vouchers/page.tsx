import { getNews } from "@lib/data/news";
import { Title } from "@components/Title/Title";
import type { Metadata } from "next";
import Link from "next/link";
import { error } from "console";
import { getVouchers } from "@lib/data/vouchers";
import { Card } from "@lib/components/Card/Card";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Art Lady Clinic | Bony Podarunkowe",
  description: "...",
};

export default async function Page() {
  const vouchersData = getVouchers();

  const vouchers = await Promise.resolve(vouchersData);

  return (
    <section className="h-full w-full px-3 py-4 desktop:py-14 desktop:px-20 bg-white">
      <div className="flex flex-col items-center space-y-10 mb-14 tablet:px-10 laptop:px-10">
        <Title>{vouchers.title}</Title>

        <div className="w-full grid grid-cols-1 px-10 tablet:px-20 tablet:grid-cols-2 laptop:grid-cols-3 gap-5 laptop:gap-10 ">
          {vouchers.voucher.map((v: any) => (
            <div
              data-aos="zoom-in"
              className="w-full h-72 bg-white shadow-md rounded-b-md space-y-2"
              key={v.id}
            >
              <div className=" h-1/2 rounded-t-md">
                <Image
                  className="w-full object-cover h-full rounded-t-md"
                  src={v.image.data?.attributes.url}
                  alt={v.image.data?.attributes.alternativeText}
                  width={v.image.data?.attributes.width}
                  height={v.image.data?.attributes.height}
                />
              </div>
              <div className="w-full px-4 space-y-1">
                <p className="text-base font-normal">{v.title}</p>
                <p className="text-[10px] font-normal">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
