import type { ReactNode } from "react";

import { Links, Meta, Scripts, ScrollRestoration } from "react-router";
import { Header, Sidebar } from "~/components/domains";
import { useRootLoaderData } from "~/hooks";

type Props = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: Props) => {
  const { isSp } = useRootLoaderData();

  const width = isSp ? "w-full" : "w-[calc(100vw_-_16rem)]";

  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <div className="flex mt-header-hight">
          <Sidebar />
          <main className={`${width} px-12 py-8 prose prose-invert`}>
            {children}
          </main>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};
