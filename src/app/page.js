import HeroSection from '@/components/hero';
import About from '@/components/about';
import Expandable from '@/components/expandable';
import Join from '@/components/join';

export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between bg-blue bg-cover bg-fixed bg-center">
                <HeroSection />

                <section className="w-full pb-20 backdrop-blur-xl bg-gradient-to-b from-blue to-slate-700/50">
                    <About />
                    <Expandable />
                    <Join />
                </section>
            </main>
        </>
    );
}
