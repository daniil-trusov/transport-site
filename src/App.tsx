import { About } from '@/components/About';
import { CountryList } from '@/components/CountryList';
import { Drivers } from '@/components/Drivers';
import { Gallery } from '@/components/Gallery';
import { Layout } from '@/components/Layout';
import { ProfileHeader } from '@/components/ProfileHeader';
import { Services } from '@/components/Services';
import { ContentContainer } from '@/components/shared';
import { Testimonials } from '@/components/Testimonials';
import { TripCalendar } from './components/TripCalendar';

function App() {
  return (
    <Layout>
      <ProfileHeader />

      <ContentContainer className="flex flex-col lg:flex-row py-[72px] gap-16 max-w-full xl:justify-center">
        <div className="flex-1 flex flex-col gap-10 xl:max-w-[752px]">
          <About />
          <Gallery />
        </div>

        <div className="flex-shrink-0 w-full lg:w-[376px] flex flex-col justify-start">
          <CountryList />

          <hr className="w-full bg-[#D6DDEB] h-[2px] border-0 mt-6 mb-16" />

          <TripCalendar />
        </div>
      </ContentContainer>

      <Drivers />

      <ContentContainer>
        <hr className="w-full bg-[#D6DDEB] h-[2px] border-0" />
      </ContentContainer>

      <Services />

      <Testimonials />
    </Layout>
  );
}

export default App;
