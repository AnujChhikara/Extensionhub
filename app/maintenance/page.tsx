import { ErrorPage } from '@/components/ui/ErrorPage';

export default function MaintenancePage() {
  return (
    <ErrorPage
      code='503'
      title='Under Maintenance'
      description="We're currently performing scheduled maintenance to improve your experience. Please check back soon."
      showRefreshButton={true}
      showHomeButton={true}
      showBackButton={false}
    />
  );
}
