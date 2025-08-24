import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className='min-h-screen bg-black flex items-center justify-center px-4'>
      <div className='w-full max-w-md'>
        <SignIn
          appearance={{
            elements: {
              rootBox: 'mx-auto',
              card: 'bg-gray-900/95 backdrop-blur-sm border border-gray-700 shadow-xl',
              headerTitle: 'text-white',
              headerSubtitle: 'text-gray-400',
              formButtonPrimary: 'bg-blue-600 text-white hover:bg-blue-700',
              formButtonSecondary:
                'bg-transparent border border-gray-600 text-white hover:bg-gray-800',
              formFieldInput:
                'bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-500',
              formFieldLabel: 'text-gray-300',
              footerActionLink: 'text-blue-400 hover:text-blue-300',
              dividerLine: 'bg-gray-700',
              dividerText: 'text-gray-400',
              socialButtonsBlockButton:
                'bg-gray-800 border border-gray-600 text-white hover:bg-gray-700',
              socialButtonsBlockButtonText: 'text-white',
              formFieldInputShowPasswordButton:
                'text-gray-400 hover:text-white',
              formFieldInputShowPasswordButtonIcon: 'text-gray-400',
              formResendCodeLink: 'text-blue-400 hover:text-blue-300',
              formFieldErrorText: 'text-red-400',
              formFieldError: 'border-red-500',
              alert: 'bg-red-900/50 border border-red-700 text-red-200',
              alertText: 'text-red-200',
            },
          }}
        />
      </div>
    </div>
  );
}
