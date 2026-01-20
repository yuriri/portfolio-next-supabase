export function HeadingLv02({ children, color }: Readonly<{
  children: React.ReactNode,
  color: string
}>) {
  return <h2 className="title-02"><span className={`text-white px-4 bg-${color}`}>{children}</span></h2>
}