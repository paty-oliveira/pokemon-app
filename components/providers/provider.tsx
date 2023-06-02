"use client";

import { index } from "@/store";
import { Provider } from "react-redux";
import React from "react";

export function Providers({ children }: { children: React.ReactNode}) {
	return <Provider store={index}>{children}</Provider>;
}
