// app/faculty/[id]/page.tsx

export const dynamic = 'force-dynamic';

import { professors, departments } from '@/lib/db';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

type Props = {
  params: { id: string };
};

export default async function FacultyDetailPage({params}:{params:{id:string}}) {
  const professor = professors.find((prof) => prof.id === params.id);

  if (!professor) return notFound();

  const department = departments.find((dept) => dept.id === professor.departmentId);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Card>
        <CardContent className="p-6 space-y-4">
          <h1 className="text-3xl font-bold">{professor.name}</h1>
          <p className="text-gray-600">{professor.email}</p>
          <p className="text-gray-800 font-medium">
            Department: {department?.name || 'N/A'}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
