import Image from 'next/image';
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth/next";
import Link from 'next/link'
import Weather from '@/app/components/WeatherContainer';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h2>Test xborg App</h2>
      {session && (
        <div>
          <p>Signed in as {session.user && session.user.name}</p>
          <a href="/api/auth/signout">Sign out by link</a>
          <p><Link href="/info">Link to Info Page</Link></p>
          <Weather />
        </div>
      )}

      {!session && (
        <p>Not signed in</p>
      )}
    </main>
  )
}
