// Booking engine to handle deals, packages and hotel bookings.
///Unified to keep codebase clean and logical.

import { useParams } from "react-router-dom";
import { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import styles from "./BookingEngine.module.css"
import Button from "../../components/Button/Button";


//Full Booking function
export default function BookingEngine() {
    const { dealID, packageID, hotelID } = useParams();

    //State for user-selected booking deatails
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState ("");
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);

    //Mock data (replace with API calls later)
    const bookingDetails = {
        title: hotelID ? "Ocean Breeze Hotel" : dealID ? "Summer Special" : packageID ? "Beach Paradise" : "Default Booking",
        description: "Your selected booking details",
        rooms: [
            {name : "Sea View Suite", price:250, nights:1},
            {name : "Standard Room", price:120, nights:1}
        ],
        taxes: 80,
        discounts: 30,
        currency: "ZAR",
    };

    //Calculate totals
    //1. Subtotal
    const subtotal = bookingDetails.rooms.reduce(
        (sum, room) => sum + room.price * room.nights, 0
    );
    
    //2.Total
    const total = subtotal + bookingDetails.taxes - bookingDetails.discounts;

    //Handle confirmation- Confirmation message
    const handleConfirm = () => {
        if (!checkIn || !checkOut){ alert("Please select check-in and check-out dates");
            return;
        }
        console.log("Booking confirmed:",{
            checkIn,
            checkOut,
            adults,
            children,
            total,
    });
};

return (
  <MainLayout hero={<h1 className={styles.heroTitle}>Booking Summary</h1>}>
      <section className={styles.summarySection}>
        <h2>{bookingDetails.title}</h2>
        <p>{bookingDetails.description}</p>

        {/* Date Picker */}
        <div className={styles.dateInputs}>
          <div className={styles.dateField}>
            <label>CheckIn:</label>
            <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className={styles.dateField}>
            <label>CheckOut:</label>
            <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>

        {/* Guest Selector */}
        <div className={styles.guestSelector}>
          <div>
            <label>Adults:</label>
            <input type="number" min="1" value={adults} onChange={(e) => setAdults(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Children:</label>
            <input type="number" min="0" value={children} onChange={(e) => setChildren(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Rooms Breakdown */}
        <div className={styles.roomsBreakdown}>
          {bookingDetails.rooms.map((room, idx) => (
            <div key={idx} className={styles.roomRow}>
              <span>{room.name}</span>
              <span>
                {bookingDetails.currency} {room.price} × {room.nights} night
              </span>
            </div>
          ))}
        </div>

        {/* Costs */}
        <div className={styles.costs}>
          <div>
            <span>Subtotal:</span>
            <span>{bookingDetails.currency} {subtotal}</span>
          </div>
          <div>
            <span>Taxes:</span>
            <span>{bookingDetails.currency} {bookingDetails.taxes}</span>
          </div>
          <div>
            <span>Discounts:</span>
            <span>-{bookingDetails.currency} {bookingDetails.discounts}</span>
          </div>
          <div className={styles.totalRow}>
            <strong>Total:</strong>
            <strong>{bookingDetails.currency} {total}</strong>
          </div>
        </div>

        <Button variant="primary" onClick={handleConfirm}>
          Confirm Booking
        </Button>
      </section>
    </MainLayout>  
);

};