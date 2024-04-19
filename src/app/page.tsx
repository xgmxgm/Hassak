import { WelcomeTitle } from '@/widgets/WelcomeTitle'
import { CompanyOffers } from '@/widgets/CompanyOffers'
import styles from "./page.module.css";
import { Achievements } from '@/widgets/Achievements'

export default function Home() {
  return (
    <>
      <div className={styles.Main}>
        <div className={styles.Content}>
          <WelcomeTitle />
          <CompanyOffers />
          <Achievements />
        </div>
      </div>
    </>
  );
}
