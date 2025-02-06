import Image from 'next/image';
import { FloatingBubbles } from '@/components/Animations/floating-bubbles';
import { GradientBackground } from '@/components/layouts/gradient-background';
import { AnimatedGradientText } from '@/components/ui/gradient-text';
import { GradientButton } from '@/components/ui/gradient-button';
import NavBar from '@/components/header/NavBar';
import HomeDrawer from '../_home/components/HomeDrawer';
import Footer from '@/components/Footer';
import AnimatedYPage from '@/components/Animations/AnimatedYPage';

export default function Cleaning() {
  return (
    <>
      <NavBar />
      <HomeDrawer />
      <AnimatedYPage>
        <GradientBackground>
          <FloatingBubbles />
            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
              <div className="max-w-4xl mx-auto space-y-8">
                <AnimatedGradientText text="Professional Cleaning Services" />

                <p className="text-xl text-blue-800 dark:text-blue-200">We provide top-tier cleaning services for homes, offices, and more.</p>

                <GradientButton>
                  <span>Book a Service</span>
                </GradientButton>
              </div>
            </div>

        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Cleaning Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard title="Home Cleaning" image="https://i.pinimg.com/736x/ac/98/58/ac985882fef98f9f891c7614e70677bf.jpg" />
            <ServiceCard title="Office Cleaning" image="https://i.pinimg.com/736x/e6/19/59/e619597b998ba0b556660bb9cab81e66.jpg" />
            <ServiceCard title="Carpet Cleaning" image="https://i.pinimg.com/736x/de/9d/7d/de9d7d9317cea6c8143824a67eb3c18f.jpg" />
            <ServiceCard title="Deep Cleaning" image="https://i.pinimg.com/736x/27/e6/b0/27e6b05f2becaeab706bf0b405e8bf28.jpg" />
            <ServiceCard title="Move-in/Move-out Cleaning" image="https://i.pinimg.com/736x/52/56/a0/5256a0b5070f06d07820cb90ea2b8c6f.jpg" />
            <ServiceCard title="Window Cleaning" image="https://i.pinimg.com/736x/38/98/9a/38989a71c9ecf6a10d3dd42a6d1f22db.jpg" />
          </div>
        </section>
        </GradientBackground>
      </AnimatedYPage>
      <Footer />
    </>
  );
}

interface ServiceCardProps {
  title: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <Image src={image} alt={title} width={400} height={250} className="w-full h-80 object-cover" />
      <div className="p-4 bg-white text-center">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};
