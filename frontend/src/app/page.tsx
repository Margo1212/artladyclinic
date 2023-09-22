import "./../styles/globals.css";

import { ListServices } from "@components/ListServices/ListServices";

export default async function Home() {
  return (
    <>
      <div>Artladyclinic</div>
      <ListServices />
    </>
  );
}
