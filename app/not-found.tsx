import { ErrorPage } from '@/components/ui/ErrorPage';

export default function NotFound() {
  return (
    <ErrorPage
      code='404'
      title='Page Not Found'
      description="The page you are looking for doesn't exist or has been moved to a different location."
    />
  );
}
