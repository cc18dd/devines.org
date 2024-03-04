/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import styles from "./Wedding.module.css";

import expand_more from "../assets/icons/expand_more.svg";

import nyc from "../assets/images/nyc.jpg";
import proposal from "../assets/images/proposal.jpg";
import savannah from "../assets/images/savannah.jpg";

import steph from "../assets/images/steph.jpg";
import josh from "../assets/images/josh.jpg";
import anouk from "../assets/images/anouk.jpg";
import gunner from "../assets/images/gunner.jpg";
import ian from "../assets/images/ian.jpg";
import jared from "../assets/images/jared.jpg";
import joseph from "../assets/images/joseph.jpg";
import julia from "../assets/images/julia.jpg";
import kaity from "../assets/images/kaity.jpg";
import lindsey from "../assets/images/lindsey.jpg";
import lucy from "../assets/images/lucy.jpg";
import noah from "../assets/images/noah.jpg";

export function Wedding() {
  return (
    <main id={styles.main}>
      <Helmet bodyAttributes={{ class: styles.body }}>
        <title>A Devine Wedding</title>
      </Helmet>

      <ScrollToAnchor />
      <div className={styles.container}>
        <h1>Stephanie & Joshua</h1>
        <WeddingNav />
        {/* TODO: make this more dynamic */}
        <div className={styles.photos}>
          <img src={nyc} alt="Stephanie & Joshua in NYC" />
          <img src={proposal} alt="Stephanie & Joshua's Proposal" />
          <img src={savannah} alt="Stephanie & Joshua in Savannah" />
        </div>
        <h2>
          June 1st, 2024 -{" "}
          <span className={styles.no_wrap}>Silver Hearth Lodge</span>
        </h2>
        <p>
          10231 Sugar Camp Creek Rd
          <br />
          Bent Mountain, VA 24059
        </p>
        <p>Please arrive by 4:00pm to be seated for the ceremony.</p>

        <CollapsibleSection title="Lodging" id="lodging">
          <div className={styles.card}>
            <p>Holiday Inn Tanglewood - Roanoke</p>

            <blockquote>
              For your convenience, we&apos;ve blocked off rooms at a discounted
              rate of $119/night.
              <br />
              To access this rate, please book via the link below. If booking
              over the phone, please mention the &quot;Devine Wedding&quot; room
              block.
              <br />
            </blockquote>

            <Link
              className={styles.booking_link}
              to="https://www.holidayinn.com/redirect?path=rates&brandCode=HI&localeCode=en&regionCode=1&hotelCode=roatw&checkInDate=31&checkInMonthYear=042024&checkOutDate=02&checkOutMonthYear=052024&_PMID=99801505&GPC=JDW&cn=no&viewfullsite=true"
            >
              Devine Wedding Booking Link
            </Link>

            <p className={styles.address}>
              4468 Starkey Rd
              <br />
              Roanoke, VA 24018
              <br />
              540-774-4400
            </p>

            <iframe
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101705.32380296497!2d-80.1228544!3d37.1933083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884d0cc7c6853bbd%3A0x4680b214c4bd2895!2sHoliday%20Inn%20Roanoke-Tanglewood-Rt%20419%26I581%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2sus!4v1709496102991!5m2!1sen!2sus"
              width="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="FAQ" id="faq">
          <h4>What should I wear?</h4>
          <div className={styles.card}>
            <p>&gt; Cocktail Attire</p>

            <blockquote>
              A small step above semi-formal, cocktail attire is a balance
              between elegant and comfortable. Instead of a floor-length dress,
              women may opt for a tea-length, knee-length, or midi look. Men
              should wear a suit and tie. Please be advised, the wedding colors
              are dark and sage green.
            </blockquote>
          </div>

          <h4>Where do I go/park?</h4>
          <div className={styles.card}>
            <p>&gt; Follow the signs</p>

            <blockquote>
              The venue is located in the mountains, so there is a bit of a
              drive to get there. We will have signs posted along the way to
              help guide you. There is a parking lot at the venue, so you
              won&apos;t have to worry about parking.
            </blockquote>

            <iframe
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5328.388867918014!2d-80.09943762283783!3d37.16114844726785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884d758af048ac67%3A0x4709c36b55e56fbd!2sSilver%20Hearth%20Lodge!5e1!3m2!1sen!2sus!4v1705777048739!5m2!1sen!2sus"
              width="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <h4>Who can I bring?</h4>
          <div className={styles.card}>
            <p>&gt; Only those written on your invite</p>

            <blockquote>
              To maximize the presence of our loved ones, we kindly ask that
              only those listed on the invitation attend.
            </blockquote>

            <p>&gt; No children</p>
            <blockquote>
              Due to limitations set by the venue, we are unable to accommodate
              children at our wedding. Please enjoy an adults-only ceremony and
              reception.
            </blockquote>

            <p>&gt; No pets</p>
            <blockquote>
              Although we love all of our furry friends, animals are not allowed
              at the venue.
            </blockquote>
          </div>

          <h4>What food options will there be?</h4>
          <div className={styles.card}>
            <p>&gt; BBQ, buffet style!</p>

            <blockquote>
              <ul>
                <li>BBQ Pork & Chicken</li>
                <li>Choose Your Own Sauce</li>
                <li>Coleslaw</li>
                <li>Cowboy Beans</li>
                <li>Mac & Cheese</li>
                <li>Parmesan Garlic Potatoes</li>
                <li>Green Beans</li>
                <li>California Medley</li>
              </ul>
            </blockquote>

            <p>
              Please let us know when you RSVP if you have any strict dietary
              restrictions the caterer should be made aware of. We&apos;re happy
              to accommodate!
            </p>
          </div>

          <h4>What are the plans for bad weather?</h4>
          <div className={styles.card}>
            <p>&gt; The venue has an indoor option</p>

            <blockquote>
              We will be able to have the ceremony and reception there
              regardless of the weather.
            </blockquote>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Meet the Bridal Party" id="party">
          <Partier
            name={
              <>
                Stephanie Valencic<span className={styles.pencil}>‸Devine</span>
              </>
            }
            role="Bride"
            bio="TODO"
            image={steph}
          />
          <Partier
            name="Anouk Rudd"
            role="Maid of Honor"
            bio="Anouk is from Floyd, Virginia. Stephanie and Anouk met in 2018 at Governor’s School in Pulaski, Virginia. Since then, they have been inseparable and always make time to grab a latte and a not-so-quick shopping trip."
            image={anouk}
            fact="insert quote here"
          />
          <Partier
            name="Kaity McCullough"
            role="Bridesmaid"
            bio="Kaity is from Powhatan, Virginia, but currently lives in Colorado Springs, Colorado. Stephanie and Kaity met in 2020 in the Virginia Tech Corps of Cadets. While they only lived together for a year, they were in each other’s rooms enough that you would never know."
            image={kaity}
            fact="insert quote here"
          />
          <Partier
            name="Julia Moschella"
            role="Bridesmaid"
            bio="Julia is from Christiansburg, Virginia, but currently lives in Charlottesville, Virginia, completing her Master’s degree at UVA. Stephanie and Julia met in middle school through band, soccer, basketball, and probably everything else."
            image={julia}
            fact="insert quote here"
          />
          <Partier
            name="Lindsey Devine"
            role="Bridesmaid"
            bio="Lindsey is from Morganton, North Carolina. She is the second youngest of the Devine siblings and the only girl."
            image={lindsey}
            fact="insert quote here"
          />
          <Partier
            name="Joshua Devine"
            role="Groom"
            bio="TODO"
            image={josh}
            right
          />
          <Partier
            name="Ian Switzer"
            role="Best Man"
            bio="TODO"
            image={ian}
            fact="insert quote here"
            right
          />
          <Partier
            name="Jared Arnold"
            role="Groomsman"
            bio="Jarold is ... TODO"
            image={jared}
            fact="insert quote here"
            right
          />
          <Partier
            name="Joseph Banks"
            role="Groomsman"
            bio="TODO"
            image={joseph}
            fact="insert quote here"
            right
          />
          <Partier
            name="Noah Devine"
            role="Groomsman"
            bio="TODO"
            image={noah}
            fact="insert quote here"
            right
          />
          <Partier
            name="Gunner"
            role="Honorable Mention"
            bio="TODO"
            image={gunner}
          />
          <Partier
            name="Lucy"
            role="Honorable Mention"
            bio="TODO"
            image={lucy}
          />
        </CollapsibleSection>

        <CollapsibleSection title="Vendor Information" id="vendors">
          <div className={styles.card}>
            <Vendor
              role="Band"
              name="Midnight Blue"
              url="https://midnightblue.band/"
            />

            <Vendor
              role="Photographer"
              name="Rebecca Lynn Photography"
              url="https://rebeccalynnphotog.mypixieset.com/"
            />

            <Vendor role="Catering" name="Christian Catering" url="" />

            <Vendor
              role="Coordinator"
              name="Married by Merriman"
              url="https://marriedbymerriman.wixsite.com/mysite"
            />

            <Vendor
              role="Officiant"
              name={
                <>
                  Gary McCoy,{" "}
                  <span className={styles.church}>
                    Blacksburg Christian Church
                  </span>
                </>
              }
              url="https://www.blacksburgchristian.org/"
            />

            <Vendor
              role="Venue"
              name="Silver Hearth Lodge"
              url="https://www.silverhearthlodge.com/"
            />
          </div>
        </CollapsibleSection>
      </div>
    </main>
  );
}

