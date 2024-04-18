import { WelcomeTitle } from '@/widgets/WelcomeTitle'
import { CompanyOffers } from '@/widgets/CompanyOffers'
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.Main}>
        <div className={styles.Content}>
          <WelcomeTitle />
          <CompanyOffers />
        </div>
      </div>
    </>
  );
}
