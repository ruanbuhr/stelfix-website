import styles from "../stylemodules/about.module.css";
import daniel from "../assets/daniel-maree.png";
import ruan from "../assets/ruan_buhr.png";

export default function About() {
  return (
    <div>
      <div className={styles.about}>
        <h1>About Us</h1>
        <div className={styles.aboutdetails}>
          <p>
            In 2020, during the lockdown, Daniel Maree, founder of Stelfix, took
            it upon himself to learn how to fix iPhone screens and batteries.
            After sourcing parts from abroad, he founded Stelfix. As a one-man
            show, Daniel has successfully repaired numerous phones, focusing on
            iPhone screen and battery fixes.
          </p>
          <p>
            Stelfix is all about quick and convenient service. If you need a
            repair, just log a request, and a technician will swing by to pick
            up your device. Within 24 hours, your fixed phone will be dropped
            off at a time that suits you. Simple and straightforward, that's how
            Stelfix operates.
          </p>
          <p>
            In addition to our expert repair services, Stelfix is your go-to
            destination for buying and selling second-hand phones. Looking for
            an affordable upgrade or considering parting ways with your current
            device? Stelfix has you covered. We offer a straightforward and
            hassle-free process. Whether you're selling your old phone or
            browsing for a reliable, pre-owned device, our team ensures a
            seamless experience. Trust Stelfix for not only top-notch repairs
            but also a convenient solution for your phone-buying and selling
            needs.
          </p>
        </div>
      </div>
      <div className={styles.about}>
        <h1>Meet Our Team</h1>
        <div className={styles.aboutdetails}>
          <div className={styles.title}>
            <img className={styles.profileimage} src={daniel}></img>
            <div className={styles.profiledetails}>
              <h2>Daniel Maree</h2>
              <h3>Founder, Owner and Head Technician</h3>
            </div>
          </div>
          <p>
            Daniel, at the helm of Stelfix, is a down-to-earth third-year BSc
            Human Life Science student at Stellenbosch University. As the
            founder and owner of Stelfix, he's the go-to guy for all your repair
            needs, serving as the head technician. Outside the tech world,
            you'll find him playing the piano and diving into a good book.
            Daniel's practical approach and diverse interests bring a relatable
            and friendly vibe to Stelfix's atmosphere.
          </p>
        </div>
        <div className={styles.aboutdetails}>
          <div className={styles.title}>
            <img className={styles.profileimage} src={ruan}></img>
            <div className={styles.profiledetails}>
              <h2>Ruan Buhr</h2>
              <h3>Website Developer and Head of Internet Visibility</h3>
            </div>
          </div>
          <p>
            Meet Ruan, Stelfix's tech-savvy website developer and internet
            visibility maestro. As a third-year BDatSci student at Stellenbosch
            University, Ruan brings data science expertise to the team. Outside
            coding and data analytics, Ruan enjoys an active lifestyle, aligning
            a commitment to health with the demands of the digital world. A
            lover of knowledge, Ruan finds interest in a good thought provoking
            book. This versatile approach is pivotal in shaping Stelfix's online
            identity, ensuring technology is accessible and user-friendly for
            all.
          </p>
        </div>
      </div>
    </div>
  );
}