export function RSVP() {
  return (
    <main id={styles.main}>
      <Helmet bodyAttributes={{ class: styles.body }}>
        <title>A Devine Wedding</title>
      </Helmet>

      <div className={styles.container}>
        <h1>Stephanie & Joshua</h1>
        <WeddingNav />

        <div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfclalK_QuxLKod2JKHc86idcQ7pxF7iLqoVkFOoZIJRuFyfA/viewform?embedded=true"
            height="1000"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className={styles.rsvp}
          >
            RSVP Form is Loading…
          </iframe>
        </div>
      </div>
    </main>
  );
}

function WeddingNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/wedding#lodging">Lodging</Link>
        </li>
        <li>
          <Link to="/wedding#faq">FAQ</Link>
        </li>
        <li>
          <Link to="/wedding#party">Bridal Party</Link>
        </li>
        <li>Pictures</li>
        <li>
          <Link to="https://www.theknot.com/stephanievalencicandjoshuadevine/registry">
            Registry
          </Link>
        </li>
        <li>
          <Link to="/rsvp">RSVP</Link>
        </li>
      </ul>
    </nav>
  );
}

function CollapsibleSection({ title, id, children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <hr />
      <h3
        className={styles.collapse_title}
        id={id}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <img
          className={
            styles.collapse_icon +
            (isCollapsed ? " " + styles.collapse_icon_collapsed : "")
          }
          src={expand_more}
          alt=""
        />
        {title}
      </h3>
      <div className={isCollapsed ? styles.collapsed : ""}>{children}</div>
    </>
  );
}

function Partier({ name, role, bio, image, right, fact }) {
  return (
    <div className={styles.partier + (right ? " " + styles.partier_right : "")}>
      <div className={styles.profile}>
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
      <div className={styles.bio}>
        <p>{bio}</p>
        {fact && <blockquote>&quot;{fact}&quot;</blockquote>}
      </div>
    </div>
  );
}

function Vendor({ role, name, url }) {
  return (
    <div className={styles.vendor}>
      <h4 className={styles.left}>{role}</h4>
      <div className={styles.dotted_line} />
      <Link to={url}>{name}</Link>
    </div>
  );
}

function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef("");

  // listen to location change using useEffect with location as dependency
  // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        lastHash.current = "";
      }, 100);
    }
  }, [location]);

  return null;
}

export default Wedding;
