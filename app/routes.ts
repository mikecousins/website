import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('./routes/_index.tsx'),
  route('about', './routes/about.tsx'),
  route('movies', './routes/movies.tsx'),
  route('posts/:slug', './routes/posts_.$slug.tsx'),
  route('posts', './routes/posts.tsx'),
  route('projects/:slug', './routes/projects_.$slug.tsx'),
  route('projects', './routes/projects.tsx'),
  route('services', './routes/services.tsx'),
] satisfies RouteConfig;
