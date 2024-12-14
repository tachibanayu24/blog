import { useRootLoaderData } from "~/hooks";

export const Sidebar = () => {
  const { isSp } = useRootLoaderData();

  if (isSp) {
    return null;
  }

  return (
    <aside className="h-[calc(100vh_-_44px)] sticky top-[44px] w-sidebar-width bg-slate-950 text-white p-4">
      <div className="shadow-inner-diagonal-lg rounded-3xl h-full">Sidebar</div>
    </aside>
  );
};
