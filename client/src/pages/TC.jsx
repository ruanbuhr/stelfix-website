import styles from "../stylemodules/tc.module.css";

export default function TC() {
  return (
    <div className={styles.container}>
      <h1>Stelfix Repair Terms and Conditions</h1>
      <h3>1. BACK UP YOUR DATA</h3>
      <p>
        When we repair your device, we may need to restore it to its original
        factory settings to complete the repair. Please back up your data so
        that it is not lost. To enable us to restore your phone to its factory
        settings, you will need to turn off the Find my iPhone feature.
      </p>

      <h3>2. OUR WARRANTY</h3>
      <p>
        2.1. We use only high-quality manufacturer compatible parts. We will
        give you a warranty on our replacement parts and workmanship from the
        date of repair for:
      </p>
      <p>2.1.1. One year on Apple device screen replacement repairs;</p>
      <p>
        2.1.2. Six months on Apple iPhone, iPad, Apple Watch, and MacBook
        battery replacements;
      </p>
      <p>2.1.3. Three months on all other device parts and repairs.</p>
      <p>
        2.2. Our warranty will be voided if someone else repairs the device, or
        if it is damaged after we have repaired it. Device damage that will void
        the warranty includes dents, cracks, burns, scratches, liquid damage,
        viruses, and malware.
      </p>
      <p>
        2.3. Our warranty is part of the agreement we have with you, and you
        cannot transfer it to someone else by, for instance, selling the device.
      </p>

      <h3>3. QUOTES, DEPOSITS, AND FEES</h3>
      <p>
        3.1. When you bring in your device for repair, we’ll need to inspect it
        to determine what’s wrong with it. For that, we charge the following
        consultation fees, even if your device is beyond economical repair:
      </p>
      <p>3.1.1. R179 for mobile phones and tablets</p>
      <p>3.1.2. R499 per hour for Apple MacBooks and iMacs</p>
      <p>
        3.2. If you let us repair the smart device, the consultation fee falls
        away. This does not apply to the Mac and iMac consultation fees.
      </p>
      <p>
        3.3. We will give you a quote for the repairs. We will automatically
        start with repairs under R500, but if the quote is for R500 or more, you
        must accept the quote before we begin. Our quotes are valid for seven
        days.
      </p>
      <p>
        3.4. If you accept our quote but decide not to leave your device with us
        while we order parts for the repair, you must pay a non-refundable
        deposit of 50% of the estimated repair value.
      </p>
      <p>
        3.5. You must pay the repair and replacement part fee before we will
        release your device.
      </p>

      <h3>4. WHERE OUR RESPONSIBILITY ENDS</h3>
      <p>
        4.1. We take great care when we repair a device, but devices are
        delicate, and opening them up may cause additional damage, or may reveal
        damage that you were not aware of. When you entrust your device to us
        you do so at your own risk. You cannot hold us responsible for:
      </p>
      <p>
        4.1.1 Any data loss - You can avoid any data loss by backing up your
        device before you book it in.
      </p>
      <p>
        4.1.2 Further damage to the device or further loss of functionality when
        we inspect the already damaged device, open it, or remove the screen or
        the battery. If your device was damaged by impact (typically you would
        have a cracked screen or a bent back cover), the impact may have caused
        internal component failure on your device and main board. To assess the
        extent of the impact damage we may need to open the device and remove
        the screen, battery, or other contents, and this may cause further
        damage. Screens and screen protectors are especially fragile and will
        crack further when they are removed.
      </p>
      <p>
        4.1.3 Further damage to the device or further loss of functionality when
        we work on the device. The back cover of your smart device holds
        everything together. If it is bent or dented, it may affect the
        replacement of your screen or battery. Where possible we will try and
        remove dents from corners or sides, if this is not possible, we will
        quote you for a new back cover. We cannot be held liable for workmanship
        warranty if the back cover is bent or dented. It is not always possible
        for us to source back covers, but where possible we will do so. Working
        on the microscopic components on the motherboard is very delicate and
        complex, and in some instances is not successful which could result in
        reduced or no functionality on your device. In some instances, it may be
        more cost-effective for you to replace the device than to repair it.
      </p>
      <p>4.1.4 Not being able to source replacement parts.</p>
      <p>
        4.1.5 Not being able to repair your device. Some devices cannot be
        repaired. We will let you know if it is time to let go. Touch ID is
        built into the home button on some devices. Replacing the home button
        will not revive your touch ID functionality if it was not working when
        you booked in your device. And, if the home button needs to be replaced,
        the touch ID functionality will be lost. The best way to repair a device
        that has suffered liquid damage is to replace all the internal
        components. Water and electronics simply don’t mix. The extent of the
        damage is unpredictable, and your phone may continue to work well, or
        suddenly malfunction. And there’s no telling when that might be, or what
        could go wrong.
      </p>
      <p>
        4.2. We are not an authorized Apple service provider. We will give you a
        warranty on the replacement parts we use, but you will void your
        manufacturer’s warranty if we repair your Apple device. If you still
        have your manufacturer’s warranty you should have the manufacturer
        repair your device. If your warranty has expired, you have nothing to
        lose and everything to gain by letting us work our magic on your device.
      </p>
      <p>
        4.3. When we repair Apple devices, the IP Rating (Ingress Protection
        Rating) will be lost, in other words, your device will no longer have a
        water and dust resistance rating.
      </p>
      <p>
        4.4. We may not be able to return your original damaged or faulty device
        components (like batteries) to you because it is hazardous to store
        these components.
      </p>

      <h3>5. COLLECTING YOUR DEVICE</h3>
      <p>
        5.1. We will let you know when your device is ready for collection. You
        must collect your device within 30 days. If you don’t collect your
        device on time, we may sell it as parts to recover our expenses.
      </p>
      <p>
        5.2. You must present a valid StelFix job card and personal
        identification such as your ID, to collect your device.
      </p>
      <p>
        5.3. Should you make a payment via EFT, your device may only be
        collected once the payment has cleared in our bank account.
      </p>
      <p>
        For any questions you may have, please contact{" "}
        <a className={styles.link} href="mailto:info@stelfix.co.za">
          info@stelfix.co.za
        </a>
        .
      </p>
    </div>
  );
}
