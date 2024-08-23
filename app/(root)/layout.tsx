

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main >
        sidebar
        {children}
 
    </main>
  );
}
