import { Landing } from '@/shared/types/blocks/landing';
import { HelloWorldLanding } from '@/themes/default/blocks/hello-world-landing';

export default async function LandingPage({
  locale,
  page,
}: {
  locale?: string;
  page: Landing;
}) {
  return <HelloWorldLanding />;
}
