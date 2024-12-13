import type { ReactNode } from "react";

import { Links, Meta, Scripts, ScrollRestoration } from "react-router";
import { Header } from "~/components/domains";

type Props = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: Props) => {
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
        <main className="mt-[44px] px-12 py-8 prose prose-invert">
          {children}
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};
