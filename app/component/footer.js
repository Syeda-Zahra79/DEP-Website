'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const path = usePathname();
    if(path.startsWith('/dashboard')){
        return null;
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div>
                    <Image width={150} height={150} src="/Logo.png" alt="logo" className={styles.logoImg} />
                </div>
                <p>Digital Empowerment Network is committed to work by designing indigenious interventions.</p>

            </div>
            <div className={styles.footerInner}>
                <h4 className={styles.headings}>Links</h4>
                <ul>
                    <li className={styles.lists}><Link className={styles.links} href=''>Home</Link></li>
                    <li className={styles.lists}><Link className={styles.links} href=''>Courses</Link></li>
                    <li className={styles.lists}><Link className={styles.links} href=''>Internship</Link></li>
                    <li className={styles.lists}><Link className={styles.links} href=''>Team</Link></li>
                    <li className={styles.lists}><Link className={styles.links} href=''>Offers</Link></li>
                    <li className={styles.lists}><Link className={styles.links} href=''>Our Gallery</Link></li>
                </ul>

            </div>
            <div className={styles.footerInner}>
                <h4 className={styles.headings}>Company</h4>
                <ul>
                    <li className={styles.lists}><Link className={styles.links} href=''>About Us</Link></li>
                    <li className={styles.lists}><Link className={styles.links} href=''>Contact Us</Link></li>
                    <li className={styles.lists}><Link className={styles.links} href=''>Privacy Policy</Link></li>
                    <li className={styles.lists}><Link className={styles.links} href=''>Terms and Conditions</Link></li>
                    <li className={styles.lists}><Link className={styles.links} href=''>Business Management</Link></li>
                </ul>

            </div>
            <div className={styles.footerInner}>
                <h4 className={styles.headings}>Follow Us</h4>
                <div className={styles.iconContainer}>
                    <Image width={30} height={30} src={"/images/Facebook.png"} />
                    <Image width={30} height={30} src={"/images/Instagram Circle.png"} />
                    <Image width={30} height={30} src={"/images/LinkedIn Circled.png"} />
                    <Image width={30} height={30} src={"/images/Youtube.png"} />
                </div>

            </div>


        </footer>
    )
}