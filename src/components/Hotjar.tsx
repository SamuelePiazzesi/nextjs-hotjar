import React from "react";
import Script, { ScriptProps } from "next/script";

type HotJarProps = {
  id: string;
  sv: number;
  strategy?: ScriptProps["strategy"];
};

export interface WindowWithHotjar extends Window {
  hj: (method: string, ...args: any[]) => void;
}

declare const window: WindowWithHotjar;

export function Hotjar({ id, sv, strategy = "afterInteractive" }: HotJarProps) {
  return (
    <Script strategy={strategy}>
      {`
			<script>
    		(function(h,o,t,j,a,r){
        	h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        	h._hjSettings={hjid:${id},hjsv:${sv}}};
        	a=o.getElementsByTagName('head')[0];
        	r=o.createElement('script');r.async=1;
        	r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        	a.appendChild(r);
    		})(${window},document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
			</script>
			`}
    </Script>
  );
}