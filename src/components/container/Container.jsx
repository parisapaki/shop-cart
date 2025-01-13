export default function Container({ children }) {
  return (
    <div className="sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] xl:px-[3rem] 2xl:px-[4rem]">
      {children}
    </div>
  );
}
