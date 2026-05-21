import { sql } from '@/app/lib/db';

export default async function Page() {
  const data = await sql`SELECT NOW()`;

  return (
    <div>
      <p>Database connected!</p>
      <pre>{JSON.stringify(data.rows, null, 2)}</pre>
    </div>
  );
}