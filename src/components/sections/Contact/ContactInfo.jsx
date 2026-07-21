import styles from "./Contact.module.css";

import {
FaPhoneAlt,
FaEnvelope,
FaMapMarkerAlt
}
from "react-icons/fa";

const ContactInfo = () => {
  return (

<div className={styles.info}>

<div className={styles.card}>

<FaPhoneAlt/>

<h3>Phone</h3>

<p>+91 8796569279</p>
<p>+91 9039442111</p>

</div>

<div className={styles.card}>

<FaEnvelope/>

<h3>Email</h3>

<p>sales@lycheemedia.com.in</p>

</div>

<div className={styles.card}>

<FaMapMarkerAlt/>

<h3>Location</h3>

<p>Ghaziabad, India</p>

</div>

</div>

  );
};

export default ContactInfo;