// import { NetworksAndSystems } from '@/widgets/NetworksAndSystems'
import { CompanyOffers } from '@/widgets/CompanyOffers'
import { WelcomeTitle } from '@/widgets/WelcomeTitle'
import { Achievements } from '@/widgets/Achievements'
import styles from "./page.module.css";
import { Projects } from '@/widgets/Projects'
// import { Sponsors } from '@/widgets/Sponsors'

export default function Home() {
  return (
    <>
      <div className={styles.Main}>
        <div className={styles.Content}>
          <WelcomeTitle />
          <CompanyOffers />
          <Achievements />
          {/* <NetworksAndSystems /> */}
          <Projects />
          {/* <Sponsors /> */}
        </div>
      </div>
    </>
  );
}
