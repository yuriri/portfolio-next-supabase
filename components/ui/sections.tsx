const SectionBlock = ({title, children, color = "pink"}: {title:string, color?: string, children:React.ReactNode}) => {
  let bgColor = "";
  if(color === "orange") {
    bgColor = "bg-orange-700";
  } else if(color === "blue") {
    bgColor = "bg-blue-700";
  } else if(color === "pink") {
    bgColor = "bg-pink-500";
  }

  return <section className="section-01">
    <h2 className="title-02"><span className={`text-white px-4 ${bgColor}`}>{title}</span></h2>
    {children}
  </section>
}

export default SectionBlock;