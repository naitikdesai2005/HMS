import React from "react";
import "./Billpay.css";

const Billpay = () => {
  return (
    <div className="fee-structure">
      <h2>Fee Structure</h2>
      <table>
        <thead>
          <tr>
            <th>-</th>
            <th>Amount (per year)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AC Room</td>
            <td>28,000/-</td>
          </tr>
          <tr>
            <td>Non-AC Room</td>
            <td>30,000/-</td>
          </tr>
          <tr>
            <td>Food</td>
            <td>38,400/-</td>
          </tr>
          <tr className="total-row">
            <td>Total</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Billpay;
