import { getNews } from "@lib/data/news";
import { Title } from "@components/Title/Title";
import type { Metadata } from "next";
import Link from "next/link";
import { error } from "console";
import { getVouchers } from "@lib/data/vouchers";
import { Card } from "@lib/components/Card/Card";
import Image from "next/image";

export const metadata: Metadata = {
  title: "...",
  description: "...",
};

export default async function Page() {
  const vouchersData = getVouchers();

  const vouchers = await Promise.resolve(vouchersData);

  return (
    <section className="h-full w-full px-3 py-4 laptop:py-14 laptop:px-20 bg-white">
      <div className="flex flex-col items-center space-y-10 mb-14  px-40">
        <Title>{vouchers.title}</Title>

        <div className="w-full flex gap-24">
          {vouchers.voucher.map((v: any) => (
            <div
              className="w-72 h-64 bg-white shadow-md rounded-b-md space-y-5"
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
              <div className="w-full px-4 space-y-4">
                <p className="text-lg font-normal">{v.title}</p>
                <p className="text-xs font-normal">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
