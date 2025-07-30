// app/faculty/page.tsx
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

type Professor = {
  id: string;
  name: string;
  email: string;
  departmentId: string;
};

export default async function FacultyPage() {
  const res = await fetch('http://localhost:3000/api/faculty', {
    cache: 'no-store',
  });
  const professors: Professor[] = await res.json();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Faculty Members</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {professors.map((prof) => (
          <Link key={prof.id} href={`/faculty/${prof.id}`}>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">{prof.name}</h2>
                <p className="text-gray-500">{prof.email}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
