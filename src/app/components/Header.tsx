"use client";

export interface HeaderProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right'
}

export default function Header({ title, subtitle, align = 'center' }: HeaderProps) {
    return (
        <>
            <section className={`text-${align}`}>
                <h1 className={`text-3xl`}>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
            </section>
        </>
    )
}