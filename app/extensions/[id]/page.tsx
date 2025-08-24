import { ExtensionDetailsPage } from '@/modules/extension-details';

interface ExtensionPageProps {
  params: {
    id: string;
  };
}

export default function ExtensionPage({ params }: ExtensionPageProps) {
  return (
    <div className="min-h-screen bg-black">
  
      <ExtensionDetailsPage extensionId={params.id} />

    </div>
  );
}
