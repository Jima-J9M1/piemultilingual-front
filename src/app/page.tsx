import WhyChooseUs from '@/components/WhyChooseUs';
import { fetchFromStrapi } from '@/lib/strapi';

export default async function Home() {
  const data = await fetchFromStrapi('why-choose-uses?populate[features][populate]=*');
  // Adjust data extraction as per your Strapi response structure
  console.log(">>>>>>>>>>>>>>> data >>>>>>>>>>>>>>>>>",data.data[0].features);
  return <WhyChooseUs data={data.data[0]} />;
}