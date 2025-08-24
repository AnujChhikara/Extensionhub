import { ErrorPage } from '@/components/ui/ErrorPage';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function UnauthorizedPage() {
  return (
    <ErrorPage
      code='401'
      title='Access Denied'
      description="You don't have permission to access this page. Please sign in with the appropriate account."
      showHomeButton={true}
      showRefreshButton={false}
      showBackButton={true}
      customActions={
        <div className='flex flex-col sm:flex-row gap-3 justify-center'>
          <Link href='/auth/signin'>
            <Button className='flex items-center justify-center'>
              Sign In
            </Button>
          </Link>
          <Link href='/'>
            <Button
              variant='outline'
              className='flex items-center justify-center'
            >
              Go Home
            </Button>
          </Link>
        </div>
      }
    />
  );
}
