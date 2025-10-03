import { format } from 'date-fns';
import { Badge } from './catalyst/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './catalyst/table';

interface Project {
  id: string;
  data: {
    meta: {
      company: string;
      role: string;
      tags: string[];
      startDate: Date;
    };
  };
}

export function ProjectsTable({ projects }: { projects: Project[] }) {
  return (
    <Table className="mt-8">
      <TableHead>
        <TableRow>
          <TableHeader>Company</TableHeader>
          <TableHeader>Role</TableHeader>
          <TableHeader>Tags</TableHeader>
          <TableHeader>Date</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id} href={`/projects/${project.id.replace('.mdx', '')}`}>
            <TableCell className="font-medium">
              {project.data.meta.company}
            </TableCell>
            <TableCell className="font-medium">
              {project.data.meta.role}
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                {project.data.meta.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </TableCell>
            <TableCell className="text-zinc-500">
              {format(project.data.meta.startDate, 'MMMM do, yyyy')}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
