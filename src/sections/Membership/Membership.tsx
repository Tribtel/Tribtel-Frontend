// Convince sutomers to signup by showcasing benefits

import Button from "../../components/Button/Button";
import styles from "./Membership.module.css";

export default function Membership() {
    return (
        <section className={styles.membership}>

            <div className={styles.left}>
                <h3>Become a member</h3>
                <p>
                  Get exclusive rates, earn points towards free nights, and more.
                  Already a member? Sign in below.  
                </p>
                <div className={styles.actions}>
                  <Button variant="primary">Join for Free</Button>
                  <Button variant="secondary">Sign In</Button>
                </div>
            </div>

            <div className={styles.right}>
                <ul>
                 <li>Free breakfast with every stay</li>
                 <li>Priority room upgrades</li>
                 <li>Access to members‑only lounges</li>
                 <li>Special seasonal discounts</li>
                </ul>
            </div>
        </section>
    );
};