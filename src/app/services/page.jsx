import Services from "@/Components/pages/Services";

export const metadata = {
  title: '', 
  description: '', 
  keywords: [
   
  ],
  openGraph: {
    title: '', 
    description: '', 
    url: '',
    siteName: '',
    images: [
      {
        url: '', 
        width: 1200,
        height: 630,
        alt: '', 
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '', 
    description: '', 
    images: [''], 
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '', 
    languages: {
      'en-IN': '',
    },
  },
};


export default function Page() {
  return <Services />;
}

