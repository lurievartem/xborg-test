import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth/next";
import Link from 'next/link'

export default async function InfoPage() {
  const session = await getServerSession(authOptions);

  return (
    <section>
      <p>Info Page</p>
      <p>Still signed {session.user && session.user.name}</p>
      <Link href="/">Link to Main page</Link>
    </section>
  );
}
