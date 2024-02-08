import styles from "../stylemodules/pricing.module.css";

export default function Pricing() {
  return (
    <div className={styles.pricing}>
      <h1>Repair Pricing</h1>
      <table>
        <thead>
          <tr>
            <th>Device</th>
            <th>Screen</th>
            <th>Battery</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>iPhone 11 Pro Max</td>
            <td>4799</td>
            <td>799</td>
          </tr>
          <tr>
            <td>iPhone 11 Pro</td>
            <td>3899</td>
            <td>799</td>
          </tr>
          <tr>
            <td>iPhone 11</td>
            <td>2899</td>
            <td>799</td>
          </tr>
          <tr>
            <td>iPhone XS Max</td>
            <td>3499</td>
            <td>699</td>
          </tr>
          <tr>
            <td>iPhone XS</td>
            <td>2899</td>
            <td>699</td>
          </tr>
          <tr>
            <td>iPhone XR</td>
            <td>2399</td>
            <td>599</td>
          </tr>
          <tr>
            <td>iPhone X</td>
            <td>2899</td>
            <td>599</td>
          </tr>
          <tr>
            <td>iPhone 8 Plus</td>
            <td>1899</td>
            <td>399</td>
          </tr>
          <tr>
            <td>iPhone 8</td>
            <td>1199</td>
            <td>399</td>
          </tr>
          <tr>
            <td>iPhone 7 Plus</td>
            <td>1499</td>
            <td>399</td>
          </tr>
          <tr>
            <td>iPhone 7</td>
            <td>899</td>
            <td>399</td>
          </tr>
          <tr>
            <td>iPhone 6s Plus</td>
            <td>699</td>
            <td>349</td>
          </tr>
          <tr>
            <td>iPhone 6s</td>
            <td>599</td>
            <td>299</td>
          </tr>
          <tr>
            <td>iPhone 6 Plus</td>
            <td>699</td>
            <td>299</td>
          </tr>
          <tr>
            <td>iPhone 6</td>
            <td>599</td>
            <td>299</td>
          </tr>
          <tr>
            <td>iPhone SE</td>
            <td>-</td>
            <td>299</td>
          </tr>
          <tr>
            <td>iPhone 5s</td>
            <td>-</td>
            <td>159</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
