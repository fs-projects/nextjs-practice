import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'About Page',
  description: 'About Page Description resides here',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
