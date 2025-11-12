import Gallery from "@/Components/pages/Gallery";

export const metadata = {
  title: "Voxelhaus Gallery | Real Estate Visualization Portfolio",
  description:
    "Experience Voxelhaus Consultancy’s portfolio featuring virtual staging, 3D floor plans, and photo enhancements that elevate property marketing.",
  keywords: [
    "Voxelhaus",
    "virtual staging gallery",
    "real estate visuals",
    "3D floor plans",
    "photo editing portfolio",
  ],
  openGraph: {
    title: "Voxelhaus Gallery",
    description:
      "Browse premium real estate imagery crafted by Voxelhaus Consultancy.",
    url: "/gallery",
    siteName: "Voxelhaus Consultancy",
    images: [
      {
        url: "/assets/gallery.webp",
        width: 1200,
        height: 630,
        alt: "Voxelhaus Consultancy gallery preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voxelhaus Gallery",
    description:
      "See how Voxelhaus transforms properties with immersive visuals.",
    images: ["/assets/gallery.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/gallery",
  },
};

export default function Page() {
  return <Gallery />;
}

