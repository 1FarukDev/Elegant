'use client'
import { usePathname } from 'next/navigation';
import React from 'react';
import ELFooter from "@/components/Layouts/ELFooter";
import ELHeader from "@/components/Layouts/ELHeader";

export default function PageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const hideHeader = pathname === '/signin' || pathname === '/login';

    return (
        <main>
            {!hideHeader && <ELHeader />}
            {children}
            {!hideHeader && <ELFooter />}
        </main>
    );
}
